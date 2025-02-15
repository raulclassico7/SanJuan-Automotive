import React from 'react';
import Section from '../components/Section';
import SpecialsCorousel from './SpecialsCorousel';
import SportBg from '../assets/SportBg-Specials.png'



export default function Specials() {
    return(
        <div
        style={{
            backgroundImage: `url(${SportBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
            <Section
                className="pt-[2rem] relative z-10 border-2 xl:py-10 border-red-500"
                crosses
                id="specials"
            >   
            <div className='container text-center flex flex-col lg:flex-col'>
                <div className='max-w-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[3rem]'>
                    <h1 className='h1 mb-6 mt-6 text-w-8'>
                        Specials of The Month
                    </h1>
                </div>
            </div>
            <SpecialsCorousel />
            </Section>
        </div>
    )
}