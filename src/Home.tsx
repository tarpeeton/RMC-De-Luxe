import { FC } from 'react'
import Header from './componets/screen/Header/header'
import { BrowserRouter } from 'react-router-dom'
import SliderComponent from './componets/screen/Slider/slider'
import AboutCompony from './componets/screen/About/about'


const Home: FC = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Header />
        <SliderComponent />
        <AboutCompony />
      </BrowserRouter>
    </div>
  )
}

export default Home