import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FranchiseCard.css';

interface FranchiseProps {
  franchise: {
    id: string;
    name: string;
    logo: string;
    category: string;
    location: string;
    investmentMin: number;
    investmentMax: number;
    description: string;
    yearFounded: number;
    totalLocations: number;
    requirements: {
      netWorth: number;
      liquidCapital: number;
      experienceNeeded: string;
    };
  };
}

const FranchiseCard: React.FC<FranchiseProps> = ({ franchise }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="franchise-card">
      <div className="franchise-logo">
        <img src={franchise.logo} alt={franchise.name} />
      </div>
      <h3>{franchise.name}</h3>
      <div className="franchise-info">
        <span className="info-item">
          <i className="fas fa-tag"></i> {franchise.category}
        </span>
        <span className="info-item">
          <i className="fas fa-map-marker-alt"></i> {franchise.location}
        </span>
        <span className="info-item">
          <i className="fas fa-store"></i> {franchise.totalLocations.toLocaleString()} Locations
        </span>
      </div>
      <p className="franchise-description">{franchise.description}</p>
      <div className="franchise-investment">
        <p>Investment Range:</p>
        <p className="investment-range">
          {formatCurrency(franchise.investmentMin)} - {formatCurrency(franchise.investmentMax)}
        </p>
        <p className="investment-note">
          Required Net Worth: {formatCurrency(franchise.requirements.netWorth)}
        </p>
      </div>
      <div className="franchise-actions">
        <Link to={`/franchises/${franchise.id}`} className="btn btn-outline">View Details</Link>
        <Link to={`/apply/${franchise.id}`} className="btn btn-primary">Apply Now</Link>
      </div>
    </div>
  );
};

export default FranchiseCard;
