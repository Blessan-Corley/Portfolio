# TypeScript Migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the portfolio codebase from JavaScript/JSX to strict TypeScript/TSX with explicit shared types, TS-aware linting, and a passing build/typecheck pipeline.

**Architecture:** Migrate from the bottom up so runtime behavior stays stable while the type system is introduced. Shared data contracts and utility types land first, hooks and entrypoints next, and the component tree last so props are driven by reusable interfaces rather than ad hoc local types.

**Tech Stack:** React 19, Vite 7, TypeScript, ESLint 9 flat config, Framer Motion, React Icons

---

## Chunk 1: Toolchain

### Task 1: Configure TypeScript and linting

**Files:**
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `src/vite-env.d.ts`
- Modify: `package.json`
- Modify: `eslint.config.js`
- Modify: `vite.config.js`

- [ ] Add strict TypeScript config for the app and Vite/node config.
- [ ] Add a `typecheck` script using `tsc --noEmit`.
- [ ] Extend ESLint flat config to cover `*.ts` and `*.tsx` with `typescript-eslint`.
- [ ] Convert Vite config to TypeScript-aware shape or keep JS with TS-checked compatibility if needed.
- [ ] Run `npm run typecheck` and confirm it fails for missing migrations before proceeding.

## Chunk 2: Shared Contracts

### Task 2: Introduce reusable domain types

**Files:**
- Create: `src/types/index.ts`
- Modify: `src/data/about.js`
- Modify: `src/data/competitiveProgramming.js`
- Modify: `src/data/experience.js`
- Modify: `src/data/projects.js`
- Modify: `src/data/site.js`
- Modify: `src/data/skills.js`
- Modify: `src/lib/projectLinks.js`
- Modify: `src/lib/utils.js`

- [ ] Define shared interfaces for projects, experience entries, skills, contact info, footer links, and component helper unions.
- [ ] Convert data/lib files to `.ts` and annotate exports with those interfaces.
- [ ] Remove any implicit stringly-typed helper logic where literal unions are safer.
- [ ] Run `npm run typecheck` and fix shared-layer errors before touching components.

## Chunk 3: Hooks and App Shell

### Task 3: Convert the base runtime layer

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`
- Modify: `src/hooks/useCopyToClipboard.js`
- Modify: `src/hooks/useExperienceTimeline.js`
- Modify: `src/hooks/useViewport.js`

- [ ] Convert entrypoints and hooks to `.ts` / `.tsx`.
- [ ] Type browser APIs, refs, timers, and return signatures explicitly.
- [ ] Keep lazy-loading and current runtime behavior unchanged.
- [ ] Run `npm run typecheck` and `npm run build` before moving into the component tree.

## Chunk 4: Component Migration

### Task 4: Convert the section/component tree

**Files:**
- Modify: `src/components/**/*.jsx`

- [ ] Convert components to `.tsx`.
- [ ] Add explicit prop types for all section shells and extracted subcomponents.
- [ ] Type motion props, DOM refs, callback handlers, and optional props without collapsing to `any`.
- [ ] Add narrow helper types where complex visual components need structured config.
- [ ] Run `npm run typecheck` after each major section cluster.

## Chunk 5: Final Verification

### Task 5: Verify the migration end to end

**Files:**
- Modify: any remaining import paths or config files surfaced by verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Fix any remaining strict-type issues instead of suppressing them with `any` unless a third-party type boundary genuinely requires it.
