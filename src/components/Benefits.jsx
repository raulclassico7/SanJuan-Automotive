import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { benefits } from '../constants';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import GreyBanner from '../assets/Grey-Banner-San-Juan.png';

const Benefits = () => {
  return (
    <div style={{ backgroundImage: `url(${GreyBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Section crosses id='features' className="relative z-2">
        <div className="container">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Popular Services"
          />
          <div className='flex flex-wrap gap-10 mb-10'>
            {benefits.map((item) => (
              <div
                className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`
                }}
                key={item.id}
              >
                <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                  <h5 className='h4 mb-5 text-blue-600'>{item.title}</h5>
                  <p className='body-2 mb-6 text-n-8 font-medium'>
                    {item.text}
                  </p>
                  <div className='flex items-center mt-auto'>
                    <img
                      src={item.iconUrl}
                      width={55}
                      height={55}
                      alt={item.title}
                    />
                    <p className='ml-auto font-code text-sm font-bold text-n-8 uppercase tracking-wider'>Call for more info</p>
                    <Arrow />
                  </div>
                </div>
                <div
                  className='absolute inset-0.5 bg-white'
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-20'>
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className='w-full h-full object-cover'
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Benefits;



