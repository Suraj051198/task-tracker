import React from 'react';
import NotificationPanel from '../components/NotificationPanel';
import SearchBar from '../components/SearchBar';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-6">
            <SearchBar />
          </div>
          <TaskList />
        </div>
        <div className="lg:col-span-1">
          <NotificationPanel />
        </div>
      </div>
    </div>
  );
};

export default Home; 