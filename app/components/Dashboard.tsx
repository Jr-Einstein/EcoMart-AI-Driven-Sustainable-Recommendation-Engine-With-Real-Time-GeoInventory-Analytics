'use client'

import React from 'react';
import './Dashboard.css';
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

function Dashboard() {
  const pieChartData = [
    { name: '1 Leaf', value: 20 },
    { name: '2 Leaf', value: 20 },
    { name: '3 Leaf', value: 20 },
    { name: '4 Leaf', value: 20 },
    { name: '5 Leaf', value: 20 },
  ];

  const lineData = [
    { name: 'Product 1', percentReduced: 20 },
    { name: 'Product 2', percentReduced: 60 },
    { name: 'Product 3', percentReduced: 25 },
    { name: 'Product 4', percentReduced: 100 },
    { name: 'Product 5', percentReduced: 50 },
    { name: 'Product 6', percentReduced: 60 },
    { name: 'Product 7', percentReduced: 80 },
  ];

  const COLORS = ['#AADB08', '#8AE804', '#64CF04', '#03BB03', '#008000'];

  return (
    <div className="main-container">
      <div className="main-title">
        <h2 className="dashboard_text">🌿 Eco Dashboard</h2>
      </div>

      <div className="container">
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3 className="box_title">Carbon Emission Reduced (in KGs)</h3>
              <div className="card_icon">🌱</div>
            </div>
            <h1>23</h1>
          </div>

          <div className="card">
            <div className="card-inner">
              <h3 className="box_title">Green Bits</h3>
              <div className="card_icon">💚</div>
            </div>
            <h1>13</h1>
          </div>

          <div className="card">
            <div className="card-inner">
              <h3 className="box_title">Your Offers</h3>
              <div className="card_icon">🎁</div>
            </div>
            <h1>5</h1>
          </div>
        </div>

        <div className="charts">
          <div className="card chart-card">
            <h3 className="box_title">Products of Different Badges</h3>
            <div className="pie-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="labels">
                {pieChartData.map((entry, index) => (
                  <div key={index} className="label">
                    <span className="label-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card chart-card">
            <h3 className="box_title">Plastic Reduction Per Item</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip />
                <Line type="monotone" dataKey="percentReduced" stroke="#0071dc" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
