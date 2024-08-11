import { FC } from 'react'
import Header from './componets/screen/Header/header'
import { BrowserRouter } from 'react-router-dom'
import SliderComponent from './componets/screen/Slider/slider'
import AboutCompony from './componets/screen/About/about'
import AboutInvestment from './componets/screen/investmen/investmen'
import Services from './componets/screen/services/service'


const Home: FC = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Header />
        <SliderComponent />
        <AboutCompony />
        <AboutInvestment />
        <Services/>
      </BrowserRouter>
    </div>
  )
}

export default Home