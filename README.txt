THE WORLD IS A GHETTO — microsite
==================================

FILES
  index.html       Homepage — the test-reel montage (scored to WAR), masthead, links out
  treatment.html   The full treatment, Reel 2
  cast.html        Cast list + the WAR needle-drop pull-quote
  credits.html     Song credit + production notes
  assets/          Shared images, CSS, and JS used across all four pages

RUNNING IT
  Double-clicking index.html works for everything except the score.

  YouTube's embedded player needs the page to be served over http(s) to play
  audio reliably — opening the file directly (file://) often blocks it, since
  the browser reports the page's origin as "null." If you open the file
  directly, you'll see a small warning on the opening screen when this happens.

  To get the score working, serve the folder instead of opening the file:

    Option A — quick local server (needs Python, already on most Macs):
      1. Open Terminal
      2. cd into this folder
      3. Run:  python3 -m http.server
      4. Open http://localhost:8000 in your browser

    Option B — drag-and-drop hosting:
      Drag this whole folder onto https://app.netlify.com/drop
      (no account needed) — gives you a live URL in seconds.

    Option C — any static host:
      GitHub Pages, Vercel, S3, etc. — just needs to serve the folder as-is,
      nothing to build or configure.

MANUAL AUDIO CONTROL
  If the score doesn't start automatically when you click "Run Sequence,"
  use the 🔊 Score button in the reel's control bar (next to Pause/Restart)
  to start or stop it manually.
