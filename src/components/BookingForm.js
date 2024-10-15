import React from 'react';

const BookingForm = ({ onSubmit }) => {
    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div>
                <label className="block text-gray-700">Check-In Date</label>
                <input type="date" className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="block text-gray-700">Check-Out Date</label>
                <input type="date" className="w-full border p-2 rounded" />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
                Book Now
            </button>
        </form>
    );
};

export default BookingForm;
