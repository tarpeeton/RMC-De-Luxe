import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Header from './componets/screen/Header/header'
import SliderComponent from './componets/screen/Slider/slider'
import AboutCompony from './componets/screen/About/about'
import Investmen from './componets/screen/Invest/investmen'
import Service from './componets/screen/services/service'
import ChooseUs from './componets/screen/ChooseUS/choose'
import Buildings from './componets/screen/Buildings/buildings'
import MortgageCalc from './componets/screen/Mortgage/mortrage'
import FormCTA from './componets/screen/FormCta/foormCta'
import Blog from './componets/screen/Blog/blog'
import Footer from './componets/screen/Footer/footer'


const Home: FC = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Header />
        <SliderComponent />
        <AboutCompony />
         <Investmen /> 
          <Service /> 
        <ChooseUs />
        <Buildings />
        <MortgageCalc />
        <FormCTA />
        <Blog/>
        <Footer/> 
      </BrowserRouter>
    </div>
  )
}

export default Home
