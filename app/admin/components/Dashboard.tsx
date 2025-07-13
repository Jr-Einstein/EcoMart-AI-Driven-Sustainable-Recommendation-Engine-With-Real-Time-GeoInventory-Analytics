import React from 'react';
import { TrendingUp, Package, AlertTriangle, MapPin, Users, DollarSign } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Stores',
      value: '156',
      change: '+12%',
      changeType: 'positive',
      icon: MapPin,
      color: 'blue'
    },
    {
      title: 'Total Inventory',
      value: '₹45.2M',
      change: '+8.2%',
      changeType: 'positive',
      icon: Package,
      color: 'green'
    },
    {
      title: 'Products Expiring',
      value: '1,247',
      change: '-15%',
      changeType: 'negative',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Monthly Revenue',
      value: '₹12.8M',
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Active Customers',
      value: '89.2K',
      change: '+5.4%',
      changeType: 'positive',
      icon: Users,
      color: 'indigo'
    },
    {
      title: 'Avg. Demand',
      value: '78%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'expiry',
      message: 'Organic Milk expires in 2 days at Jaipur Store',
      time: '2 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'demand',
      message: 'High demand for Rice in West Bengal region',
      time: '4 hours ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'inventory',
      message: 'Low stock alert for Bread at Gurgaon Store',
      time: '6 hours ago',
      priority: 'medium'
    },
    {
      id: 4,
      type: 'transfer',
      message: 'Transfer completed: Vegetables to Indore Store',
      time: '8 hours ago',
      priority: 'low'
    }
  ];

  const topPerformingStores = [
    { name: 'Gurgaon Central', revenue: '₹2.4M', growth: '+18%' },
    { name: 'Kolkata Park Street', revenue: '₹2.1M', growth: '+15%' },
    { name: 'Jaipur Pink City', revenue: '₹1.9M', growth: '+12%' },
    { name: 'Bhopal DB Mall', revenue: '₹1.7M', growth: '+10%' },
    { name: 'Indore Treasure Island', revenue: '₹1.5M', growth: '+8%' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Walmart Inventory Management</h1>
        <p className="text-blue-100">Monitor your stores across Rajasthan, Haryana, Madhya Pradesh, and West Bengal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Recent Alerts</h3>
          </div>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(alert.priority)}`}>
                  {alert.priority}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Stores */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Top Performing Stores</h3>
          </div>
          <div className="space-y-3">
            {topPerformingStores.map((store, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{store.name}</p>
                    <p className="text-xs text-gray-500">Monthly Revenue</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-800">{store.revenue}</p>
                  <p className="text-xs text-green-600">{store.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
            <Package className="w-5 h-5 mr-2" />
            Add Inventory
          </button>
          <button className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
            <TrendingUp className="w-5 h-5 mr-2" />
            View Analytics
          </button>
          <button className="flex items-center justify-center p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Check Expiry
          </button>
          <button className="flex items-center justify-center p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
            <MapPin className="w-5 h-5 mr-2" />
            Store Locations
          </button>
        </div>
      </div>
    </div>
  );
};