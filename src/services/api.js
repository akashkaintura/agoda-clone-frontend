import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchProperties = async () => {
    const response = await axios.get(`${API_BASE_URL}/properties`);
    return response.data;
};

export const fetchPropertyDetails = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/properties/${id}`);
    return response.data;
};

export const createBooking = async (bookingData) => {
    const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
    return response.data;
};
