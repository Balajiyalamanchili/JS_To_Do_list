# To Do List

A simple, interactive To Do List web application built with HTML, CSS, and JavaScript. This project allows users to add, check off, delete, and reorder tasks, with all changes saved in the browser's local storage.

## Live Demo

[View the To Do List App](https://balaji-to-do-list.netlify.app/)

## Features

- **Add Tasks:** Enter a new activity and add it to your list.
- **Mark as Complete:** Check off tasks to mark them as done (with visual feedback).
- **Delete Tasks:** Remove tasks from your list.
- **Reorder Tasks:** Move tasks up or down in the list.
- **Persistent Storage:** All tasks and their states are saved in local storage and persist across page reloads.

## Folder Structure

```
to_do_list/
├── app.js         # Main JavaScript logic
├── stylee.css     # Styles for the app
├── index.html     # Main HTML file
└── README.md      # Project documentation
```

## How It Works

- The app uses a form to accept new tasks.
- Each task is displayed with a checkbox, delete button, and move up/down buttons.
- Interactions update the UI and save the current state to local storage under the key `balaji`.
- On page load, tasks are loaded from local storage and rendered.

## Getting Started

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. Start adding your tasks!

## Customization

- You can modify the styles in `stylee.css` to change the look and feel.
- The local storage key can be changed in `app.js` if needed.

<!-- ## Demo

![Screenshot of To Do List App](screenshot.png) Add a screenshot if available -->

## License

This project is open source and free to use.
