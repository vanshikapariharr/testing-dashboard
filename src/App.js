import React, { useState } from 'react';
import './App.css';
import SummaryCards from './components/SummaryCards';
import FilterBar from './components/FilterBar';
import TestTable from './components/TestTable';
import TrendChart from './components/TrendChart';
import testData from './data/testData';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="App">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h1 data-cy="dashboard-title">Testing Analytics Dashboard</h1>
          <p>Automated test results across 50 test cases</p>
        </div>
        <span className="dashboard-badge">● Live</span>
      </div>
      <SummaryCards tests={testData} />
      <TrendChart tests={testData} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TestTable tests={testData} filter={filter} />
    </div>
  );
}

export default App;