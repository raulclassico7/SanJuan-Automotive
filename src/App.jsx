import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Collaboration from './components/Collaboration';
import SetAppointment from './components/SetAppointment';
import Reviews from './components/Reviews';


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       <Header /> 
       <Banner />
       <Benefits />
       <Collaboration />
       <SetAppointment />
       <Reviews />
       <Footer/>
      </div>
      <ButtonGradient />
    </>

  )
}

export default App;
