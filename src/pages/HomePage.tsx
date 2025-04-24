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
            <div className="franchise-card">
              <div className="franchise-logo">
                <img src="data:image/png;base64,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" alt="Subway Logo" className="franchise-logo-img" />
              </div>
              <h3>Subway</h3>
              <div className="franchise-info">
                <span className="info-item">
                  <i className="fas fa-map-marker-alt"></i> Global Locations
                </span>
                <span className="info-item">
                  <i className="fas fa-tag"></i> Food & Beverage
                </span>
              </div>
              <div className="franchise-investment">
                <p>Investment Range:</p>
                <p className="investment-range">$140,000 - $342,000</p>
              </div>
              <Link to="/franchises/subway" className="btn btn-outline btn-block">View Details</Link>
            </div>
            
            <div className="franchise-card">
              <div className="franchise-logo">
                <img src="data:image/png;base64,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" alt="7-Eleven Logo" className="franchise-logo-img" />
              </div>
              <h3>7-Eleven</h3>
              <div className="franchise-info">
                <span className="info-item">
                  <i className="fas fa-map-marker-alt"></i> Multiple Locations
                </span>
                <span className="info-item">
                  <i className="fas fa-tag"></i> Convenience Store
                </span>
              </div>
              <div className="franchise-investment">
                <p>Investment Range:</p>
                <p className="investment-range">$450,000 - $1,200,000</p>
              </div>
              <Link to="/franchises/7-eleven" className="btn btn-outline btn-block">View Details</Link>
            </div>
            
            <div className="franchise-card">
              <div className="franchise-logo">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEBUSBxIVFhUVGRUYFhUXFxUWHhkaGhgWGBgWFRUYHSggGB0lGxUWITIhJSktMS4uFyA1ODMuOCgyLy0BCgoKDg0OGxAQGy0mHyUrLS01LzIvLS0vLzAtLS0tLSstLS0tLS03Ny0tLS0tLSsrLS0tLS0tLS0tKy0tLS8tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xAA/EAACAQEFBQMLAQcDBQAAAAAAAQIDBAUGETESIUFRYSJxgQcTMkJSYnKRobHBIxVTgsLR4fA0kqIUJCVDc//EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAnEQEAAgICAwABAgcAAAAAAAAAAQIDERIhBDFBE3HwIlFhkbHR4f/aAAwDAQACEQMRAD8A04APomkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPum5698T2bvg5ZavSMfik9O7U3tq8ntsoQ2oeam16sZvPw2opP5kdstKzqZczese5RMHKrTlRk41k4yW5prJp8muBxO3QAD0ACb4NwS7wyr3umqesae9OfWXKP1f3jyZa443Zza0VjcopYLpr3im7DRnNLVxW7uz0z6GTd1ipTjV/aEnCcNyi2otc809Wt+7p1LvoUI2eKjQioxSyUYpJJckloRvF2EYX5Fzs+UKy0lwl7s8vvwKVfN5TqeoQxn3OpU+DutllnYpunaouMovJp/5odJoRO42sAAPQAAAAAAAAAAAAAAAAAAA77FZZW2pClQ9KclFeLyOgk3k5oqteENr1Y1JLvy2f5iPJbjSbfyeWnUTK07muqnc9GNKyrclvfGT4yfVszsj6DCmZmdyzpnaFeUXDqttJ2myx/UprOWXrQWufWK3927kVYeh5xU1lLRlD3/YP2ZaqtFaQk9n4Xvj9GjR8LLuJpPxawX30wACX4Ewt+1pefty/Ri9yf/skuHwrjz05lzJkildyntaKxuWZgTCH/VbNpvSPY1pwfre/JezyXHu1sxbjHtVqp3fTc7VKMIR4tpJcl/Yr/EHlElPOFxrZX72S3/wwenj8jKmMnkW2pzyyTtY7mlubORQUbzrKsq3nZupF5qbbbz8eHQtrCWKad/Q2Z5RrRXahz96HNfbPxbN4tscb9l8U1jbnivDNO/4cI1YrsVP5Zc4/Yp632Od31JUrXFxnF5NfZp8U+Z6A1I7jDDMb+p508lWinsS5+5Lo/odeN5P45429f4dYsvHqfSmgc69GVnk4V4uMotqUXqmtUzga0TtbAAegAAAAAAAAAAAAAAAAb/AlqVkt9Fz0k5Qf8SaX1yNAcqc3TalTeTTTT5Nb0zi9eVZh5MbjT0MDUYavuF+UI1KbW0klUj7MuPhxXQ22Zg2iazqWfMTHt9Kf8pCSvCWz7FPPvy/pkWDiXFFG44vbalVa7NNPe+Tl7K6/IqZutiC0Ny7VSo828nku/LPKKS+SLvh0mJm8+k+GsxPKWXhO4JX/AFtl5qnHJ1JdOEV1e/68t9hX7iqz4bgqNjSlOKSjTjuUMtNt8O7X7kOvO/Z3PRVkuanUpQ9atOEoTqN6ySfop/PLLQiepY/FOa3K3r5H+0k05zufTYXzfNe+Z7dvnn7MVujH4Y/nU14BarWKxqE0REeg7LPXlZpqdnk4yi81JbmmdYPRauEsbwvFKlemUKuilpGfd7MunHhyJkeeO8k9wY2tF0pQrfq01pGTaaXKM9+7o8/Azs3hfcf9lbJg+1SDynXCpRVrs67SyjV6rSMu9Pd3NciuCd4ix5TvSzTo2ajNSqLKTk45JavLJtt/IghZ8WLxTV0uKLRXVgAFlIAAAAAAAAAAACwPJndlmt1KrK104TqRkllJKWUWt2Semb2t/Q3174EslvWdmj5mfBw08YPd8smVL+XSt+MopzRFtSqEG5xBhm0XE/8AuY7VPhUjvj0z9l95pizW0WjcJImJ9AAOnrvsVtqWCW3YqkoS5xbXg+a6M2dfFdurx2alpnl7uUX84pM0pKsKYNqXxlUtudOj8pT+FcF1+RDl/HWOV4cW4x3LU3Jcta/ZvzW6K31KsvRjxbk+L6FiYFviySg7NYezKDeTlknVX7zdq3y1SyNPju9ad10lYLoSisv1NnhF6Qb4uWrz4d5AIycGnBtNaNPJrqnwIOE567nqPn/XGpyV76egq9GNoi414qUXqpJNPvTIRiTyfQrpzuXKEv3bfZfwv1H9O41+GvKBKhlTvzOUdFVSza+OK9LvW/vLFslqhbIKdlnGcZaSi80UpjLgn96QTzxyoO1Wadjm4WqLjKOsWsmjqLsxPhulf8MqnZqRXYqLVdH7UehT16XbUuqq6VtjlJfJrhKL4o0cHkRljX1Zx5Iv+rEABZSAAAAAAAAAAAAAAAAAAA2uG77ncVdVaW+L3Tj7Uf6rVF1XfbYXhTjVsklKElmn+Hya4ooA3uFcS1Lgqbs5UpPtw/mjyl9/tT8rx/yfxV9ocuPl3HtdFWlGsnGqk09zT3prk0V1izAfm86txJtb3Kjrl/8APn8Py5E+u2307ypxqWKSlGXFfZrg+hlGbjyXxW6Vq2mkvO7WWp2WehO1TULNFylLSMVm34FtYiwRRvqoqsZOlL19mKe31yz3S6m2uW4KFyRysMMm9ZvfKXfL8LcaE+dXjuI7WJzxpF8K4DjZsqt95SnqqesY/E/WfTTvN/iu/Y3BQclk5y7NOPN82uS1fy4mxvO307spSq2uWUYrf+ElxbfApW/74nfleVW0blpCPsxWi7+b5lfFS3kX5X9QjpE5LblgV60rRJzrtylJtyb4t6s4AGqthsbmvuvcs9qwTy9qD3xl8Ufyt5rgeWrFo1JMbXHhnGFG+8oT/Tq+w36XwS492pl4nw/Tv6ls1N045unPL0X15xfFFJJ5b1/ncT3CWOnTyo3481pGtxXSpzXvfPmZ2bxbUnnjVr4pr3VCLfY53fUlStcdmcXk1+VzT1zOgtrHOHVfVHztjydams1l68ddn8r+5UpcwZoyV39TY78oAATuwAAAAAAAAAAAAAAAAAAbXD9/VrhqbdkecX6dNvdL+j6lu4fv6jflPasj3r0oP0ovquXUo0yLDbal31FUsc3Ca0a+zWjXRlXP40ZO49osmKLfq9AZnTa7VCxwc7TJRjFZuT0S6kHu7ykU/Nf+Spy84vYSal1Wb7PcRHEuJ61/yyq9imnnGmnu75P1mUaeJebanqEFcNpnt2YvxLK/6n6ecaMG9iL4+/Jc/sR8A1aUikcYW4iIjUAAO3oAAAAAm2AcUuxyjZrfL9OTypyfqN6R+F/R95h+US5ldlp85QWUK2csuUvXXjnn4sipL8S3r+1LssjrPOopzjJvV7EXFy8c4vvZUtj4ZYtX71KKa8b7j6iAALaUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABypU5VpKNFOUpPJJb23ySWpY+FcBqjlVvxKUtVS1S+P2n007yLLmrjjcub3isdo/hPB1S+mqlrzhR56OfSGfD3vkY2NbZTrWjzVgSVKzrzUEtM16b69rd/CWHja/VcVnyoPKrUzjTS4bt88uSX1aKcIME2yz+S3r4jxzNp5SAAuJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMu67tq3rVVKwx2pP5JcZSfBHXYrJO3VI0rMs5TaSX5fRa+BdOGbgp3DSUKKTk9858ZP8JcEVvI8iMUde0eTJwj+rGwthalcMc1lOq/SqNfSHJfc295W+ndlKVW1vKMVm/wkuLeh31qioxcqrSUU22+CW9tlO4zxM7+qbNBtUYPsr2n7cl9lw8WZ2LHbPftWpWclu2sv29p31XlVtG7PdGPCMVpFf5qzXgGxWsVjULsRqNAAOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAATXyV0YztVSVT0o0+z4ySbX0XiWmUPcV6zuavGtZ9+W6Ufai9Yv796Rc9y3xSvmmqlhkmvWXGL5SXBmV5uO0X5fFTPWd7bFrPUjN7YHsl4tyjB0pP1qbyXjD0foSYFSt7VndZQxaY9KuvHyb16O+wVI1Fyl2H+U/oRi8LktN2/wCtoTivayzj/vjmvqXwfNktU83JHvtNXPaPbzwt+gLuvTC1kvPN2ijFSfrQ7D+a18Sv8U4IndEHVsMnUpR3yTXaiuby3SXXdkW8fl0vOvUpq5q26REAFtKAAAAAAAAAAAAAAAAAAAAAAAAAAAZN32+rds1UsM3CS4rj0a0a6MxgeTET1JpY9x+UaMso31DZf7yGbT6uGq8MybWC86N5R2rDUjNe688u9arxKCOdKpKjJSoycZLSUW013Nb0U8nhVt3XpBbBE+noUFNXdje22LJSqKouVRbX/JZP5skdj8pkX/r7PJdaclL6Sy+5Tv4eWvrtFOG0LCOFWCqJqos0001zT1RG7Njyw1vTqSh0lCX3imjCv3ygWezwaulupUayi9lqMXzblk33JEcYMkzrUuPx23rSsbZSVCrOEdIznFdyk0vsdJ9b2nnI+G5HpfAAegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9AAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z" alt="Anytime Fitness Logo" className="franchise-logo-img" />
              </div>
              <h3>Anytime Fitness</h3>
              <div className="franchise-info">
                <span className="info-item">
                  <i className="fas fa-map-marker-alt"></i> International
                </span>
                <span className="info-item">
                  <i className="fas fa-tag"></i> Fitness & Health
                </span>
              </div>
              <div className="franchise-investment">
                <p>Investment Range:</p>
                <p className="investment-range">$98,000 - $523,000</p>
              </div>
              <Link to="/franchises/anytime-fitness" className="btn btn-outline btn-block">View Details</Link>
            </div>
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