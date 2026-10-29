# Tarz Salon — website

A simple one-page salon website in plain HTML, CSS and JavaScript. No build step, no database.

## Files

| File | What it is |
|---|---|
| `index.html` | All the text, sections, phone numbers, address and photo links |
| `prices.js` | **The full price list** (Ladies, Men, Nail Bar). Edit prices here. |
| `style.css` | Colours, fonts and layout. Brand gold is `--gold` at the top. |
| `script.js` | Mobile menu, price tabs, search, appointment popup with service prefill |
| `images/` | Your photos, the tab icon `favicon.svg`, and your logo (`logo.png`) |

## How to edit

- **Prices:** open `prices.js` and change the numbers (no commas: `1200`). Use `null` for "not offered".
- **Logo:** copy your logo into `images/logo.png`, then in `index.html` follow the note above `<a href="#top" class="logo">`.
- **Phone:** update the telephone links and contact text in `index.html`.
- **Appointments:** booking links and price rows open the on-page appointment form. Visitors can review preferences and call to confirm. No details are sent or stored; an email/database endpoint must be connected before online requests can be submitted.
- **Timings:** in `index.html`, find "Timings" and write your opening hours.
- **Photos:** copy your photos into `images/` and change the links, e.g. `src="images/salon-1.jpg"`.
- **Colours:** at the top of `style.css`.

To preview, double-click `index.html`.

## Put it online with Vercel

1. Upload `index.html`, `prices.js`, `style.css`, `script.js` and the `images` folder to a GitHub repository (or drag the folder into Vercel).
2. In Vercel: **Add New → Project →** pick the repository.
3. Framework: **Other**. Build command: leave empty. Output directory: leave empty.
4. Click **Deploy**.

