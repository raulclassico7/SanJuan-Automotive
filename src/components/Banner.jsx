import Section from './Section';
import Tech from '../assets/Tech.png'
import { curve, heroBackground } from '../assets';
import Button from './Button';
import BackgroundGrey from '../assets/Grey-Banner-San-Juan.png';
import { Gradient } from './design/Hero';

const Banner = () => {
  return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="banner"
    >   
        <div className='container relative'>
            <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
                <h1 className='h1 mb-6'>
                    We are the best autoshop
                    <span className="inline-block relative">
                    Brainwave{" "}
                        <img
                            src={curve}
                            className="absolute top-full left-0 w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="Curve"
                        />
                    </span>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    Unleash the power of AI within Brainwave. Upgrade your productivity
                    with Brainwave, the open AI chat app.
                </p>
                <Button href="/pricing" white>
                    Get started
                </Button>
            </div>
            <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                    <div className='relative bg-n-6 rounded-[1rem]'>
                        <div className='relative h-[1.4rem] bg-n-10 rounded-t-[0.9rem]'/>
                            <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:apect-[1024/490]'>
                                <img
                                    src={Tech}
                                    className='w-full scale-[1.05] -translate-y-[15%] md:scale-[1] md:-translate-y-[15%] lg:-translate-y-[23%]'
                                    width={1024}
                                    height={1800}
                                    alt='logo'
                                />
                            </div>
                    </div>
                    <Gradient />
                </div>
                <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
                    <img
                        src={heroBackground}
                        className='w-full'
                        width={1440}
                        height={1800}
                        alt='BackgroundGrey'
                    />
                </div>
            </div>
        </div>
    </Section> 
  )
}

export default Banner