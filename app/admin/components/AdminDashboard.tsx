'use client';

import React from 'react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Products',
      value: '2,847',
      change: '+12%',
      icon: '📦',
      color: '#0071ce'
    },
    {
      title: 'Active Orders',
      value: '1,234',
      change: '+8%',
      icon: '🛒',
      color: '#ffc220'
    },
    {
      title: 'Total Users',
      value: '15,678',
      change: '+15%',
      icon: '👥',
      color: '#4CAF50'
    },
    {
      title: 'Eco Products',
      value: '1,892',
      change: '+23%',
      icon: '🌱',
      color: '#2E7D32'
    }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', product: 'Eco-Friendly Water Bottle', amount: '$24.99', status: 'Shipped' },
    { id: '#12346', customer: 'Jane Smith', product: 'Bamboo Toothbrush Set', amount: '$15.99', status: 'Processing' },
    { id: '#12347', customer: 'Mike Johnson', product: 'Organic Cotton Bag', amount: '$19.99', status: 'Delivered' },
    { id: '#12348', customer: 'Sarah Wilson', product: 'Solar Power Bank', amount: '$49.99', status: 'Pending' }
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to your Walmart X EcoMart admin panel</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change positive">{stat.change} from last month</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Recent Orders</h2>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button className="action-btn primary">Add New Product</button>
            <button className="action-btn secondary">Manage Inventory</button>
            <button className="action-btn success">View Analytics</button>
            <button className="action-btn warning">Export Reports</button>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Eco Impact Summary</h2>
          <div className="eco-stats">
            <div className="eco-stat">
              <div className="eco-icon">🌍</div>
              <div className="eco-content">
                <h4>Carbon Reduced</h4>
                <p>2,847 kg CO₂</p>
              </div>
            </div>
            <div className="eco-stat">
              <div className="eco-icon">♻️</div>
              <div className="eco-content">
                <h4>Plastic Saved</h4>
                <p>1,234 kg</p>
              </div>
            </div>
            <div className="eco-stat">
              <div className="eco-icon">🌱</div>
              <div className="eco-content">
                <h4>Trees Planted</h4>
                <p>567 trees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}