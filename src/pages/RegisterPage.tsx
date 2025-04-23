import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/RegisterPage.css';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'franchisee', // franchisee or franchisor
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, role: e.target.value });
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Validate phone
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role: formData.role
        })
      });
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      
      // Registration successful
      setSubmitSuccess(true);
      
    } catch (err) {
      console.error('Registration error:', err);
      setErrors({ 
        form: err instanceof Error ? err.message : 'Registration failed. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submitSuccess) {
    return (
      <div className="register-container">
        <div className="registration-success">
          <div className="success-icon">✓</div>
          <h2>Registration Successful!</h2>
          <p>Your account has been created. Please check your email for verification.</p>
          <div className="success-actions">
            <Link to="/login" className="btn btn-primary">Sign In Now</Link>
            <Link to="/" className="btn btn-outline">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-header">
          <h1>Create Your Account</h1>
          <p>Join FranchiseFlow to discover franchise opportunities</p>
        </div>
        
        {errors.form && (
          <div className="error-banner">
            {errors.form}
          </div>
        )}
        
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Account Type</h3>
            <div className="role-selection">
              <label className={`role-option ${formData.role === 'franchisee' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="franchisee"
                  checked={formData.role === 'franchisee'}
                  onChange={handleRoleChange}
                />
                <div className="role-content">
                  <h4>Franchisee</h4>
                  <p>I'm looking to invest in a franchise opportunity</p>
                </div>
              </label>
              
              <label className={`role-option ${formData.role === 'franchisor' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="franchisor"
                  checked={formData.role === 'franchisor'}
                  onChange={handleRoleChange}
                />
                <div className="role-content">
                  <h4>Franchisor</h4>
                  <p>I represent a company offering franchise opportunities</p>
                </div>
              </label>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'form-control error' : 'form-control'}
                />
                {errors.firstName && <p className="error-text">{errors.firstName}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'form-control error' : 'form-control'}
                />
                {errors.lastName && <p className="error-text">{errors.lastName}</p>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'form-control error' : 'form-control'}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'form-control error' : 'form-control'}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </div>
          
          <div className="form-section">
            <h3>Security</h3>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? 'form-control error' : 'form-control'}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={errors.confirmPassword ? 'form-control error' : 'form-control'}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
          </div>
          
          <div className="form-submit">
            <button 
              type="submit" 
              className="btn btn-primary btn-large"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
          
          <div className="form-footer">
            <p>
              Already have an account? 
              <Link to="/login"> Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

