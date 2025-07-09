'use client'

import React, { useState } from "react";
import "./SellerSection.css";
import { useRouter } from "next/navigation";

function SellerSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    productName: "",
    manufacturingProcess: "",
    transportationMethod: "",
    materialsUsed: "",
    productLifespan: "",
    recyclability: "",
    ecoCertifications: "",
    packagingUsed: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid(formData)) {
      router.push("/submitted");
    } else {
      alert("Please fill in all the mandatory fields.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = (formData: any) => {
    for (const key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="seller-section">
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop"
        alt="Seller Banner"
        className="seller-image"
      />
      <div className="seller-info">
        <h2>Sell Eco-Friendly Products on EcoMart</h2>
        <p>
          Help us create a sustainable shopping experience by providing details
          about your eco-friendly products.
        </p>
      </div>

      <div className="seller-form">
        <h3>Manufacturing Information</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            <div className="form_question">Product ID:</div>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Manufacturing Process:</div>
            <input
              type="text"
              name="manufacturingProcess"
              value={formData.manufacturingProcess}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Transportation Method:</div>
            <input
              type="text"
              name="transportationMethod"
              value={formData.transportationMethod}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Materials Used:</div>
            <input
              type="text"
              name="materialsUsed"
              value={formData.materialsUsed}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Product Lifespan:</div>
            <input
              type="text"
              name="productLifespan"
              value={formData.productLifespan}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Recyclability (YES/NO):</div>
            <input
              type="text"
              name="recyclability"
              value={formData.recyclability}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Eco Certifications (if any):</div>
            <input
              type="text"
              name="ecoCertifications"
              value={formData.ecoCertifications}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Packaging Used:</div>
            <input
              type="text"
              name="packagingUsed"
              value={formData.packagingUsed}
              onChange={handleInputChange}
              required
            />
          </label>

          <button className="buttonxyz" type="submit">
            Submit
          </button>
        </form>
      </div>
      
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=300&fit=crop"
        alt="EcoMart Seller"
        className="seller-image2"
      />
    </div>
  );
}

export default SellerSection;