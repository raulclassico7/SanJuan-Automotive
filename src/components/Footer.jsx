import { FaFacebookF, FaTiktok, FaInstagram, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import SJLogo from '../assets/SJ-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <img src={SJLogo} height={200} width={250} alt="Logo" className="mr-4" />
        <div className="flex items-center mb-4 lg:mb-0">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61558811087907&mibextid=LQQJ4d" className="text-gray-300 hover:text-white">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@san.juan.automoti?_t=8mGf6aXtBLK&_r=1" className="text-gray-300 hover:text-white">
              <FaTiktok className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/automotive_sanjuan?igsh=MWQ1ZGUxMzBkMA==" className="text-gray-300 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Right section with address, phone number, and hours of operation */}
        <div className="text-center lg:text-right">
          <div className="flex flex-row justify-start lg:justify-end mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <p className="sm:pl-2">123 Main St, City, State, Zip Code</p>
          </div>
          <div className="flex flex-row justify-start lg:justify-end mb-2">
            <FaPhone className="mr-2" />
            <p className="sm:pl-2">(123) 456-7890</p>
          </div>
          <div className="flex flex-row justify-start lg:justify-end">
            <FaClock className="mr-2" />
            <p className="sm:pl-2">Mon - Fri: 9am - 5pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


