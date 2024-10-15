import React from 'react';
import PropertyCard from '../components/PropertyCard';

const Home = ({ properties }) => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Popular Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Home;
