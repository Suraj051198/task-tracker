import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [notifications, setNotifications] = useState([]);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const checkNotifications = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const newNotifications = tasks.filter(task => {
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      
      return (
        (dueDate.getTime() === today.getTime()) || // Due today
        (dueDate.getTime() < today.getTime() && task.status !== 'Completed') // Overdue
      );
    });

    setNotifications(newNotifications);
  }, [tasks]);

  // Check notifications whenever tasks change
  useEffect(() => {
    checkNotifications();
  }, [tasks, checkNotifications]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      status: task.status || 'Pending',
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  const value = {
    tasks,
    notifications,
    addTask,
    updateTask,
    deleteTask,
    clearAllTasks
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}; 