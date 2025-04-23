
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FranchiseFilter from '../components/FranchiseFilter';
import FranchiseCard from '../components/FranchiseCard';
import '../styles/FranchiseListingPage.css';

// Type definitions
interface Franchise {
  id: string;
  name: string;
  logo: string;
  category: string;
  location: string;
  investmentMin: number;
  investmentMax: number;
  description: string;
}

// Mock data - would come from API in real app
const mockFranchises: Franchise[] = [
  {
    id: '1',
    name: 'BurgerBliss',
    logo: 'https://via.placeholder.com/150x80?text=BurgerBliss',
    category: 'Food & Beverage',
    location: 'National',
    investmentMin: 200000,
    investmentMax: 400000,
    description: 'A premium fast-casual burger restaurant offering gourmet burgers and sides.',
  },
  {
    id: '2',
    name: 'CleanCo',
    logo: 'https://via.placeholder.com/150x80?text=CleanCo',
    category: 'Home Services',
    location: 'Northeast',
    investmentMin: 75000,
    investmentMax: 150000,
    description: 'Professional cleaning services for residential and commercial properties.',
  },
  {
    id: '3',
    name: 'FitZone',
    logo: 'https://via.placeholder.com/150x80?text=FitZone',
    category: 'Health & Fitness',
    location: 'National',
    investmentMin: 300000,
    investmentMax: 500000,
    description: 'Modern fitness centers with state-of-the-art equipment and group classes.',
  },
  {
    id: '4',
    name: 'KidsLearn',
    logo: 'https://via.placeholder.com/150x80?text=KidsLearn',
    category: 'Education',
    location: 'West',
    investmentMin: 150000,
    investmentMax: 300000,
    description: 'Educational centers focused on STEM learning for children aged 5-14.',
  },
  {
    id: '5',
    name: 'PetPals',
    logo: 'https://via.placeholder.com/150x80?text=PetPals',
    category: 'Retail',
    location: 'National',
    investmentMin: 100000,
    investmentMax: 250000,
    description: 'Premium pet supplies and grooming services for pet lovers.',
  },
  {
    id: '6',
    name: 'QuickFix',
    logo: 'https://via.placeholder.com/150x80?text=QuickFix',
    category: 'Automotive',
    location: 'Southeast',
    investmentMin: 150000,
    investmentMax: 350000,
    description: 'Quick service auto repair shops specializing in routine maintenance.',
  },
];

const FranchiseListingPage: React.FC = () => {
  const [franchises, setFranchises] = useState<Franchise[]>([]);
  const [filteredFranchises, setFilteredFranchises] = useState<Franchise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    investmentMin: 0,
    investmentMax: 1000000,
    searchTerm: '',
  });
  
  // Simulate API fetch
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      setFranchises(mockFranchises);
      setFilteredFranchises(mockFranchises);
      setLoading(false);
    }, 800);
  }, []);
  
  // Apply filters when filters state changes
  useEffect(() => {
    if (franchises.length > 0) {
      const filtered = franchises.filter(franchise => {
        // Filter by category
        if (filters.category && franchise.category !== filters.category) {
          return false;
        }
        
        // Filter by location
        if (filters.location && franchise.location !== filters.location) {
          return false;
        }
        
        // Filter by investment range
        if (
          franchise.investmentMin > filters.investmentMax ||
          franchise.investmentMax < filters.investmentMin
        ) {
          return false;
        }
        
        // Filter by search term
        if (
          filters.searchTerm &&
          !franchise.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !franchise.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
        ) {
          return false;
        }
        
        return true;
      });
      
      setFilteredFranchises(filtered);
    }
  }, [filters, franchises]);
  
  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };
  
  return (
    <Layout>
      <div className="franchise-listing-page">
        <div className="container">
          <div className="listing-header">
            <h1>Franchise Opportunities</h1>
            <p>Discover and compare the best franchise opportunities that match your interests and budget</p>
          </div>
          
          <div className="listing-content">
            <aside className="filter-sidebar">
              <FranchiseFilter 
                filters={filters} 
                onFilterChange={handleFilterChange} 
              />
            </aside>
            
            <div className="franchises-container">
              {loading ? (
                <div className="loading-state">
                  <div className="loader"></div>
                  <p>Loading franchise opportunities...</p>
                </div>
              ) : filteredFranchises.length > 0 ? (
                <>
                  <div className="results-header">
                    <p className="results-count">
                      <strong>{filteredFranchises.length}</strong> franchise opportunities found
                    </p>
                    <div className="sort-options">
                      <label>Sort by:</label>
                      <select>
                        <option value="nameAsc">Name: A to Z</option>
                        <option value="nameDesc">Name: Z to A</option>
                        <option value="investmentLow">Investment: Low to High</option>
                        <option value="investmentHigh">Investment: High to Low</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="franchise-grid">
                    {filteredFranchises.map(franchise => (
                      <FranchiseCard key={franchise.id} franchise={franchise} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="no-results">
                  <i className="fas fa-search"></i>
                  <h3>No franchises found</h3>
                  <p>Try adjusting your filters to find more opportunities</p>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setFilters({
                      category: '',
                      location: '',
                      investmentMin: 0,
                      investmentMax: 1000000,
                      searchTerm: '',
                    })}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FranchiseListingPage;
