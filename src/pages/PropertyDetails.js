import React from 'react';
import BookingForm from '../components/BookingForm';

const PropertyDetails = ({ property }) => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold">{property.name}</h2>
            <p className="text-gray-700">{property.location}</p>
            <img src={property.image} alt={property.name} className="w-full h-64 object-cover rounded" />
            <p className="text-green-600 font-semibold my-4">${property.pricePerNight}/night</p>
            <BookingForm />
        </div>
    );
};

export default PropertyDetails;
