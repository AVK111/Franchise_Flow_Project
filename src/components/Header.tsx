import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const handleLogout = () => {
    logout();
  };

  const getUserInitials = () => {
    if (!user) return '';
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
  };
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>FranchiseFlow</h1>
          </Link>
        </div>
        
        <button 
          className={`mobile-menu-button ${isNavOpen ? 'open' : ''}`} 
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/franchises" className="nav-link" onClick={() => setIsNavOpen(false)}>
                Franchises
              </Link>
            </li>
            
            {!isAuthenticated ? (
              <>
                <li>
                  <Link to="/login" className="nav-link" onClick={() => setIsNavOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    onClick={() => setIsNavOpen(false)}
                  >
                    <Button variant="default" size="sm">
                      Register
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {user?.role === 'franchisee' && (
                  <li>
                    <Link to="/franchisee-dashboard" className="nav-link" onClick={() => setIsNavOpen(false)}>
                      My Dashboard
                    </Link>
                  </li>
                )}
                
                {user?.role === 'franchisor' && (
                  <li>
                    <Link to="/franchisor-dashboard" className="nav-link" onClick={() => setIsNavOpen(false)}>
                      Franchisor Dashboard
                    </Link>
                  </li>
                )}
                
                {user?.role === 'admin' && (
                  <li>
                    <Link to="/admin" className="nav-link" onClick={() => setIsNavOpen(false)}>
                      Admin Panel
                    </Link>
                  </li>
                )}
                
                <li className="user-menu">
                  <div className="user-profile">
                    <Avatar>
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${getUserInitials()}&background=random`} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                    <span className="user-name">{user?.firstName} {user?.lastName}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleLogout}
                    className="logout-btn"
                  >
                    Logout
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
