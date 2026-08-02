Deployed At Netlify
Live : https://todo-list539.netlify.app


# TODO List ✅

A modern **To-Do List** web app built with **React**, **Vite**, and **Tailwind CSS** — letting users add, manage, and track their daily tasks in a fast, responsive interface. Live and deployed on Netlify.

🔗 **Live Demo:** [todo-list539.netlify.app](https://todo-list539.netlify.app)

---

## 📖 Overview

This project is a task-management (to-do list) application built as a React front-end project. It lets users keep track of things they need to do — adding new tasks, marking them as complete, and removing them — all within a clean, component-based React UI styled with Tailwind CSS.

Unlike the plain HTML/CSS/JS mini-projects in this author's other repos, this one is a full **React + Vite** single-page application, complete with its own build pipeline, linting setup, and live production deployment.

---

## ✨ Features

- **Add tasks** — enter a new to-do item and add it to your list
- **Mark tasks as complete** — toggle tasks done/undone as you work through them
- **Delete tasks** — remove items you no longer need
- **Component-based UI** — built using reusable React components for a clean, maintainable structure
- **Responsive, utility-styled design** — built with Tailwind CSS for a modern look across screen sizes
- **Fast development experience** — powered by Vite for instant hot-module reload (HMR)
- **Live deployment** — hosted and publicly accessible via Netlify

---

## 🗂️ Project Structure

```
TODO-List/
├── public/                 # Static public assets served as-is
├── src/                    # React application source code (components, App entry point, styles)
├── index.html              # Vite's HTML entry point, mounts the React app
├── package.json             # Project dependencies and npm scripts
├── package-lock.json        # Locked dependency versions
├── vite.config.js           # Vite build/dev server configuration
├── eslint.config.js         # ESLint rules for code quality/linting
├── .gitignore                # Files/folders excluded from git
└── README.md                 # Project documentation
```

### `index.html`
The single HTML page that Vite injects the bundled React app into — contains the root `<div>` that React mounts onto.

### `src/`
Contains the actual React application, which typically includes:
- An entry file (e.g., `main.jsx`) that renders the root `App` component into the DOM
- An `App.jsx` component that manages the overall to-do list state
- Sub-components for individual pieces of UI, such as:
  - A task input form (for adding new to-dos)
  - A task list/item component (for displaying and interacting with each to-do, including complete/delete actions)
- Tailwind CSS classes and/or global styles for the app's visual design

### `vite.config.js`
Configures the **Vite** build tool and dev server, including the React plugin (`@vitejs/plugin-react`) and Tailwind CSS integration (`@tailwindcss/vite`).

### `package.json`
Declares the project as a React 19 + Vite 8 app, with the following key scripts:
- `dev` — start the local development server
- `build` — create a production build
- `preview` — preview the production build locally
- `lint` — run ESLint checks

---

## 🛠️ Built With

- **[React](https://react.dev/)** (v19) — component-based UI library
- **[Vite](https://vitejs.dev/)** (v8) — fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) — utility-first CSS framework for styling
- **ESLint** — code linting and quality checks
- **[Netlify](https://www.netlify.com/)** — hosting and deployment

---

## 🚀 Getting Started

This is a Node.js-based React project and requires npm to run locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes bundled with Node.js)

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Slakshminarayana2006/TODO-List.git
   ```
2. Navigate into the project folder:
   ```bash
   cd TODO-List
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown in your terminal (typically `http://localhost:5173`) in your browser.

### Build for production
```bash
npm run build
```
This generates an optimized production build. Preview it locally with:
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 🎮 How to Use

1. Open the app (locally or via the [live demo](https://todo-list539.netlify.app)).
2. Type a task into the input field and submit it to add it to your list.
3. Click a task to mark it as complete (or incomplete again).
4. Remove tasks you no longer need using the delete action.
5. Keep adding and managing tasks as your to-do list grows throughout the day.

---

## 🔮 Possible Future Improvements

- Persist tasks using local storage or a backend database, so the list survives page refreshes
- Add due dates, priorities, or categories/tags for tasks
- Add filtering (e.g., "All", "Active", "Completed") and search
- Add drag-and-drop reordering of tasks
- Support user accounts for multi-device syncing

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

No license has been specified for this project's original code. Consider adding one (e.g., MIT License) if you plan to share or accept contributions.

---

## 👤 Author

**Slakshminarayana2006**
GitHub: [@Slakshminarayana2006](https://github.com/Slakshminarayana2006)
