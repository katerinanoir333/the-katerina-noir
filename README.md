# The Katerina Noir

A static, mobile-first GitHub Pages site for **The Katerina Noir**, positioned as an adult-only private House Noir portal for etiquette, screened access, tribute-based consideration, discretion, and curated social experience requests.

The site is intentionally non-explicit. It avoids public pricing, explicit service language, and guarantees. It is designed to attract serious applicants and filter out low-quality leads before they reach Instagram.

## What Was Built

- Mobile-first static website
- SEO title and meta description
- Canonical URL placeholder
- Open Graph and Twitter sharing tags
- Semantic HTML section structure
- Lightweight CSS and JavaScript
- Formspree-connected application form
- Honeypot anti-spam field
- FAQ section
- EN/ES language toggle
- FAQPage, Organization, WebSite, and Brand JSON-LD
- `robots.txt`
- `sitemap.xml`
- `404.html`
- `.nojekyll` for GitHub Pages
- Accessible labels, required markers, and form microcopy
- Reduced-motion support

## Open Locally

Open `index.html` directly in a browser.

No build step, server, framework, or package install is required.

## Publish On GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open **Settings**.
3. Go to **Pages**.
4. Choose **Deploy from a branch**.
5. Select the branch with `index.html`.
6. Save and wait for GitHub Pages to publish the site.

## Update The Public URL

After GitHub Pages gives the final URL, update these files:

- `index.html`
- `robots.txt`
- `sitemap.xml`

Search for:

```text
https://YOUR-GITHUB-USERNAME.github.io/the-katerina-noir/
```

Replace it with the real GitHub Pages URL.

Also update:

- `<link rel="canonical">`
- `og:url`
- JSON-LD `url` values
- `robots.txt` sitemap URL
- `sitemap.xml` `<loc>`

## Update Instagram

In `index.html`, search for:

```text
https://www.instagram.com/thekaterinanoir
```

Replace it if the Instagram handle changes.

## Form Connection

The application form is connected to Formspree:

```text
https://formspree.io/f/mnjkkdvo
```

Requests are sent through JavaScript using the form action.

Future security options:

- Enable Formspree CAPTCHA
- Add Cloudflare Turnstile
- Move sensitive verification to Tally, Jotform, or a secure verification provider
- Replace Formspree with a private backend endpoint

Do not collect ID uploads directly through this static site unless a secure verification provider is added.

## Edit Text

Most public copy lives in `index.html`.

The Spanish interface copy lives in `script.js`, inside the `i18n.es` object. Edit that object if you want to refine Spanish wording without changing the English source copy.

Key sections:

- Hero / Threshold
- The House Noir Manifesto
- For Those Who Understand
- Not For Everyone
- House Rules
- The Veil Check
- Tribute & Offerings
- Choose Your Intention
- Application Flow
- Privacy & Discretion
- Apply for Access
- FAQ

## Edit Colors

Color variables are at the top of `styles.css`.

Key variables:

- `--black`
- `--noir`
- `--wine`
- `--deep-red`
- `--crimson`
- `--ivory`
- `--muted-ivory`
- `--gold`
- `--soft-gold`

Use crimson and gold as accents, not body text colors.

## Public vs Private

Keep public:

- Brand positioning
- Rules
- Screening expectations
- General offering culture
- Boundaries
- FAQ

Keep private:

- Full pricing
- Personal phone number
- Home address or private locations
- Private schedule
- Explicit details
- ID documents
- Any promise of approval, intimacy, physical contact, or specific outcomes

## Safety Note

Do not publish explicit keywords, full prices, private personal data, or guarantees. Tribute should remain framed as consideration for time, attention, preparation, and access review only.
