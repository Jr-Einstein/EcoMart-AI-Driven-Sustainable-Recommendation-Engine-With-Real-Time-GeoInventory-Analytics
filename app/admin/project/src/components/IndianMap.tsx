// IndianMap.tsx - Final update: Walmart states mapped, Reset button now fully resets with 1s zoom-out

'use client';
import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Annotation,
} from 'react-simple-maps';
import { MapPin, Package, TrendingUp, AlertTriangle, LocateFixed } from 'lucide-react';

const geoUrl =
  'https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@bcbcba3/topojson/india.json';

interface StateData {
  id: string;
  name: string;
  stores: number;
  inventory: number;
  demandPercentage: number;
  expiringProducts: number;
  coordinates: [number, number];
  color: string;
  address: string;
}

const stateData: StateData[] = [
  { id: 'rajasthan', name: 'Rajasthan', stores: 1, inventory: 25000, demandPercentage: 70, expiringProducts: 300, coordinates: [76.13, 25.18], color: '#93c5fd', address: 'Kota: Indraprastha Industrial Area' },
  { id: 'haryana', name: 'Haryana', stores: 1, inventory: 20000, demandPercentage: 82, expiringProducts: 210, coordinates: [76.0, 29.1], color: '#fcd34d', address: 'Gurgaon: Orchid Center, Golf Course Road' },
  { id: 'madhyapradesh', name: 'Madhya Pradesh', stores: 4, inventory: 62000, demandPercentage: 88, expiringProducts: 510, coordinates: [78.6, 23.8], color: '#a5f3fc', address: 'Indore, Bhopal: 4 locations' },
  { id: 'westbengal', name: 'West Bengal', stores: 1, inventory: 27000, demandPercentage: 75, expiringProducts: 300, coordinates: [88.36, 22.57], color: '#fda4af', address: 'Kolkata vicinity: logistics hub' },
  { id: 'maharashtra', name: 'Maharashtra', stores: 2, inventory: 45000, demandPercentage: 77, expiringProducts: 400, coordinates: [75.7, 19.1], color: '#bbf7d0', address: 'Aurangabad, Amravati locations' },
  { id: 'andhrapradesh', name: 'Andhra Pradesh', stores: 4, inventory: 52000, demandPercentage: 85, expiringProducts: 450, coordinates: [80.6, 16.5], color: '#fbcfe8', address: 'Guntur, Vizag, Vijayawada, Rajahmundry' },
  { id: 'punjab', name: 'Punjab', stores: 5, inventory: 58000, demandPercentage: 82, expiringProducts: 380, coordinates: [75.8, 31.3], color: '#fde68a', address: 'Ludhiana, Amritsar, Bathinda, Jalandhar, Zirakpur' },
  { id: 'uttarpradesh', name: 'Uttar Pradesh', stores: 4, inventory: 59000, demandPercentage: 79, expiringProducts: 420, coordinates: [80.9, 26.8], color: '#e9d5ff', address: 'Agra, Lucknow, Meerut locations' },
  { id: 'telangana', name: 'Telangana', stores: 3, inventory: 47000, demandPercentage: 84, expiringProducts: 360, coordinates: [78.5, 17.4], color: '#fed7aa', address: 'Hyderabad, Karimnagar, Nizamabad' }
];

export const IndianMap: React.FC = () => {
  const initialPosition = { coordinates: [82, 22], zoom: 1.0 };
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [mapPosition, setMapPosition] = useState(initialPosition);
  const [liveTime, setLiveTime] = useState('');
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
    setMapPosition({ coordinates: state.coordinates, zoom: 4.2 });
  };

  const resetView = () => {
    setSelectedState(null);
    setIsResetting(true);
    const steps = 10;
    const zoomStep = (mapPosition.zoom - initialPosition.zoom) / steps;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setMapPosition((prev) => ({
        coordinates: [
          prev.coordinates[0] + (initialPosition.coordinates[0] - prev.coordinates[0]) / (steps - currentStep + 1),
          prev.coordinates[1] + (initialPosition.coordinates[1] - prev.coordinates[1]) / (steps - currentStep + 1)
        ],
        zoom: prev.zoom - zoomStep
      }));
      if (currentStep >= steps) {
        clearInterval(interval);
        setIsResetting(false);
        setMapPosition(initialPosition);
      }
    }, 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">India Store Distribution Map</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">● Live</span>
          <span className="text-sm text-gray-600">🕒 {liveTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative border border-gray-200 rounded-lg overflow-hidden bg-blue-50 h-96">
          <div className="absolute inset-0">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 900 }}
              width={800}
              height={450}
              className="w-full h-full"
            >
              <ZoomableGroup
                center={mapPosition.coordinates}
                zoom={mapPosition.zoom}
                disablePanning={false}
                translateExtent={[[60, 5], [100, 38]]}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const match = stateData.find(
                        (s) => s.name.toLowerCase() === geo.properties.st_nm.toLowerCase()
                      );
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onClick={() => match && handleStateClick(match)}
                          style={{
                            default: {
                              fill: match ? match.color : '#d1d5db',
                              stroke: '#1e3a8a',
                              strokeWidth: 0.5,
                            },
                            hover: {
                              fill: match ? '#2563eb' : '#e5e7eb',
                              cursor: match ? 'pointer' : 'default',
                            },
                            pressed: {
                              fill: '#1d4ed8',
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {selectedState && (
                  <Annotation
                    subject={selectedState.coordinates}
                    dx={0}
                    dy={-20}
                    connectorProps={{ stroke: '#3b82f6', strokeWidth: 2 }}
                  >
                    <foreignObject width={130} height={48} x={-15} y={-50}>
                      <div className="bg-white border border-blue-200 rounded p-1 text-[8px] leading-tight shadow">
                        <strong>{selectedState.name}</strong><br />
                        {selectedState.address}<br />
                        Stores: {selectedState.stores}, Inv: {selectedState.inventory}<br />
                        Exp: {selectedState.expiringProducts}
                      </div>
                    </foreignObject>
                  </Annotation>
                )}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          <button
            onClick={resetView}
            className="absolute bottom-3 left-3 flex items-center gap-2 bg-white border border-gray-300 px-3 py-1 rounded shadow hover:bg-gray-100"
          >
            <LocateFixed className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-700">Reset View</span>
          </button>
        </div>

        {/* Right Info Panel */}
        <div className="space-y-4">
          {selectedState ? (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{selectedState.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">Stores</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{selectedState.stores}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">Demand</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{selectedState.demandPercentage}%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm text-gray-600">Inventory</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{selectedState.inventory.toLocaleString()}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm text-gray-600">Expiring</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{selectedState.expiringProducts}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Click on a state to view detailed information</p>
              <p className="text-sm text-gray-500">Interactive map showing Walmart store distribution across India</p>
            </div>
          )}

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Network Overview</h4>
            <div className="space-y-2">
              {stateData.map((state) => (
                <div key={state.id} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{state.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-800">{state.stores} stores</span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        state.demandPercentage > 80
                          ? 'bg-green-500'
                          : state.demandPercentage > 70
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Stores:</span>
                <span className="font-semibold text-gray-800">
                  {stateData.reduce((sum, state) => sum + state.stores, 0)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Inventory:</span>
                <span className="font-semibold text-gray-800">
                  {(stateData.reduce((sum, state) => sum + state.inventory, 0) / 1000).toFixed(0)}K items
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
