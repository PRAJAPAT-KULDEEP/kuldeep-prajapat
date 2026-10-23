# Kuldeep Prajapat website — visual refresh patch

This patch addresses three visible issues on the live site:

1. `assets/css/main.scss` now imports `_sass/_custom.scss`, so the site's custom hero layout, buttons, cards, spacing, and research-interest chips are applied.
2. `_pages/about.md` has a shorter, more focused home page and removes unfinished journal entries and explicit figure-placeholder cards.
3. `_data/navigation.yml` hides Journal and Videos links until real posts/videos are added, keeping the top navigation focused.

## Apply the patch in GitHub

For each file below, open the matching file in your repository, click the pencil (Edit) icon, replace its complete contents with the file from this patch, then click **Commit changes** on the `master` branch:

- `assets/css/main.scss`
- `_pages/about.md`
- `_data/navigation.yml`

Keep the directory paths exactly as shown. Do not upload these files to the repository root without their folders.

## Make these small manual edits in `_config.yml`

Do not replace your entire `_config.yml` with this README. Edit only these existing values:

- Set `future: false` (so future-dated template posts aren't published).
- Under `author:`, set `name: "Kuldeep Prajapat"`, `bio: "Theoretical and computational AMO physics at IIT Mandi"`, `location: "India"`, and `employer: "IIT Mandi"`.
- Clear placeholder profile values: set `orcid:` to blank until you have the real ORCID URL; set `pubmed:` and `bluesky:` to blank unless you have correct profile values.
- The theme usually expects only the LinkedIn profile slug for `author.linkedin`, not a full URL. If your link is `https://in.linkedin.com/in/kuldeep-prajapat-2814ba351`, set `linkedin: "kuldeep-prajapat-2814ba351"`.
- Keep the existing site values: `url: https://prajapat-kuldeep.github.io`, `baseurl: "/kuldeep-prajapat"`, and `repository: "PRAJAPAT-KULDEEP/kuldeep-prajapat"`.

## After committing

1. Open the **Actions** tab and check the newest deployment run.
2. Wait for a green check mark; if it fails, open the run and share the error message.
3. Refresh the live website with a hard refresh (Ctrl+Shift+R on desktop; on mobile, reload after clearing the browser cache if the old style remains).

The old sample posts may still exist under `_posts/`; they are no longer linked from the homepage or top navigation. Delete template sample posts from `_posts/` before sharing their archive or direct links.
