import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const NotificationPanel = () => {
  const { notifications } = useTaskContext();

  const getNotificationType = (task) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);

    if (dueDate.getTime() < today.getTime()) {
      return {
        bg: 'bg-red-50',
        text: 'text-red-800',
        border: 'border-red-200',
        label: 'Overdue'
      };
    }
    return {
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
      border: 'border-yellow-200',
      label: 'Due Today'
    };
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map(task => {
          const type = getNotificationType(task);
          return (
            <div key={task.id} className={`p-4 ${type.bg} ${type.border}`}>
              <div className="flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${type.text} ${type.bg}`}>
                  {type.label}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-900">{task.title}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationPanel; 