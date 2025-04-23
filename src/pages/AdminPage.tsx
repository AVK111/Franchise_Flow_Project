import React from 'react';
import Layout from '../components/Layout';
import '../styles/AdminPage.css';

const AdminPage: React.FC = () => {
  return (
    <Layout>
      <div className="admin-container">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <div className="admin-content">
            <div className="welcome-section">
              <h2>Welcome to the Admin Dashboard</h2>
              <p>Manage users, franchises, and system settings here.</p>
            </div>
            
            <div className="admin-stats">
              <div className="stat-card">
                <h3>Total Users</h3>
                <p className="stat-number">0</p>
              </div>
              <div className="stat-card">
                <h3>Active Franchises</h3>
                <p className="stat-number">0</p>
              </div>
              <div className="stat-card">
                <h3>Pending Approvals</h3>
                <p className="stat-number">0</p>
              </div>
            </div>
            
            <div className="admin-actions">
              <button className="btn btn-primary">Manage Users</button>
              <button className="btn btn-outline">View Reports</button>
              <button className="btn btn-outline">System Settings</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage; 