import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Find Your Perfect Franchise Opportunity</h1>
            <p>
              FranchiseFlow connects entrepreneurs with leading franchise brands.
              Discover the right business opportunity that matches your goals and budget.
            </p>
            <div className="hero-buttons">
              <Link to="/franchises" className="btn btn-primary">Explore Franchises</Link>
              <Link to="/register" className="btn btn-outline">Register as Franchisee</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Franchise Business Meeting" />
          </div>
        </div>
      </section>
      
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-icon">1</div>
              <h3>Create Account</h3>
              <p>Register as a franchisee and complete your profile with your business preferences and investment range.</p>
            </div>
            <div className="step">
              <div className="step-icon">2</div>
              <h3>Discover Franchises</h3>
              <p>Browse through our catalogue of vetted franchise opportunities filtered by your interests and budget.</p>
            </div>
            <div className="step">
              <div className="step-icon">3</div>
              <h3>Apply & Connect</h3>
              <p>Submit applications to franchises you're interested in and connect directly with franchisors.</p>
            </div>
            <div className="step">
              <div className="step-icon">4</div>
              <h3>Track Progress</h3>
              <p>Monitor your application status and receive updates as franchisors review your profile.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section featured-franchises">
        <div className="container">
          <h2 className="section-title">Featured Franchise Opportunities</h2>
          <div className="franchise-grid">
            {/* These would come from an API in a real app */}
            {[1, 2, 3].map(item => (
              <div key={item} className="franchise-card">
                <div className="franchise-logo">
                  <img src={`https://via.placeholder.com/150x80?text=Franchise${item}`} alt={`Franchise ${item}`} />
                </div>
                <h3>Sample Franchise {item}</h3>
                <div className="franchise-info">
                  <span className="info-item">
                    <i className="fas fa-map-marker-alt"></i> Multiple Locations
                  </span>
                  <span className="info-item">
                    <i className="fas fa-tag"></i> Food & Beverage
                  </span>
                </div>
                <div className="franchise-investment">
                  <p>Investment Range:</p>
                  <p className="investment-range">$150,000 - $350,000</p>
                </div>
                <Link to={`/franchises/${item}`} className="btn btn-outline btn-block">View Details</Link>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/franchises" className="btn btn-primary">View All Franchises</Link>
          </div>
        </div>
      </section>
      
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"FranchiseFlow made it easy to find and connect with the perfect franchise opportunity for my background and investment level."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="John Doe" />
                <div>
                  <h4>John Doe</h4>
                  <p>Franchisee, Quick Service Restaurant</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"As a franchisor, I've been able to find qualified, serious candidates through FranchiseFlow, streamlining our expansion process."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60" alt="Jane Smith" />
                <div>
                  <h4>Jane Smith</h4>
                  <p>Franchisor, Retail Brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Franchise Opportunity?</h2>
            <p>Join thousands of entrepreneurs who have found their ideal franchise match through FranchiseFlow.</p>
            <Link to="/register" className="btn btn-primary btn-large">Get Started Now</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
