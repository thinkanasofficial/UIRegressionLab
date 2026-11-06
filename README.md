# Prism UI — Component Library and Visual Regression Lab

A TypeScript design system demonstration with seven reusable component types, an interactive showcase, Storybook stories, and automated visual regression infrastructure.

## Reusable components

- **DataTable**: search (parent-controlled), sorting, bulk row selection, pagination and action handlers
- **RangeSlider**: accessible native input, keyboard step support, CSS progress track and live-preview hook
- **ConfirmationDialog**: `aria-modal`, initial focus, Tab focus wrap, Escape handling, destructive confirmation
- **Button, Badge, TextField, Tabs**: typed foundational primitives with visual variants

The showcase supports interactive tables, slider token export, modal scenarios and visual palette selection. Storybook includes individual and filtered states.

## Quick start

```bash
npm install
npm run dev
npm run storybook
npm run test
npx playwright install chromium
npm run test:ui
```

## Visual regression (two complementary checks)

1. **Independent design specification:** `mockups/reference-wireframe.svg` and `mockups/design-spec.json` define the original layout hierarchy and measurable geometry, checked by `tests/layout.spec.ts`.
2. **Pixel comparison after approval:** at 1440×900, Playwright snapshots compare full pages and the modal; the standalone `scripts/compare-mockup.mjs` uses `pixelmatch` and writes `evals/visual-diff.png`.

Since the external npm registry was unavailable when this repository was authored, no unreviewed PNG was presented as a passing test. To establish the first reference:

```bash
# Terminal A: npm run dev
# Terminal B:
npm run mockup:approve  # review mockups/reference-showcase.png
npm run snapshots:update # review tests/__screenshots__/*.png
npm run test:visual
npm run mockup:compare
```

Commit the approved references and **never** run update snapshots automatically in CI. A real supplied Figma mockup can replace the approved reference screenshot without changing the harness.

Read `evals/README.md` for pass/fail definitions, test evidence and known constraints.
