# من أول نغمة — Spacetoon Songless

Daily "name the song from the first notes" game for Spacetoon intros.
Clips unlock at 0.1 → 0.5 → 1 → 2 → 4 → 8 seconds (6 tries). Wrong guess or skip = longer clip.

## Files
```
index.html   the game
songs.js     the song list (edit this)
audio/       only needed for songs that use audio files
```

## Adding songs (YouTube)
1. Find the intro on YouTube, open **Share → Embed** to make sure embedding is allowed.
2. Paste the link into `songs.js`:
   ```js
   { title: "سلام دانك", aliases: ["slam dunk"], youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX", start: 3.5 },
   ```
3. `start` = the second of the first real note. Or use YouTube's "Copy video URL at current time"
   link (it ends in `&t=12`) and leave `start` out.
4. Prefer uploads WITHOUT ads before the video — an ad would play instead of the clip.
5. Add new songs at the END of the list so upcoming days don't change.

During the round the video is covered and only the sound plays. When the round ends
the cover disappears and the video plays from the start with normal YouTube controls.

## Tuning start times (test mode)
Open the site with `?test=5` at the end of the address (e.g. `…/index.html?test=5`) to play
song #5 from `songs.js` (counting from 0). The header shows which song and its `start`.
Nothing is saved in test mode, so your real stats aren't affected.

## Extra answer choices
`EXTRA_TITLES` in `songs.js` = shows that appear in the guess list but are never the answer.
They make guessing harder. When you find a song for one, move it into `SONGS`.

## YouTube timing note
YouTube can't stop at exactly 0.1 s — expect about ±0.2 s on the first clips.
For songs where that matters, use an audio file instead:
```js
{ title: "اسم المسلسل", aliases: [], file: "audio/song.mp3", start: 2.5 },
```

## Settings (top of the script in index.html)
- `START_DATE` — the date of puzzle #1 (Cairo time).
- `CLIPS` — clip lengths per attempt.
- `--bg` (top of the CSS) — page background color.

## Hosting
Works on GitHub Pages as-is. Open it through a server (GitHub Pages, VS Code Live Server),
not by double-clicking index.html.
