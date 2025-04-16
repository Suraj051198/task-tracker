import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Kanban from './pages/Kanban';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
              </Routes>
            </main>
          </div>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App; 