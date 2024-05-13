import { useState, useEffect } from 'react';
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import MechanicBg from '../assets/Black-Mechanic-Bg.png';

const Collaboration = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this threshold according to your mobile breakpoint
    };

    // Initial call to handleResize
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ backgroundImage: `url(${MechanicBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Section crosses id='how-to-use'>
          <div className="container lg:flex">
            <div className="max-w-[35rem]" style={{ position: 'relative', zIndex: 1 }}> {/* Set higher zIndex to this div */}
              <h2 className="h2 mb-4 md:mb-8">
                Welcome to San Juan Automotive
              </h2>
              <p className="text-[18px] mb-5">
                Welcome to San Juan Automotive, we are located in the City of Whittier but service all of Los Angeles. We are unique in our service because we
                are passionate about what we do and all of our services have a one year warranty to make sure to secure you and leave you completely satisfied.
                Bring your new vehicle purchased from the dealer and we will conduct a bumper to bumper full check up, we want to make sure you make the best purchase.
                Don't be afraid to contact us for a quote, an appointment, or any questions.
              </p>
              <ul className="max-w-[22rem] mb-10 md:mb-14">
                {collabContent.map((item) => (
                  <li className="mb-3 py-3" key={item.id}>
                    <div className="flex items-center">
                      <img src={check} width={24} height={24} alt="check" />
                      <h6 className="body-2 ml-5 text-[18px]">{item.title}</h6>
                    </div>
                  </li>
                ))}
              </ul>

              <Button>Contact US</Button>
            </div>
          </div>
        </Section>
      </div>
      {/* Semi-transparent overlay */}
      {isMobile && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity by changing the last value (0.5 here)
            pointerEvents: 'none', // Ensure the overlay doesn't intercept pointer events
          }}
        />
      )}
    </div>
  );
};

export default Collaboration;




