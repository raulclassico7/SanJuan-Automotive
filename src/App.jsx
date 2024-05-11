import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       <Header /> 
       <Banner />
       <Benefits />
       <Footer/>
      </div>
      <ButtonGradient />
    </>

  )
}

export default App;
