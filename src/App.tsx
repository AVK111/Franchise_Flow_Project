import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FranchiseeDashboardPage from './pages/FranchiseeDashboardPage';
import FranchisorDashboardPage from './pages/FranchisorDashboardPage';
import AdminPage from './pages/AdminPage';
import FranchiseListingPage from './pages/FranchiseListingPage';
import FranchiseDetailsPage from './pages/FranchiseDetailsPage';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
          <Route path="/franchises" element={<Layout><FranchiseListingPage /></Layout>} />
          <Route path="/franchisee-dashboard" element={<Layout><FranchiseeDashboardPage /></Layout>} />
          <Route path="/franchisor-dashboard" element={<Layout><FranchisorDashboardPage /></Layout>} />
          <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
          <Route path="/franchises/:id" element={<Layout><FranchiseDetailsPage /></Layout>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
