import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import NewApptBg from '../assets/New-5-Appt-Bg.png';
import { format } from 'date-fns';

const SetAppointment = () => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1969 },
    (_, i) => new Date().getFullYear() - i
  );

  const initialDetails = {
    fullName: '',
    email: '',
    phoneNumber: '',
    make: '',
    model: '',
    year: '',
    reason: '',
    date: '',
    time: '',
  };

  const [formDetails, setFormDetails] = useState(initialDetails);
  const [buttonText, setButtonText] = useState('Submit Appointment');
  const [status, setStatus] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');

  const onFormUpdate = (category, value) => {
    console.log(category, value);
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onFormUpdate('date', date);
  };

  const handleTimeChange = (time) => {
    const formattedTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');
    setSelectedTime(formattedTime);
    onFormUpdate('time', formattedTime);
    console.log("formatted time", formattedTime);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('https://sanjuan-automotive.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(formDetails)
    });
    setButtonText('Submit Appointment');
    let result = await response.json();
    setFormDetails(initialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Error, try again later' });
    }
  };

  return (
    <div
      id="setAppointment"
      style={{
        backgroundImage: `url(${NewApptBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="p-15">
          <div className="max-w-md mx-auto p-8 bg-zinc-100 bg-opacity-75 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold mb-4 text-n-8">
              Personal Information
            </h1>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formDetails.fullName}
                placeholder="Full Name"
                onChange={(e) => onFormUpdate('fullName', e.target.value)}
                className="mt-1 block w-full h-8 pl-2 border-black rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onFormUpdate('email', e.target.value)}
                className="mt-1 block w-full h-8 pl-2 border-gray-300 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formDetails.phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}
                className="mt-1 block w-full h-8 pl-2 border-gray-300 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4 text-n-8">
              Vehicle Information
            </h2>
            <div className="mb-4">
              <label
                htmlFor="make"
                className="block text-sm font-medium text-gray-700"
              >
                Make
              </label>
              <input
                type="text"
                id="make"
                value={formDetails.make}
                placeholder="Make"
                onChange={(e) => onFormUpdate('make', e.target.value)}
                className="mt-1 block w-full h-8 pl-2 border-gray-300 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700"
              >
                Model
              </label>
              <input
                type="text"
                id="model"
                placeholder="Model"
                onChange={(e) => onFormUpdate('model', e.target.value)}
                className="mt-1 block w-full h-8 pl-2 border-gray-300 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700"
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                className="mt-1 block w-full h-8 pl-2 border-gray-300 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                value={formDetails.year}
                onChange={(e) => onFormUpdate('year', e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4 text-n-8">
              Reason for Scheduling Appointment
            </h3>
            <div className="mb-4">
              <textarea
                id="reason"
                placeholder="Reason"
                value={formDetails.reason}
                onChange={(e) => onFormUpdate('reason', e.target.value)}
                rows="4"
                className="mt-1 block w-full pl-2 pt-2 pr-2 border-gray-300 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              ></textarea>
            </div>

            <h4 className="text-xl font-bold mt-8 mb-4 text-n-8">
              Date and Time
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  className="mt-1 block w-full h-8 pl-2 rounded-md text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Date"
                  popperClassName="z-50" // Apply TailwindCSS class for z-index
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <TimePicker
                  id="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="mt-1 w-full h-8 pl-2 rounded-md bg-white text-black shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                  disableClock={true}
                  clearIcon={null}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {buttonText}
            </button>
            {status.message && (
              <div
                className={`mt-4 text-sm ${
                  status.success ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status.message}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetAppointment;
