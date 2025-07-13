import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity, Target, Users } from 'lucide-react';

export const DataAnalytics: React.FC = () => {
  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 45000, target: 50000 },
    { month: 'Feb', sales: 52000, target: 50000 },
    { month: 'Mar', sales: 48000, target: 50000 },
    { month: 'Apr', sales: 61000, target: 55000 },
    { month: 'May', sales: 55000, target: 55000 },
    { month: 'Jun', sales: 67000, target: 60000 }
  ];

  const categoryData = [
    { category: 'Groceries', percentage: 35, color: '#0071ce', value: 2450000 },
    { category: 'Electronics', percentage: 25, color: '#ffc220', value: 1750000 },
    { category: 'Clothing', percentage: 20, color: '#004c91', value: 1400000 },
    { category: 'Home & Garden', percentage: 15, color: '#e31837', value: 1050000 },
    { category: 'Others', percentage: 5, color: '#00a652', value: 350000 }
  ];

  const demandTrends = [
    { product: 'Rice', current: 85, predicted: 92, trend: 'up', volume: 15000 },
    { product: 'Milk', current: 78, predicted: 75, trend: 'down', volume: 8500 },
    { product: 'Bread', current: 92, predicted: 88, trend: 'down', volume: 12000 },
    { product: 'Vegetables', current: 67, predicted: 74, trend: 'up', volume: 9800 },
    { product: 'Fruits', current: 73, predicted: 79, trend: 'up', volume: 7200 }
  ];

  const inventoryDistribution = [
    { range: '0-1K', count: 45, percentage: 15, color: '#0071ce' },
    { range: '1K-5K', count: 120, percentage: 40, color: '#004c91' },
    { range: '5K-10K', count: 90, percentage: 30, color: '#ffc220' },
    { range: '10K-20K', count: 30, percentage: 10, color: '#ff6900' },
    { range: '20K+', count: 15, percentage: 5, color: '#e31837' }
  ];

  const customerSegments = [
    { segment: 'Regular Customers', percentage: 45, color: '#0071ce' },
    { segment: 'Premium Members', percentage: 30, color: '#004c91' },
    { segment: 'Occasional Shoppers', percentage: 20, color: '#ffc220' },
    { segment: 'New Customers', percentage: 5, color: '#00a652' }
  ];

  const statePerformance = [
    { state: 'West Bengal', revenue: 2800000, stores: 41, growth: 18 },
    { state: 'Haryana', revenue: 2400000, stores: 32, growth: 15 },
    { state: 'Rajasthan', revenue: 2100000, stores: 45, growth: 12 },
    { state: 'Madhya Pradesh', revenue: 1900000, stores: 38, growth: 10 }
  ];

  const productCategories = [
    { category: 'Food & Beverages', sales: 3200000, percentage: 44, color: '#0071ce' },
    { category: 'Electronics', sales: 1800000, percentage: 25, color: '#ffc220' },
    { category: 'Clothing', sales: 1200000, percentage: 17, color: '#004c91' },
    { category: 'Home & Garden', sales: 800000, percentage: 11, color: '#e31837' },
    { category: 'Health & Beauty', sales: 200000, percentage: 3, color: '#00a652' }
  ];

  const maxSales = Math.max(...salesData.map(d => Math.max(d.sales, d.target)));
  const maxRevenue = Math.max(...statePerformance.map(s => s.revenue));

  // Calculate pie chart positions
  const calculatePieSlices = (data: any[]) => {
    let cumulativePercentage = 0;
    return data.map(item => {
      const startAngle = (cumulativePercentage * 360) / 100;
      const endAngle = ((cumulativePercentage + item.percentage) * 360) / 100;
      cumulativePercentage += item.percentage;
      
      const startAngleRad = (startAngle * Math.PI) / 180;
      const endAngleRad = (endAngle * Math.PI) / 180;
      
      const largeArcFlag = item.percentage > 50 ? 1 : 0;
      
      const x1 = 50 + 40 * Math.cos(startAngleRad);
      const y1 = 50 + 40 * Math.sin(startAngleRad);
      const x2 = 50 + 40 * Math.cos(endAngleRad);
      const y2 = 50 + 40 * Math.sin(endAngleRad);
      
      const pathData = [
        `M 50 50`,
        `L ${x1} ${y1}`,
        `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');
      
      return { ...item, pathData };
    });
  };

  const categorySlices = calculatePieSlices(categoryData);
  const customerSlices = calculatePieSlices(customerSegments);
  const productSlices = calculatePieSlices(productCategories);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <BarChart3 className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Advanced Data Analytics Dashboard</h2>
        </div>
        <p className="text-gray-600">Comprehensive analysis with interactive charts and visualizations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold">₹7.25M</p>
              <p className="text-blue-200 text-sm">+12.5% vs last month</p>
            </div>
            <Target className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Avg. Demand</p>
              <p className="text-2xl font-bold">79.2%</p>
              <p className="text-green-200 text-sm">+3.2% improvement</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Active Products</p>
              <p className="text-2xl font-bold">12,847</p>
              <p className="text-yellow-200 text-sm">+245 new items</p>
            </div>
            <Activity className="w-8 h-8 text-yellow-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Customer Base</p>
              <p className="text-2xl font-bold">89.2K</p>
              <p className="text-purple-200 text-sm">+5.4% growth</p>
            </div>
            <Users className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Performance Bar Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Monthly Sales Performance</h3>
          </div>
          <div className="space-y-4">
            {salesData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">{data.month}</span>
                  <div className="flex space-x-4">
                    <span className="text-blue-600 font-semibold">₹{(data.sales/1000).toFixed(0)}K</span>
                    <span className="text-gray-500">Target: ₹{(data.target/1000).toFixed(0)}K</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full relative flex items-center"
                      style={{ width: `${(data.sales / maxSales) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium ml-2">
                        {((data.sales / data.target) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div
                      className="absolute top-0 w-1 h-6 bg-red-500"
                      style={{ left: `${(data.target / maxSales) * 100}%` }}
                      title={`Target: ₹${data.target.toLocaleString()}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center text-xs text-gray-500 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded mr-2"></div>
              <span>Actual Sales</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
              <span>Target Line</span>
            </div>
          </div>
        </div>

        {/* Category Distribution Pie Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <PieChart className="w-5 h-5 text-purple-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Revenue by Category</h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 100 100" className="transform -rotate-90">
                {categorySlices.map((slice, index) => (
                  <path
                    key={index}
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="0.5"
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">₹7.25M</div>
                  <div className="text-xs text-gray-500">Total Revenue</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded mr-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{category.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{category.percentage}%</div>
                  <div className="text-xs text-gray-500">₹{(category.value/1000000).toFixed(1)}M</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State Performance Bar Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">State-wise Revenue Performance</h3>
          </div>
          <div className="space-y-4">
            {statePerformance.map((state, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">{state.state}</span>
                  <div className="flex space-x-4">
                    <span className="text-green-600 font-semibold">₹{(state.revenue/1000000).toFixed(1)}M</span>
                    <span className="text-gray-500">{state.stores} stores</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-6 rounded-full relative flex items-center"
                      style={{ width: `${(state.revenue / maxRevenue) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium ml-2">
                        +{state.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories Donut Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <PieChart className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Product Category Sales</h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 100 100" className="transform -rotate-90">
                {/* Outer ring */}
                {productSlices.map((slice, index) => (
                  <path
                    key={index}
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="0.5"
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
                {/* Inner circle for donut effect */}
                <circle cx="50" cy="50" r="25" fill="white" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">₹7.2M</div>
                  <div className="text-xs text-gray-500">Total Sales</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {productCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded mr-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{category.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{category.percentage}%</div>
                  <div className="text-xs text-gray-500">₹{(category.sales/1000000).toFixed(1)}M</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory Distribution Histogram */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <BarChart3 className="w-5 h-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Inventory Distribution Histogram</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {inventoryDistribution.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <div className="w-full bg-gray-200 rounded-t-lg" style={{ height: '200px' }}>
                  <div
                    className="rounded-t-lg flex items-end justify-center text-white font-bold text-lg"
                    style={{ 
                      height: `${(item.percentage / 40) * 100}%`,
                      backgroundColor: item.color,
                      minHeight: '40px'
                    }}
                  >
                    {item.count}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-2 rounded-b-lg">
                  <div className="text-sm font-medium text-gray-700">{item.range}</div>
                  <div className="text-xs text-gray-500">{item.percentage}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-blue-800">
            <strong>Analysis:</strong> Most stores (40%) maintain inventory between 1K-5K items, 
            indicating optimal stock levels across the network.
          </div>
        </div>
      </div>

      {/* Customer Segmentation and Demand Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Segments Pie Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Users className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Customer Segmentation</h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 100 100" className="transform -rotate-90">
                {customerSlices.map((slice, index) => (
                  <path
                    key={index}
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="0.5"
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">89.2K</div>
                  <div className="text-xs text-gray-500">Total Customers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {customerSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded mr-3"
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{segment.segment}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{segment.percentage}%</div>
                  <div className="text-xs text-gray-500">
                    {((89200 * segment.percentage) / 100 / 1000).toFixed(1)}K users
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demand Prediction Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Activity className="w-5 h-5 text-orange-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Demand Prediction Trends</h3>
          </div>
          <div className="space-y-4">
            {demandTrends.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-800">{item.product}</span>
                  <div className={`flex items-center ${
                    item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      item.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    <span className="text-sm font-medium">
                      {item.trend === 'up' ? '+' : ''}{item.predicted - item.current}%
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Current Demand</span>
                      <span>{item.current}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.current}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Predicted Demand</span>
                      <span>{item.predicted}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.predicted}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Volume: {item.volume.toLocaleString()} units
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Top Performing Categories</h4>
          <div className="space-y-3">
            {[
              { name: 'Groceries', growth: '+18%', revenue: '₹2.45M' },
              { name: 'Electronics', growth: '+15%', revenue: '₹1.75M' },
              { name: 'Clothing', growth: '+12%', revenue: '₹1.40M' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.revenue}</div>
                </div>
                <div className="text-green-600 font-semibold">{item.growth}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Regional Performance</h4>
          <div className="space-y-3">
            {[
              { region: 'West Bengal', score: 92, stores: 41 },
              { region: 'Haryana', score: 88, stores: 32 },
              { region: 'Rajasthan', score: 85, stores: 45 },
              { region: 'Madhya Pradesh', score: 82, stores: 38 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">{item.region}</span>
                  <span className="font-medium">{item.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">{item.stores} stores</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Key Insights</h4>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-sm font-medium text-green-800">Revenue Growth</div>
              <div className="text-xs text-green-600">12.5% increase this month</div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-sm font-medium text-blue-800">Demand Optimization</div>
              <div className="text-xs text-blue-600">3.2% improvement in prediction accuracy</div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-sm font-medium text-yellow-800">Inventory Efficiency</div>
              <div className="text-xs text-yellow-600">15% reduction in waste</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};