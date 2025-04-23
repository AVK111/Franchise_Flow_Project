
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      console.log('Login submission data:', formData);
      
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response with user role for demo
      const mockResponse = {
        token: 'mock_jwt_token_would_be_here',
        user: {
          id: '123',
          firstName: 'John',
          lastName: 'Doe',
          email: formData.email,
          role: 'franchisee', // or 'franchisor' or 'admin'
        },
      };
      
      // Store token in localStorage (in a real app, you might use HTTP-only cookies)
      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('userRole', mockResponse.user.role);
      
      // Redirect based on role
      if (mockResponse.user.role === 'admin') {
        navigate('/admin');
      } else if (mockResponse.user.role === 'franchisor') {
        navigate('/franchisor-dashboard');
      } else {
        navigate('/franchisee-dashboard');
      }
      
    } catch (err) {
      console.error('Login error:', err);
      setErrors({
        form: 'Invalid email or password. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your FranchiseFlow account</p>
          </div>
          
          {errors.form && (
            <div className="error-banner">
              {errors.form}
            </div>
          )}
          
          <form className="login-form" onSubmit={handleSubmit}>
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
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>
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
            
            <div className="form-group remember-me">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
            </div>
            
            <div className="form-submit">
              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
          
          <div className="login-footer">
            <p>
              Don't have an account? 
              <Link to="/register"> Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
