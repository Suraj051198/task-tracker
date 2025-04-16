import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const SearchBar = () => {
  const { tasks } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = tasks.filter(task => 
      task.title.toLowerCase().includes(term.toLowerCase()) ||
      task.description.toLowerCase().includes(term.toLowerCase())
    );
    
    setSearchResults(results);
    setShowResults(true);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
          {searchResults.map(task => (
            <div
              key={task.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
            >
              <div className="font-medium text-gray-900">{task.title}</div>
              <div className="text-sm text-gray-500 truncate">{task.description}</div>
              <div className="text-xs text-gray-400">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
      {showResults && searchResults.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg p-4 text-gray-500">
          No tasks found
        </div>
      )}
    </div>
  );
};

export default SearchBar; 