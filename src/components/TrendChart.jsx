import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const TrendChart = ({ tests }) => {
  const groupedByDate = tests.reduce((acc, test) => {
    const date = test.date;
    if (!acc[date]) {
      acc[date] = { date, passed: 0, failed: 0 };
    }
    if (test.status === 'passed') acc[date].passed++;
    if (test.status === 'failed') acc[date].failed++;
    return acc;
  }, {});

  const chartData = Object.values(groupedByDate).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className='trend-chart-container' data-cy="trend-chart">
      <div className='trend-chart-header'>
        <h2>Pass / Fail Trend</h2>
        <span className='trend-subtitle'>Results by date</span>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2437" />
          <XAxis
            dataKey="date"
            tick={{ fill: '#556080', fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: '#1f2437' }}
          />
          <YAxis
            tick={{ fill: '#556080', fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: '#1f2437' }}
          />
          <Tooltip
            contentStyle={{
              background: '#1a1d2e',
              border: '1px solid #1f2437',
              borderRadius: '8px',
              color: '#f1f5f9',
              fontSize: '12px'
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
          />
          <Line
            type="monotone"
            dataKey="passed"
            stroke="#4ade80"
            strokeWidth={2}
            dot={{ fill: '#4ade80', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="failed"
            stroke="#f87171"
            strokeWidth={2}
            dot={{ fill: '#f87171', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;