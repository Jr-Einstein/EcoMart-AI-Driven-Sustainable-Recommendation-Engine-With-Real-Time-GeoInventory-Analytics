'use client'

import React, { useState } from "react";
import "./Educationsection.css";
import Link from "next/link";

function Educationsection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Why did we create EcoMart?",
      answer:
        "The EcoMart was created to make it easier for customers to find and buy eco-friendly products. This promotes conscious shopping, reduces environmental impact, enhances the customer experience",
    },
    {
      question: "What criteria are used to certify products as eco-friendly?",
      answer:
        "Products are certified as eco-friendly based on criteria like eco-friendly certificates, carbon emissions, material sourcing, recyclability, plastic usage, energy efficiency, water conservation, non-toxicity, and packaging. These certifications are awarded by reputable eco-friendly organizations and verified by Walmart.",
    },
    {
      question:
        "Can I provide feedback or report any concerns about a product's eco-friendly claims?",
      answer:
        "Yes, you can provide feedback and report any concerns about a product's eco-friendly claims. We have a customer feedback system in place to ensure that your opinions and concerns are heard, allowing us to continuously improve the accuracy and reliability of eco-friendly claims within EcoMart.",
    },
    {
      question:
      "How does the box returning system work?",
      answer:
      "After sufficient number of customers click on the RETURN BOX option and the number of boxes from a specific area cross a pre-decided threshold, a pickup will be scheduled and the customers will be notified about the date and time. They can also check the website to get an idea of how much longer it will take to reach the threshold, thus making the procedure much more transparent.",
    },
  ];

  const handleItemClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  };

  return (
    <>
      <div className="bar">
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=150&h=80&fit=crop" alt="EcoMart Logo" />
        <ul>
          <li>
            <a href="/green">Home</a>
          </li>
          <li>
            <a href="#EcoCertification">Certificates</a>
          </li>
          <li>
            <a href="#FAQ">FAQS</a>
          </li>
        </ul>
      </div>

      <div className="midse">
        <h1>Zero Waste Production through Return Box System</h1>
        <br />
        <p>
          Our solution leverages Walmart's existing infrastructure for recycling
          boxes from returned products. When enough customers choose the "return
          box" option and a specific region exceeds a set box threshold,
          scheduled pickups are arranged. Customers receive notifications via
          the app, website, or SMS/email. Pickup frequency varies by
          participation. Additionally, post-product delivery, customers can
          return packaging boxes, promoting sustainability in e-commerce.
        </p>

        <div className="video-placeholder">
          <div className="video-content">
            <h3>Sustainable Delivery Process</h3>
            <p>Learn how our eco-friendly delivery system works</p>
          </div>
        </div>
      </div>

      <div className="leftse">
        <div className="video-placeholder">
          <div className="video-content">
            <h3>Box Folding Tutorial</h3>
            <p>Step-by-step guide to proper box folding</p>
          </div>
        </div>

        <h1>How to Fold a Box?</h1>
        <p>
          Folding a box for convenient storage and future use is a practical
          skill. Start by laying the box flat on a clean, flat surface. Look for
          the creased lines on the cardboard, usually marked for easy folding.
          Gently fold along these lines to bring the sides of the box up,
          forming the walls. Then, fold in the bottom flaps to create the base.
          Ensure all edges are aligned neatly for a secure fit. To flatten the
          box, simply reverse these steps, gently folding it back into a flat
          shape. This way, you can keep your box handy for the next time
          you need it, ensuring easy and efficient storage.
        </p>
      </div>
      
      <div className="complete">
        <div className="Certificate" id="EcoCertification">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop"
            alt="Eco-Friendly Certifications"
            width="100%"
          />
        </div>

        <div className="smallcer">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop" alt="Certification 1" width="100%" />
        </div>
        
        <div className="largecer">
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=500&fit=crop" alt="Certification 2" width="100%" />
        </div>

        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=300&fit=crop"
          alt="Shop Eco Products"
          width="100%"
          className="shopprod"
        />

        <div className="FaqEdu" id="FAQ">
          <h1>Frequently Asked Questions</h1>
          {faqItems.map((item, index) => (
            <div key={index} className="FaqItem">
              <div
                className="FaqQuestion"
                onClick={() => handleItemClick(index)}
              >
                <div>{item.question}</div>
                <span className="AccordionIcon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="FaqAnswer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="ecofriendimg">
          <Link href="/green" onClick={handleLinkClick}>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=300&fit=crop" alt="Shop EcoMart" width="100%" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Educationsection;