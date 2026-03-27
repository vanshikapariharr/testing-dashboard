import React from 'react';

const SummaryCards = ({ tests }) => {
  const total = tests.length;
  const passed = tests.filter(t => t.status === 'passed').length;
  const failed = tests.filter(t => t.status === 'failed').length;
  const passRate = total === 0 ? 0 : Math.round((passed / total) * 100);

  return (
   
    <div className='summary-cards' data-cy="summary-cards">
      <div className='card' data-cy="total-card">
        <h3>Total Tests</h3>
        <p data-cy="total-count">{total}</p>
        <div className='card-hint'>Across 8 suites</div>
      </div>
      <div className='card passed' data-cy="passed-card">
        <h3>Passed</h3>
        <p data-cy="passed-count">{passed}</p>
        <div className='card-hint'>↑ 3 from last run</div>
      </div>
      <div className='card failed' data-cy="failed-card">
        <h3>Failed</h3>
        <p data-cy="failed-count">{failed}</p>
        <div className='card-hint'>↓ 2 from last run</div>
      </div>
      <div className='card rate' data-cy="rate-card">
        <h3>Pass Rate</h3>
        <p data-cy="pass-rate">{passRate}%</p>
        <div className='card-hint'>Target: 90%</div>
      </div>
    </div>

  );
};

export default SummaryCards;