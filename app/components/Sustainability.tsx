'use client'

import React from "react";
import "./Sustainability.css";

function SustainabilityReportsSection() {
  return (
    <div className="Susback">
      <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=400&fit=crop" alt="Sustainability Banner" width="100%" />

      <div className="links">
        <span className="reports-heading">Sustainability Reports: </span> 
        <a href="https://corporate.walmart.com/esgreport/reporting-data/esg-data-downloads" target="_blank" rel="noopener noreferrer">
          2023 /
        </a>
        <a href="https://corporate.walmart.com/esgreport/reporting-data/esg-data-downloads" target="_blank" rel="noopener noreferrer">
          2022 /
        </a>
        <a href="https://corporate.walmart.com/esgreport/reporting-data/esg-data-downloads" target="_blank" rel="noopener noreferrer">
          2021 /
        </a>
        <a href="https://corporate.walmart.com/esgreport/reporting-data/esg-data-downloads" target="_blank" rel="noopener noreferrer">
          2020 /
        </a>
        <a href="https://corporate.walmart.com/esgreport/reporting-data/esg-data-downloads" target="_blank" rel="noopener noreferrer">
          2019
        </a>
      </div>
      
      <div className="parameters">
        <div className="one">
          <div className="stat-content">
            <h1 style={{color: "#0071ce"}}>234,000+</h1>
            <p><b>ZERO PLASTIC PRODUCTS SOLD</b></p>
          </div>
        </div>
        <div className="two">
          <div className="stat-content">
            <h1 style={{color: "#0071ce"}}>10,000 Kgs</h1>
            <p><b>PLASTIC POLLUTION PREVENTED</b></p>
          </div>
        </div>
        <div className="three">
          <div className="stat-content">
            <h1 style={{color: "#0071ce"}}>17,936 tons</h1>
            <p><b>CARBON EMISSIONS PREVENTED</b></p>
          </div>
        </div>
      </div>

      <div className="overview-section">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&h=600&fit=crop"
          alt="Sustainability Overview"
          className="Overview"
        />
      </div>
      
      <div className="results-section">
        <img 
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1000&h=600&fit=crop" 
          alt="Sustainability Results" 
          className="Results" 
        />
      </div>
    </div>
  );
}

export default SustainabilityReportsSection;