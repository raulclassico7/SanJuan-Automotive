import Section from './Section';
import Button from './Button';
import YellowBg from '../assets/YellowBG.png';
import SJLogo from '../assets/SJ-logo.png';
import SJVid from '../assets/SJ-Vid.mp4';
import Phone from '../assets/telephone.png';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Banner = () => {
  return (
    <div id='home' className="relative">
      {/* Video background for large screens */}
      <video
        src={SJVid}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0 hidden md:block" // Hide on small screens (md and below)
      />
      {/* Image background for small screens */}
      <img
        src={YellowBg}
        alt="Yellow background"
        className="absolute inset-0 object-cover w-full h-full z-0 block md:hidden" // Show on small screens only (md and below)
      />
      {/* Content */}
      <Section
        className="pt-[2rem] -mt-[5.25rem] relative z-10"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="banner"
      >   
        <div className='container mx-4 relative flex flex-col lg:flex-row'>
          <div className='max-w-[45rem] text-left mb-[3.875rem] md:mb-20 lg:mb-[3rem]'>
            <img className='mt-15 -ml-5 mb-5' src={SJLogo} height={250} width={450} />
            <h1 className='h1 mb-6 mt-6 text-n-8'>
              The Best Autoshop in Town! 
            </h1>
            <p className="body-1 leading-tight font-bold max-w-3xl text-lg md:text-[35px] mx-auto mb-6 text-n-8 lg:mb-12">
              Proudly serving the greater Los Angeles area. Call today to schedule an appointment!
            </p>
            <div className='flex items-center'>
                <img className='h-16 w-auto' src={Phone} alt="Phone" />
                <h3 className='ml-4 text-lg md:text-[50px]'> (562) 944 - 6353</h3>
            </div>
            <div className='flex items-center mt-3'>
                <FaMapMarkerAlt className='h-16 w-auto' alt="Phone" />
                <h3 className='ml-4 text-lg md:text-[30px]'>11823 Valley View Ave, Whittier, CA 90604</h3>
            </div>
            <Button href="#setAppointment" white className='mt-10 mb-10 text-lg md:text-[17px]'>
              Set your appointment
            </Button>
          </div>
        </div>
      </Section> 
    </div>
  );
}

export default Banner;


