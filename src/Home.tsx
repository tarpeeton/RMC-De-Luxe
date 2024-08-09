import {FC} from 'react';
import Header from './componets/screen/Header/header'
import { BrowserRouter } from 'react-router-dom';


const Home: FC = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
      <Header />

      </BrowserRouter>
    </div>
  );
};

export default Home;