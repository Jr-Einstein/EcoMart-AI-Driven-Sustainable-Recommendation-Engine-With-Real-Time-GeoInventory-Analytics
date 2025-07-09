'use client'

import React, { Component } from 'react';
import './Feedback.css';
import { useRouter } from 'next/navigation';

interface FeedbackState {
  name: string;
  email: string;
  feedback: string;
  rating: number;
  formSubmitted: boolean;
}

class Feedback extends Component<{}, FeedbackState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: '',
      rating: 5,
      formSubmitted: false,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as any);
  }

  handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ rating: parseInt(event.target.value) });
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { name, email, feedback } = this.state;

    if (!name || !email || !feedback) {
      alert("Please fill out all required fields.");
    } else {
      console.log('Feedback submitted:', this.state);
      this.setState({
        name: '',
        email: '',
        feedback: '',
        rating: 5,
        formSubmitted: true,
      });
    }
  }

  render() {
    if (this.state.formSubmitted) {
      window.location.href = "/feedbacksubmitted";
    }

    return (
      <div className='whole_feedback'>
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop" alt="Feedback Banner" className='feed_image' />
        <div className='feedback-container'>
          <h2>Feedback Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                name="feedback"
                value={this.state.feedback}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                name="rating"
                value={this.state.rating}
                onChange={this.handleRatingChange}
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className='divbut'>
              <button className="submitbut" type="submit">Submit Feedback</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;