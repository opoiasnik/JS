# Task Manager Application

This project is a simple task manager that allows users to add, delete, and reorder tasks. Each task includes a name, description, and date, and the tasks can be managed through a dynamic user interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Code Overview](#code-overview)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Event Listeners](#event-listeners)
- [DOM Manipulation](#dom-manipulation)
- [Reordering Tasks](#reordering-tasks)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Open `index.html` in your web browser to start the application.

## Usage

- Click the "Add Task" button to display the task form.
- Fill in the task details and click "Submit" to add a new task.
- Use the up and down arrows to reorder tasks.
- Click the delete icon to remove a task.
- Click the "Reset" button to reload the page and reset all tasks.

## Features

- Add tasks with name, description, and date.
- Display tasks in a list format.
- Reorder tasks using up and down arrows.
- Delete tasks from the list.
- Reset the task list.

## Code Overview

### HTML

The HTML file contains the structure of the task manager, including the task form, task list, and control buttons.

### CSS

The CSS file contains styles for the task manager, form, list items, and animations.

### JavaScript

The JavaScript file contains the main logic for the task manager, including event listeners, task management, and DOM manipulation.

## Event Listeners

- `DOMContentLoaded`: Initializes the task manager and sets up event listeners.
- `click` on "Add Task" button: Displays the task form.
- `click` on "Submit" button: Adds a new task.
- `click` on up/down arrows: Reorders tasks.
- `click` on delete icon: Removes a task.
- `click` on "Reset" button: Reloads the page and resets tasks.

## DOM Manipulation

### Adding Tasks

- When the "Submit" button is clicked, the form data is used to create a new task object.
- The task object is added to an array, and the DOM is updated to display the new task.

### Reordering Tasks

- Each task has up and down arrows to change its position in the list.
- Clicking the arrows updates the task array and re-renders the task list.

### Deleting Tasks

- Each task has a delete icon to remove it from the list.
- Clicking the delete icon removes the task from the array and updates the DOM.

![image](https://github.com/opoiasnik/JS/assets/122808904/f51083e5-2430-4bce-aace-35a2840eed33)

