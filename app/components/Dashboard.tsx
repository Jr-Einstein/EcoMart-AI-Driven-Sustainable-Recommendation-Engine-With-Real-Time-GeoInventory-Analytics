'use client'

import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const data = [
    { name: 'Product 1', percentReduced: 20 },
    { name: 'Product 2', percentReduced: 60 },
    { name: 'Product 3', percentReduced: 25 },
    { name: 'Product 4', percentReduced: 100 },
    { name: 'Product 5', percentReduced: 50 },
    { name: 'Product 6', percentReduced: 60 },
    { name: 'Product 7', percentReduced: 80 },
  ];

  const pieChartData = [
    { name: '1 Leaf', value: 20 },
    { name: '2 Leaf', value: 20 },
    { name: '3 Leaf', value: 20 },
    { name: '4 Leaf', value: 20 },
    { name: '5 Leaf', value: 20 },
  ];

  const COLORS = ['#AADB08', '#8AE804', '#64CF04', '#03BB03', '#008000'];

  return (
    <div className="main-container">
      <div className="main-title">
        <h2 className="dashboard_text">DASHBOARD</h2>
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
            <div className="card-inner">
              <h3 className="box_title">Products of different badges</h3>
            </div>
            <div className='pie_and_label'>
              <div className="pie-chart-placeholder">
                <div className="chart-info">
                  <h4>Eco Badge Distribution</h4>
                  <p>Your sustainable shopping impact</p>
                </div>
              </div>
              <div className="labels">
                <div className='label_texts'>
                  {pieChartData.map((entry, index) => (
                    <div key={`label-${index}`} className="label">
                      <span className="label-color" style={{ backgroundColor: COLORS[index % COLORS.length]}}></span>
                      <span>{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="graph-card">
            <div className="chart-header">
              <h3>Plastic Reduction Per Item</h3>
            </div>
            <div className="line-chart-placeholder">
              <div className="chart-info">
                <h4>Environmental Impact</h4>
                <p>Track your contribution to reducing plastic waste</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;