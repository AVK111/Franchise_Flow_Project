import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/FranchiseeDashboard.css';
import { Button } from "@/components/ui/button";

// Type definitions
interface Application {
  id: string;
  franchiseName: string;
  franchiseLogo: string;
  category: string;
  status: 'pending' | 'reviewed' | 'approved' | 'rejected';
  dateApplied: string;
  lastUpdated: string;
}

interface Notification {
  id: string;
  message: string;
  date: string;
  isRead: boolean;
}

// Mock data for applications
const mockApplications: Application[] = [
  {
    id: '1',
    franchiseName: 'BurgerBliss',
    franchiseLogo: 'https://via.placeholder.com/150x80?text=BurgerBliss',
    category: 'Food & Beverage',
    status: 'reviewed',
    dateApplied: '2023-05-15',
    lastUpdated: '2023-05-20',
  },
  {
    id: '2',
    franchiseName: 'CleanCo',
    franchiseLogo: 'https://via.placeholder.com/150x80?text=CleanCo',
    category: 'Home Services',
    status: 'pending',
    dateApplied: '2023-05-18',
    lastUpdated: '2023-05-18',
  },
  {
    id: '3',
    franchiseName: 'FitZone',
    franchiseLogo: 'https://via.placeholder.com/150x80?text=FitZone',
    category: 'Health & Fitness',
    status: 'approved',
    dateApplied: '2023-04-30',
    lastUpdated: '2023-05-12',
  },
  {
    id: '4',
    franchiseName: 'QuickFix',
    franchiseLogo: 'https://via.placeholder.com/150x80?text=QuickFix',
    category: 'Automotive',
    status: 'rejected',
    dateApplied: '2023-04-25',
    lastUpdated: '2023-05-05',
  },
];

// Mock data for notifications
const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'Your application for BurgerBliss has been reviewed',
    date: '2023-05-20',
    isRead: false,
  },
  {
    id: '2',
    message: 'Your application for FitZone has been approved! Congratulations!',
    date: '2023-05-12',
    isRead: false,
  },
  {
    id: '3',
    message: 'Your application for QuickFix has been rejected',
    date: '2023-05-05',
    isRead: true,
  },
  {
    id: '4',
    message: 'New franchise opportunities matching your profile have been added',
    date: '2023-05-02',
    isRead: true,
  },
];

// Status badge color mapping
const statusColors: Record<string, string> = {
  pending: 'badge-warning',
  reviewed: 'badge-info',
  approved: 'badge-success',
  rejected: 'badge-danger',
};

const FranchiseeDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const [applications, setApplications] = useState<Application[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Mock user data - in real app, this would come from context or API
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };
  
  // Simulate API fetch
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setApplications(mockApplications);
      setNotifications(mockNotifications);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Format date to more readable format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };
  
  const markNotificationAsRead = (id: string) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };
  
  const unreadNotificationsCount = notifications.filter(
    notification => !notification.isRead
  ).length;
  
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="container">
          <div className="dashboard-header">
            <h1>Franchisee Dashboard</h1>
            <p className="welcome-message">
              Welcome back, {user.firstName} {user.lastName}
            </p>
          </div>
          
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-value">{applications.length}</div>
              <div className="stat-label">Total Applications</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {applications.filter(app => app.status === 'approved').length}
              </div>
              <div className="stat-label">Approved</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {applications.filter(app => app.status === 'pending').length}
              </div>
              <div className="stat-label">Pending</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {applications.filter(app => app.status === 'rejected').length}
              </div>
              <div className="stat-label">Rejected</div>
            </div>
          </div>
          
          <div className="dashboard-tabs">
            <button
              className={`tab ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              My Applications
            </button>
            <button
              className={`tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
              {unreadNotificationsCount > 0 && (
                <span className="notification-badge">{unreadNotificationsCount}</span>
              )}
            </button>
            <button
              className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              My Profile
            </button>
          </div>
          
          <div className="dashboard-content">
            {loading ? (
              <div className="loading-state">
                <div className="loader"></div>
                <p>Loading your dashboard...</p>
              </div>
            ) : activeTab === 'applications' ? (
              <div className="applications-section">
                <h2>Your Franchise Applications</h2>
                
                {applications.length > 0 ? (
                  <div className="applications-list">
                    {applications.map(application => (
                      <div key={application.id} className="application-card">
                        <div className="application-logo">
                          <img
                            src={application.franchiseLogo}
                            alt={application.franchiseName}
                          />
                        </div>
                        <div className="application-details">
                          <h3>{application.franchiseName}</h3>
                          <div className="application-meta">
                            <span className="meta-item">
                              <i className="fas fa-tag"></i> {application.category}
                            </span>
                            <span className="meta-item">
                              <i className="fas fa-calendar"></i> Applied: {formatDate(application.dateApplied)}
                            </span>
                          </div>
                          <div className="application-status-row">
                            <div className={`badge ${statusColors[application.status]}`}>
                              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                            </div>
                            <span className="last-updated">
                              Last updated: {formatDate(application.lastUpdated)}
                            </span>
                          </div>
                        </div>
                        <div className="application-actions">
                          <Button variant="outline">View Details</Button>
                          {application.status === 'approved' && (
                            <Button variant="default">Next Steps</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h3>No Applications Yet</h3>
                    <p>You haven't applied to any franchises yet.</p>
                    <a href="/franchises" className="btn btn-primary">
                      Explore Franchises
                    </a>
                  </div>
                )}
              </div>
            ) : activeTab === 'notifications' ? (
              <div className="notifications-section">
                <h2>Your Notifications</h2>
                
                {notifications.length > 0 ? (
                  <div className="notifications-list">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
                        onClick={() => markNotificationAsRead(notification.id)}
                      >
                        <div className="notification-indicator"></div>
                        <div className="notification-content">
                          <p className="notification-message">{notification.message}</p>
                          <span className="notification-date">{formatDate(notification.date)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon">
                      <i className="fas fa-bell"></i>
                    </div>
                    <h3>No Notifications</h3>
                    <p>You don't have any notifications yet.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="profile-section">
                <h2>Your Profile</h2>
                
                <div className="profile-card">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </div>
                    <div>
                      <h3>{user.firstName} {user.lastName}</h3>
                      <p className="profile-email">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="profile-form">
                    <div className="form-section">
                      <h3>Personal Information</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            defaultValue={user.firstName}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            defaultValue={user.lastName}
                            className="form-control"
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          defaultValue={user.email}
                          className="form-control"
                          disabled
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          defaultValue="(123) 456-7890"
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="form-section">
                      <h3>Investment Preferences</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="minInvestment">Min Investment ($)</label>
                          <input
                            type="number"
                            id="minInvestment"
                            name="minInvestment"
                            defaultValue="50000"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="maxInvestment">Max Investment ($)</label>
                          <input
                            type="number"
                            id="maxInvestment"
                            name="maxInvestment"
                            defaultValue="250000"
                            className="form-control"
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="preferredLocation">Preferred Location</label>
                        <select id="preferredLocation" name="preferredLocation" className="form-control">
                          <option value="any">Any Location</option>
                          <option value="northeast" selected>Northeast</option>
                          <option value="southeast">Southeast</option>
                          <option value="midwest">Midwest</option>
                          <option value="southwest">Southwest</option>
                          <option value="west">West</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="preferredCategories">Preferred Categories</label>
                        <select
                          id="preferredCategories"
                          name="preferredCategories"
                          className="form-control"
                          multiple
                          size={4}
                        >
                          <option value="food">Food & Beverage</option>
                          <option value="retail" selected>Retail</option>
                          <option value="services" selected>Home Services</option>
                          <option value="fitness">Health & Fitness</option>
                          <option value="education">Education</option>
                          <option value="automotive">Automotive</option>
                        </select>
                        <small className="form-text">Hold Ctrl/Cmd to select multiple options</small>
                      </div>
                    </div>
                    
                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                      <button type="button" className="btn btn-outline">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FranchiseeDashboardPage;
