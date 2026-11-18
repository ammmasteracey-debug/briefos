# Kurogami BriefOS

An editorial journal of process intelligence and the signals reshaping how
operators work. The publication is organized around a featured story, subject
sections, a dated archive, and long-form story pages.

## Run locally

```bash
npm install
npm run dev
```

## Publication structure

- `/` is the front page, with the current lead, latest stories, sections, and
  source/section filters.
- `/section/[slug]` groups stories by subject.
- `/archive` groups stories by publication month.
- `/brief/[slug]` is the full story page, with related coverage and onward
  reading.

Stories, sources, categories, publication dates, and related coverage are defined
in [`data/briefs.ts`](./data/briefs.ts). Adding a story there makes it available
to the front page, archive, relevant section, and generated story route.

## Checks

```bash
npm run typecheck
npm run build
```
