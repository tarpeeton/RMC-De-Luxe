import { FC } from 'react'
import Header from './componets/screen/Header/header'
import { BrowserRouter } from 'react-router-dom'
import SliderComponent from './componets/screen/Slider/slider'
import AboutCompony from './componets/screen/About/about'
import AboutInvestment from './componets/screen/Investmen/investmen'
import Services from './componets/screen/Services/service'
import ChooseUs from './componets/screen/ChooseUS/choose'
import Buildings from './componets/screen/Buildings/buildings'
import MortgageCalc from './componets/screen/Mortgage/mortrage'
import FormCTA from './componets/screen/FormCta/foormCta'
import Blog from './componets/screen/Blog/Blog'


const Home: FC = () => {

  return (
    <div className='Main'>
      <BrowserRouter>
        <Header />
        <SliderComponent />
        <AboutCompony />
        <AboutInvestment />
        <Services />
        <ChooseUs />
        <Buildings />
        <MortgageCalc />
        <FormCTA />
        <Blog/>
      </BrowserRouter>
    </div>
  )
}

export default Home