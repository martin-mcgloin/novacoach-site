# novacoach.no

Website for NovaCoach: Novapoint and Quadri training and coaching by Patrick Mc Gloin, delivered by PLATANUS AS.

Static site built with [Eleventy](https://www.11ty.dev/) and hosted on Netlify. Every push to `main` deploys automatically. Norwegian at `/`, English at `/en/`.

## Edit the words
All copy lives in `src/_data/tr.js`, one object per language (`no`, `en`). Templates never contain sentences. Change a sentence there, commit, and Netlify redeploys.

Contact details, org number and phone: `src/_data/site.json`.

## Run locally
```
npm install
npm run dev      # http://localhost:8080 with live reload
npm run build    # writes _site/
```

## Structure
```
src/_data/tr.js          all copy, NO + EN
src/_data/site.json      name, email, phone, legal line
src/_includes/base.njk   layout, header, footer
src/_includes/form.njk   interest form (Netlify Forms)
src/_includes/pages/     one template per page type, shared by both languages
src/no/, src/en/         thin page stubs: URL, page type, link to the other language
src/css/style.css        styles
src/img/                 photos
```

## Form
`data-netlify="true"` on the form means Netlify collects submissions. Set up email notifications in Netlify: Site → Forms → Notifications → add Patrick's email. Spam is filtered by the honeypot field plus Netlify's own filter.

## Before launch
- [ ] `site.json`: confirm email (patrick@novacoach.no needs a mailbox or forward at Gigahost) and phone.
- [ ] Search `tr.js` for `[bekreft]` / `[confirm]` and resolve each with Patrick.
- [ ] Enable the testimonial block in `src/_includes/pages/om.njk` once a quote is approved.
- [ ] Point novacoach.no DNS at Netlify.
