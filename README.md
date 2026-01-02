# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Projects Section

- Location: `src/components/Projects.jsx` renders the projects list; data lives in `src/data/content.js` under `projects`.
- Add a project by appending an object to `projects` with fields: `id`, `title`, `description`, `features` (array of strings), `tech` (array of strings), `github` (url), `demo` (url or `#`), `image` (url).
- Accessibility: the section uses `aria-labelledby` and renders as a `list` with `listitem`s. Action links include descriptive `aria-label`s and `aria-describedby` tied to the project description.
- Testing: unit tests for this section are in `src/__tests__/Projects.test.jsx`. Run `npm run test` to validate rendering, link attributes, and conditional demo behavior.
- Quality: run `npm run lint` to check code quality. Images use `loading="lazy"` and `decoding="async"` for performance.
