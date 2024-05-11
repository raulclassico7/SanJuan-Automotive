import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left section with logo and social media icons */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img src="/your-logo.png" alt="Logo" className="h-12 w-auto mr-4" />
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Right section with address, phone number, and hours of operation */}
        <div className="text-center lg:text-right">
          <p className="mb-2"><FaMapMarkerAlt className="mr-2" /> 123 Main St, City, State, Zip Code</p>
          <p className="mb-2"><FaPhone className="mr-2" /> (123) 456-7890</p>
          <p><FaClock className="mr-2" /> Mon - Fri: 9am - 5pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
