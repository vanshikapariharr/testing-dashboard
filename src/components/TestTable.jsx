import React from 'react';

const TestTable = ({ tests, filter }) => {
  const filteredTests = tests.filter(t => {
    if (filter === 'all') return true;
    return t.status === filter;
  });

  return (
    <div className='test-table-container' data-cy="test-table">
      <div className='test-table-header'>
        <h2>Test Results</h2>
        <span className='test-count' data-cy="test-count">
          {filteredTests.length} tests
        </span>
      </div>
      <table className='test-table'>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Suite</th>
            <th>Status</th>
            <th>Duration</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTests.map(test => (
            <tr key={test.id} data-cy="test-row">
              <td data-cy="test-name">{test.name}</td>
              <td>
                <span className='suite-badge'>{test.suite}</span>
              </td>
              <td>
                <span
                  className={`status-badge ${test.status}`}
                  data-cy="test-status"
                >
                  {test.status}
                </span>
              </td>
              <td className='duration'>{test.duration}</td>
              <td className='date'>{test.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;