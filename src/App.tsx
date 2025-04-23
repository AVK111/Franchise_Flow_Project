
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FranchiseListingPage from './pages/FranchiseListingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FranchiseeDashboardPage from './pages/FranchiseeDashboardPage';
import NotFound from './pages/NotFound';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/franchises" element={<FranchiseListingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/franchisee-dashboard" element={<FranchiseeDashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
