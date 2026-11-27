# Coach's takes

One file per session review, named like the review it answers:
`reviews/2026-10-19-1907.md` → `reviews/coach/2026-10-19-1907.md`.

Written by Claude: in chat right after a session, by the push-triggered
GitHub Action (`.github/workflows/coach-take.yml`, minutes after a review
lands), or by the nightly scheduled check (a backup until about Dec 11, 2026).
Every writer skips a review that already has a file here, so a take is never
written twice. One gap: a review made with the "End session" Actions button is
pushed by a workflow, so it can't trigger the Action; the nightly check or a
manual run (Actions → Coach's take → Run workflow) covers it.

Each take: what the review gets wrong (if anything), the session against
rating-based expectations and lifetime matchup records, running trends, and
one thing to work on. Ranked games only.
