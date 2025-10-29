
import React from 'react';
import '../styles/FranchiseFilter.css';

interface FilterProps {
  filters: {
    category: string;
    location: string;
    investmentMin: number;
    investmentMax: number;
    searchTerm: string;
  };
  onFilterChange: (filters: any) => void;
}

const FranchiseFilter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  const categories = [
    'Food & Beverage',
    'Retail',
    'Home Services',
    'Health & Fitness',
    'Education',
    'Automotive',
    'Business Services',
    'Entertainment',
  ];
  
  const locations = [
    'National',
    'Northeast',
    'Southeast',
    'Midwest',
    'Southwest',
    'West',
  ];
  
  const investmentRanges = [
    { min: 0, max: 50000, label: 'Under $50,000' },
    { min: 50000, max: 100000, label: '$50,000 - $100,000' },
    { min: 100000, max: 250000, label: '$100,000 - $250,000' },
    { min: 250000, max: 500000, label: '$250,000 - $500,000' },
    { min: 500000, max: 1000000, label: '$500,000 - $1,000,000' },
    { min: 1000000, max: 10000000, label: '$1,000,000+' },
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ searchTerm: e.target.value });
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ category: e.target.value });
  };
  
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ location: e.target.value });
  };
  
  const handleInvestmentChange = (min: number, max: number) => {
    onFilterChange({ investmentMin: min, investmentMax: max });
  };
  
  const resetFilters = () => {
    onFilterChange({
      category: '',
      location: '',
      investmentMin: 0,
      investmentMax: 1000000,
      searchTerm: '',
    });
  };
  
  return (
    <div className="franchise-filter">
      <div className="filter-header">
        <h3>Filter Options</h3>
        <button 
          onClick={resetFilters} 
          className="reset-filters"
          aria-label="Reset all filters"
        >
          Reset All
        </button>
      </div>
      
      <div className="filter-section">
        <h4>Search</h4>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search franchises..." 
            value={filters.searchTerm}
            onChange={handleSearchChange}
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Category</h4>
        <select 
          value={filters.category}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <h4>Location</h4>
        <select 
          value={filters.location}
          onChange={handleLocationChange}
          className="filter-select"
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <h4>Investment Range</h4>
        <div className="investment-options">
          {investmentRanges.map((range) => (
            <label key={range.label} className="investment-option">
              <input 
                type="radio" 
                name="investmentRange" 
                checked={filters.investmentMin === range.min && filters.investmentMax === range.max}
                onChange={() => handleInvestmentChange(range.min, range.max)}
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FranchiseFilter;
