# The Katerina Noir

A static, interactive website for **The Katerina Noir**. It works as a private invitation portal and lead filter for people arriving from Tinder or Instagram.

The site explains the House Rules, offerings, access process, date protocol, private preferences, boundaries, and request flow without publishing private details or explicit promises.

## Open Locally

Open `index.html` directly in a browser.

No build step, server, framework, or package install is required.

## Publish On GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open **Settings**.
3. Go to **Pages**.
4. Choose the branch that contains `index.html`.
5. Save and wait for GitHub Pages to publish the site.

## Edit Text

Most public copy lives in `index.html`.

Common edits:

- Hero title and tagline: search for `The Katerina Noir` and `Velvet. Intention. Respect.`
- House Rules: search for `House Rules`
- Offerings: search for `The Offering System`
- Form fields: search for `Request Access`
- Instagram link: search for `thekaterinanoir`

## Edit Colors

Color variables are at the top of `styles.css`.

Key variables:

- `--black`
- `--charcoal`
- `--wine`
- `--crimson`
- `--deep-red`
- `--gold`
- `--soft-gold`
- `--ivory`
- `--muted`

## Change Links

The Instagram link is in the footer of `index.html`.

Replace:

```html
https://www.instagram.com/thekaterinanoir
```

with the final public profile URL if needed.

## Connect The Form Later

The current form does not send data to a server. It validates required fields and shows a private confirmation message.

Future connection options:

- Formspree
- Tally
- Google Forms
- Netlify Forms
- Custom backend

The connection notes are also included as comments inside `index.html` and `script.js`.

## Public vs Private

Keep public:

- Brand tone
- Rules
- General access process
- General boundaries
- High-level offering language

Keep private:

- Full pricing
- Personal phone number
- Home address or private locations
- Personal schedule
- Explicit details
- Any promises of approval, intimacy, physical contact, or specific outcomes

## Safety Note

Do not publish full prices, private personal data, explicit details, or guarantees. Offerings should be described as consideration for time, attention, preparation, and access review only.
