/* Per-image sharing controls for the academic gallery. */
(() => {
  "use strict";

  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    field.style.pointerEvents = "none";
    document.body.appendChild(field);
    field.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } finally {
      field.remove();
    }

    if (!copied) {
      throw new Error("Clipboard access was unavailable. Open the image and copy its address from the browser.");
    }
  }

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-gallery-share-action]");
    if (!button) return;

    const controls = button.closest(".gallery-share");
    if (!controls) return;

    const status = controls.querySelector(".gallery-share__status");
    const imageUrl = controls.dataset.imageUrl;
    const title = controls.dataset.imageTitle || "Gallery image by Kuldeep Prajapat";
    const shareText = controls.dataset.shareText || title;
    const action = button.dataset.galleryShareAction;

    if (!imageUrl) {
      if (status) status.textContent = "The image link could not be found.";
      return;
    }

    button.disabled = true;
    if (status) status.textContent = "";

    try {
      if (action === "share") {
        if (typeof navigator.share === "function") {
          await navigator.share({ title, text: shareText, url: imageUrl });
          if (status) status.textContent = "Share menu opened.";
        } else {
          await copyText(imageUrl);
          if (status) status.textContent = "Your browser has no device share menu. Image link copied; paste it into your preferred app.";
        }
      } else if (action === "copy-link") {
        await copyText(imageUrl);
        if (status) status.textContent = "Image link copied. Paste it into a post or message.";
      } else if (action === "copy-researchgate") {
        await copyText(shareText + "\n\nImage: " + imageUrl);
        if (status) status.textContent = "Caption and image link copied. Paste them into your ResearchGate post or message.";
      }
    } catch (error) {
      if (error && error.name === "AbortError") {
        if (status) status.textContent = "Sharing cancelled.";
      } else if (status) {
        status.textContent = "Could not complete that action. You can still open the image and copy its address.";
      }
    } finally {
      button.disabled = false;
    }
  });
})();
