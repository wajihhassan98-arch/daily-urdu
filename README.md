# Daily Urdu — PWA

Offline flashcard app. 314 cards across 7 decks, plus a rotating sentence of the day.
Progress is stored in localStorage on the device.

**Speak mode**: toggle it on the home screen and you must say the Urdu out loud —
the app listens, compares what it heard against the card, and only passes you if
it's close. Needs microphone permission and an internet connection (speech
recognition is server-side); everything else works offline.

## Put it online (phone-only, no computer needed)

1. On github.com (mobile browser works fine), create a new **public** repo named `daily-urdu`.
2. Upload all files in this folder to the repo root:
   `index.html`, `app.js`, `manifest.json`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`
   (GitHub's "Add file → Upload files" can pull them from the Files app.)
3. Repo → **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)** → Save.
4. Wait ~1 minute, then open `https://<your-username>.github.io/daily-urdu/`
5. In Safari: **Share → Add to Home Screen**.

It now launches full-screen with its own icon and works offline.

## Updating later

Edit `app.js` in GitHub's web editor (add cards to the `DECKS` object), commit, then bump
`const CACHE = "urdu-v1"` in `sw.js` to `"urdu-v2"` so the service worker fetches fresh files.

## Adding cards

Inside `DECKS`, each card is a two-item array: `["front", "back"]`.
Decks listed in `ENGLISH_FRONT` show English first (you produce the Urdu).
