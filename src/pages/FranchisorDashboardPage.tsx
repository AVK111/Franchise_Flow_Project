import React from 'react';
import Layout from '../components/Layout';
import '../styles/FranchisorDashboard.css';

const FranchisorDashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="container">
          <h1>Franchisor Dashboard</h1>
          <div className="dashboard-content">
            <div className="welcome-section">
              <h2>Welcome to your Franchisor Dashboard</h2>
              <p>Manage your franchise listings and applications here.</p>
            </div>
            
            <div className="dashboard-stats">
              <div className="stat-card">
                <h3>Total Applications</h3>
                <p className="stat-number">0</p>
              </div>
              <div className="stat-card">
                <h3>Active Listings</h3>
                <p className="stat-number">0</p>
              </div>
              <div className="stat-card">
                <h3>Pending Reviews</h3>
                <p className="stat-number">0</p>
              </div>
            </div>
            
            <div className="dashboard-actions">
              <button className="btn btn-primary">Create New Listing</button>
              <button className="btn btn-outline">View All Applications</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FranchisorDashboardPage; 