import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Get user data
      const userResponse = await fetch('http://localhost:5000/api/v1/auth/me', {
        headers: {
          'Authorization': `Bearer ${data.token}`,
        },
      });

      const userData = await userResponse.json();

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }

      // Store token and user data
      login(data.token, userData.data);

      // Redirect based on role
      if (userData.data.role === 'admin') {
        navigate('/admin');
      } else if (userData.data.role === 'franchisor') {
        navigate('/franchisor-dashboard');
      } else {
        navigate('/franchisee-dashboard');
      }
      
    } catch (err) {
      console.error('Login error:', err);
      setErrors({
        form: err instanceof Error ? err.message : 'Login failed. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
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
            <Button 
              type="submit" 
              variant="signin"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
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
  );
};

export default LoginPage;
