# novacoach.no

Website for NovaCoach: Novapoint and Quadri training and coaching by Patrick Mc Gloin, delivered by PLATANUS AS.

Static site built with [Eleventy](https://www.11ty.dev/) and hosted on Netlify. Every push to `main` deploys automatically and uses Netlify build credits, so batch changes and push once per round rather than per edit. Norwegian at `/`, English at `/en/`.

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
src/css/style.css        styles (design: dark "Asfalt" concept)
src/img/                 photos and road-model images
linkedin/                LinkedIn launch kit: images, post texts, render script (not deployed)
```

## Form
`data-netlify="true"` on the form means Netlify collects submissions. Set up email notifications in Netlify: Site → Forms → Notifications → add Patrick's email. Spam is filtered by the honeypot field plus Netlify's own filter.

## Before launch
- [ ] `site.json`: swap patrickjmcgloin@outlook.com for patrick@novacoach.no once the mailbox exists; confirm phone.
- [ ] Enable the testimonial block in `src/_includes/pages/om.njk` once a quote is approved.
- [ ] Point novacoach.no DNS at Netlify.

## Proposed changes from Patrick's LinkedIn post
Not done yet; waiting on a decision. Patrick's own post text is in `linkedin/README.md`.
- [ ] Add "som et supplement til Trimbles egne tilbud" / "a complement to Trimble's own offerings" next to the not-affiliated line in the footer, and on the front page.
- [ ] Use his wording "opplæring og prosjektstøtte" (training and project support), e.g. eyebrow and meta: "Kurs, coaching og prosjektstøtte i Novapoint og Quadri".
- [ ] Mention that Novapoint Veg and Quadri are now part of Trimble Infrastructure Design Suite.
- [ ] His title: email signature says Senior Product Director, the site says produktdirektør / product director.
- [x] Link preview: `linkedin/img/novacoach-og-no.png` / `-en.png` (1200×630) copied as `src/img/og-no.jpg` / `og-en.jpg` and used as `og:image` in `base.njk`.
- [ ] Footer link to the NovaCoach LinkedIn page once it exists ("Følg NovaCoach på LinkedIn").
