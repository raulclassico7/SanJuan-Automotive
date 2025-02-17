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
                className="pt-[2rem] relative z-10 xl:py-15"
                crosses
                id="specials"
            >   
            <div className='container text-center flex flex-col lg:flex-col'>
                <div className='max-w-auto mb-[1rem] text-center md:mb-20 lg:mb-[1rem]'>
                    <h1 
                        className='h1 mt-6 text-w-8'
                        style={{ 
                            textShadow: '2px 4px 10px rgba(255, 255, 255, 0.7)' 
                        }}
                    >
                        Specials of The Month
                    </h1>
                </div>
            </div>
            <SpecialsCorousel />
            </Section>
        </div>
    )
}