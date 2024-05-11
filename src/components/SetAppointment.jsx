import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const SetAppointment = () => {
  const carMakes = ["Toyota", "Ford", "Chevrolet", "Honda", "Nissan", "Jeep", "Subaru", "Hyundai", "BMW", "Mercedes-Benz", "Volkswagen", "Audi"];
  const years = Array.from({length: new Date().getFullYear() - 1969}, (_, i) => new Date().getFullYear() - i);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className='mt-8 mb-8'>
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4 text-n-8">Personal Information</h1>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-n-8">Vehicle Information</h2>
      <div className="mb-4">
        <label htmlFor="make" className="block text-sm font-medium text-gray-700">Make</label>
        <select id="make" name="make" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select Make</option>
          {carMakes.map((make, index) => (
            <option key={index} value={make}>{make}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">Model</label>
        <input type="text" id="model" name="model" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
        <select id="year" name="year" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select Year</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 text-n-8">Reason for Scheduling Appointment</h3>
      <div className="mb-4">
        <textarea id="reason" name="reason" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>

      <h4 className="text-xl font-bold mt-8 mb-4 text-n-8">Date and Time</h4>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <TimePicker
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disableClock={true}
            format="hh:mm a"
            clearIcon={null}
          />
        </div>
      </div>

      <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Submit Appointment</button>
    </div>
    </div>
  );
};

export default SetAppointment;

