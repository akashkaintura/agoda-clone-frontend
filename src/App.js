import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/searchResults';
import PropertyDetails from './pages/PropertyDetails';
import Booking from './pages/Booking';
import { fetchProperties } from './services/api';

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getProperties() {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }

    getProperties();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults properties={properties} />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
