
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  
  // In a real app, this would come from authentication context/state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole('');
    navigate('/login');
  };
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>FranchiseFlow</h1>
          </Link>
        </div>
        
        <button className="mobile-menu-button" onClick={toggleNav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        
        <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
            <li><Link to="/franchises" onClick={() => setIsNavOpen(false)}>Franchises</Link></li>
            
            {!isLoggedIn && (
              <>
                <li><Link to="/login" onClick={() => setIsNavOpen(false)}>Login</Link></li>
                <li>
                  <Link 
                    to="/register" 
                    onClick={() => setIsNavOpen(false)}
                    className="btn btn-primary nav-btn"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
            
            {isLoggedIn && userRole === 'franchisee' && (
              <li><Link to="/franchisee-dashboard" onClick={() => setIsNavOpen(false)}>My Dashboard</Link></li>
            )}
            
            {isLoggedIn && userRole === 'franchisor' && (
              <li><Link to="/franchisor-dashboard" onClick={() => setIsNavOpen(false)}>Franchisor Dashboard</Link></li>
            )}
            
            {isLoggedIn && userRole === 'admin' && (
              <li><Link to="/admin" onClick={() => setIsNavOpen(false)}>Admin Panel</Link></li>
            )}
            
            {isLoggedIn && (
              <li>
                <button 
                  onClick={handleLogout} 
                  className="btn btn-outline nav-btn"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
