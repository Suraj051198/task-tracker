# Task Manager Application

A modern, feature-rich task management application built with React and Tailwind CSS that helps users organize their tasks efficiently through multiple views including Kanban board, Calendar view, and List view.

![Task Manager Screenshots](screenshots.png)

## Features

### 1. Multiple Task Views
- **Kanban Board**: Organize tasks in columns (Pending, In Progress, Completed)
- **Calendar View**: Visualize tasks in a monthly/weekly/daily calendar format
- **List View**: Traditional list view with sorting and filtering options

### 2. Task Management
- Create, edit, and delete tasks
- Set task priorities (High, Medium, Low)
- Assign due dates
- Add task descriptions
- Categorize tasks (Work, Study, Health, Travel, etc.)
- Track task status (Pending, In Progress, Completed)

### 3. Visual Features
- Priority-based color coding
  - High Priority: Red gradient
  - Medium Priority: Yellow gradient
  - Low Priority: Green gradient
- Status indicators with icons
  - Completed: ✓
  - In Progress: ⟳
  - Pending: ⏳
- Dark/Light mode support
- Responsive design

### 4. Advanced Features
- Global task search
- Task filtering by status, priority, and category
- Drag-and-drop task management in Kanban view
- Interactive calendar with task visualization
- Notifications for overdue and upcoming tasks

## Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Calendar**: react-big-calendar
- **Date Handling**: Moment.js
- **State Management**: React Context API

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd task-manager
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── Kanban/
│   │   ├── Calendar/
│   │   └── Tasks/
│   ├── context/
│   │   └── TaskContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Calendar.js
│   │   └── Kanban.js
│   └── App.js
├── public/
└── package.json
```

## Usage

1. **Adding a Task**
   - Click the "Add New Task" button
   - Fill in task details (title, description, due date, priority, category)
   - Click Save

2. **Managing Tasks**
   - Drag and drop tasks between columns in Kanban view
   - Click on tasks to edit or delete them
   - Use filters to sort and organize tasks
   - Switch between different views using the navigation menu

3. **Calendar View**
   - Navigate between months/weeks/days
   - View tasks based on their due dates
   - Tasks are color-coded by priority
   - Hover over tasks to see details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- react-big-calendar for the calendar component
- All contributors who have helped shape this project 