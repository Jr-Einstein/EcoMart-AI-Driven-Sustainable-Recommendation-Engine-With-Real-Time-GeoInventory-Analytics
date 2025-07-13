import React, { useState } from 'react';
import { AlertTriangle, Clock, Package, Truck, MapPin, Calendar } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  currentLocation: string;
  quantity: number;
  expiryDate: string;
  daysToExpiry: number;
  demandPercentage: number;
  suggestedLocation: string;
  transportCost: number;
  priority: 'high' | 'medium' | 'low';
}

const expiringProducts: Product[] = [
  {
    id: 'P001',
    name: 'Organic Milk 1L',
    category: 'Dairy',
    currentLocation: 'Rajasthan - Jaipur Store',
    quantity: 150,
    expiryDate: '2025-01-20',
    daysToExpiry: 3,
    demandPercentage: 25,
    suggestedLocation: 'Haryana - Gurgaon Store',
    transportCost: 2500,
    priority: 'high'
  },
  {
    id: 'P002',
    name: 'Fresh Bread Loaves',
    category: 'Bakery',
    currentLocation: 'West Bengal - Kolkata Store',
    quantity: 80,
    expiryDate: '2025-01-19',
    daysToExpiry: 2,
    demandPercentage: 15,
    suggestedLocation: 'West Bengal - Howrah Store',
    transportCost: 800,
    priority: 'high'
  },
  {
    id: 'P003',
    name: 'Yogurt Cups 200g',
    category: 'Dairy',
    currentLocation: 'Madhya Pradesh - Bhopal Store',
    quantity: 200,
    expiryDate: '2025-01-22',
    daysToExpiry: 5,
    demandPercentage: 45,
    suggestedLocation: 'Madhya Pradesh - Indore Store',
    transportCost: 1200,
    priority: 'medium'
  },
  {
    id: 'P004',
    name: 'Fresh Vegetables Mix',
    category: 'Produce',
    currentLocation: 'Haryana - Faridabad Store',
    quantity: 120,
    expiryDate: '2025-01-21',
    daysToExpiry: 4,
    demandPercentage: 35,
    suggestedLocation: 'Haryana - Gurgaon Store',
    transportCost: 600,
    priority: 'medium'
  },
  {
    id: 'P005',
    name: 'Packaged Salads',
    category: 'Produce',
    currentLocation: 'Rajasthan - Udaipur Store',
    quantity: 60,
    expiryDate: '2025-01-23',
    daysToExpiry: 6,
    demandPercentage: 60,
    suggestedLocation: 'Rajasthan - Jaipur Store',
    transportCost: 900,
    priority: 'low'
  }
];

export const ExpiryManagement: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');

  const filteredProducts = filter === 'all' 
    ? expiringProducts 
    : expiringProducts.filter(p => p.priority === filter);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleTransfer = (productId: string) => {
    alert(`Transfer initiated for product ${productId}. Logistics team has been notified.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Expiry Management System</h2>
          </div>
          <div className="flex space-x-2">
            {['all', 'high', 'medium', 'low'].map((priority) => (
              <button
                key={priority}
                onClick={() => setFilter(priority as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === priority
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <p className="text-gray-600">Monitor products nearing expiry and optimize redistribution</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-red-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Expiring Soon</p>
              <p className="text-2xl font-bold text-gray-800">
                {expiringProducts.filter(p => p.daysToExpiry <= 3).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <Package className="w-8 h-8 text-yellow-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-800">{expiringProducts.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <Truck className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Transfer Cost</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹{expiringProducts.reduce((sum, p) => sum + p.transportCost, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <MapPin className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Locations</p>
              <p className="text-2xl font-bold text-gray-800">
                {new Set(expiringProducts.map(p => p.currentLocation.split(' - ')[0])).size}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Products Requiring Action</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Demand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Suggested Transfer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.category} • Qty: {product.quantity}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.currentLocation}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.expiryDate}</div>
                    <div className={`text-sm ${
                      product.daysToExpiry <= 3 ? 'text-red-600' : 
                      product.daysToExpiry <= 5 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {product.daysToExpiry} days left
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className={`h-2 rounded-full ${
                            product.demandPercentage >= 50 ? 'bg-green-500' :
                            product.demandPercentage >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${product.demandPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{product.demandPercentage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.suggestedLocation}</div>
                    <div className="text-sm text-gray-500">Cost: ₹{product.transportCost}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(product.priority)}`}>
                      {product.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleTransfer(product.id)}
                      className="text-green-600 hover:text-green-900"
                    >
                      Transfer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Product Transfer Details</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Current Status</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product:</span>
                      <span className="font-medium">{selectedProduct.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity:</span>
                      <span className="font-medium">{selectedProduct.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Demand:</span>
                      <span className="font-medium">{selectedProduct.demandPercentage}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Days to Expiry:</span>
                      <span className={`font-medium ${
                        selectedProduct.daysToExpiry <= 3 ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {selectedProduct.daysToExpiry} days
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Transfer Recommendation</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">From:</span>
                      <span className="font-medium">{selectedProduct.currentLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">To:</span>
                      <span className="font-medium">{selectedProduct.suggestedLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transport Cost:</span>
                      <span className="font-medium">₹{selectedProduct.transportCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Priority:</span>
                      <span className={`font-medium ${
                        selectedProduct.priority === 'high' ? 'text-red-600' :
                        selectedProduct.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {selectedProduct.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Transfer Benefits</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Reduce waste by moving to higher demand location</li>
                  <li>• Optimize inventory distribution across stores</li>
                  <li>• Maintain product freshness and quality</li>
                  <li>• Improve customer satisfaction</li>
                </ul>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    handleTransfer(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Approve Transfer
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
    
  );
};