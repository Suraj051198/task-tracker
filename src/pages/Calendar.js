import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTaskContext } from '../context/TaskContext';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const { tasks } = useTaskContext();

  const events = tasks.map(task => ({
    id: task.id,
    title: task.title,
    start: new Date(task.dueDate),
    end: new Date(task.dueDate),
    priority: task.priority,
    status: task.status
  }));

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return {
          background: 'bg-gradient-to-r from-red-500 to-red-600',
          text: 'text-white',
          border: 'border-red-700'
        };
      case 'Medium':
        return {
          background: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
          text: 'text-gray-900',
          border: 'border-yellow-600'
        };
      case 'Low':
        return {
          background: 'bg-gradient-to-r from-green-400 to-green-500',
          text: 'text-white',
          border: 'border-green-600'
        };
      default:
        return {
          background: 'bg-gradient-to-r from-blue-400 to-blue-500',
          text: 'text-white',
          border: 'border-blue-600'
        };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return '✓';
      case 'In Progress':
        return '⟳';
      case 'Pending':
        return '⏳';
      default:
        return '';
    }
  };

  const eventStyleGetter = (event) => {
    const colors = getPriorityColor(event.priority);
    const statusIcon = getStatusIcon(event.status);

    return {
      style: {
        background: `var(--${colors.background.replace('bg-', '')})`,
        color: colors.text,
        borderRadius: '0.5rem',
        border: `1px solid ${colors.border}`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '4px 8px',
        fontSize: '0.875rem',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        cursor: 'default'
      }
    };
  };

  const customEvent = ({ event }) => {
    const statusIcon = getStatusIcon(event.status);
    return (
      <div className="flex items-center gap-1">
        <span className="text-xs">{statusIcon}</span>
        <span className="truncate">{event.title}</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar View</h2>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">High Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Medium Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Low Priority</span>
            </div>
          </div>
        </div>
        <div className="h-[700px]">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            components={{
              event: customEvent
            }}
            views={['month', 'week', 'day']}
            defaultView="month"
            className="border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300"
            selectable={false}
            resizable={false}
            draggableAccessor={() => false}
            style={{
              height: '100%',
              '--rbc-today-bg': 'rgba(59, 130, 246, 0.1)',
              '--rbc-selected-bg': 'rgba(59, 130, 246, 0.2)',
              '--rbc-event-bg': 'transparent',
              '--rbc-event-border': 'transparent',
              '--rbc-off-range-bg': '#f8fafc',
              '--rbc-off-range-color': '#94a3b8',
              '--rbc-header-color': '#1e293b',
              '--rbc-today-color': '#2563eb',
              '--rbc-current-time-indicator-color': '#ef4444',
              '--rbc-selected-date-bg': 'rgba(59, 130, 246, 0.2)',
              '--rbc-selected-date-color': '#2563eb',
              '--rbc-calendar-border': '1px solid #e2e8f0',
              '--rbc-day-slot-min-height': '120px',
            }}
            formats={{
              dateFormat: 'D',
              dayFormat: 'D',
              monthHeaderFormat: 'MMMM YYYY',
              dayHeaderFormat: 'dddd, MMMM D',
              dayRangeHeaderFormat: ({ start, end }) => 
                `${moment(start).format('MMM D')} - ${moment(end).format('MMM D, YYYY')}`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage; 