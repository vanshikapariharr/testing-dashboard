import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className='filter-bar' data-cy="filter-bar">
      <button
        className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter('all')}
        data-cy="filter-all"
      >
        All
      </button>
      <button
        className={filter === 'passed' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter('passed')}
        data-cy="filter-passed"
      >
        Passed
      </button>
      <button
        className={filter === 'failed' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter('failed')}
        data-cy="filter-failed"
      >
        Failed
      </button>
    </div>
  );
};

export default FilterBar;