(function () {
  "use strict";
  const form = document.getElementById("site-search-form");
  const queryInput = document.getElementById("site-search-query");
  const status = document.getElementById("site-search-status");
  const results = document.getElementById("site-search-results");
  if (!form || !queryInput || !status || !results) return;

  let indexPromise;
  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch((document.querySelector('meta[name="site-search-index"]') || {}).content || "/kuldeep-prajapat/search-index.json")
        .then(function (response) {
          if (!response.ok) throw new Error("Index unavailable");
          return response.json();
        });
    }
    return indexPromise;
  }
  function normalize(text) {
    return String(text || "").toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  }
  function rank(item, terms) {
    const title = normalize(item.title);
    const description = normalize(item.description);
    const body = normalize(item.content);
    let score = 0;
    terms.forEach(function (term) {
      if (title.includes(term)) score += 8;
      if (description.includes(term)) score += 3;
      if (body.includes(term)) score += 1;
    });
    return score;
  }
  function showResults(items, query) {
    results.replaceChildren();
    const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      status.textContent = "Enter a topic to search the site.";
      return;
    }
    const matches = items.map(function (item) {
      return { item: item, score: rank(item, terms) };
    }).filter(function (entry) {
      return entry.score > 0;
    }).sort(function (a, b) {
      return b.score - a.score || a.item.title.localeCompare(b.item.title);
    }).slice(0, 30);
    status.textContent = matches.length + (matches.length === 1 ? " result" : " results") + " for “" + query.trim() + "”.";
    if (!matches.length) {
      const empty = document.createElement("li");
      empty.className = "search-empty";
      empty.textContent = "No matches found. Try a broader term such as “cluster”, “photoionization”, or “time delay”.";
      results.appendChild(empty);
      return;
    }
    matches.forEach(function (entry) {
      const item = entry.item;
      const li = document.createElement("li");
      li.className = "search-result";
      const type = document.createElement("span");
      type.className = "meta";
      type.textContent = item.type || "Page";
      const heading = document.createElement("h2");
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title || "Untitled page";
      heading.appendChild(link);
      const url = document.createElement("p");
      url.className = "search-url";
      url.textContent = item.url;
      const description = document.createElement("p");
      description.textContent = item.description || item.content || "";
      li.append(type, heading, url, description);
      results.appendChild(li);
    });
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = queryInput.value.trim();
    if (!query) return;
    status.textContent = "Searching the site index…";
    loadIndex().then(function (items) {
      showResults(items, query);
    }).catch(function () {
      status.textContent = "The search index could not be loaded. Please try again later.";
    });
  });
  const params = new URLSearchParams(window.location.search);
  const initial = params.get("q");
  if (initial) {
    queryInput.value = initial;
    form.requestSubmit();
  }
})();