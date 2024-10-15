import React from 'react';

const PropertyCard = ({ property }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-2">{property.name}</h3>
            <p className="text-gray-700">{property.location}</p>
            <p className="text-green-600 font-semibold">${property.pricePerNight}/night</p>
        </div>
    );
};

export default PropertyCard;
