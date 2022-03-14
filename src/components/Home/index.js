import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Products from '../Products';
import Shop from '../Shop';
import Social from '../Social';
import Profile from '../../component/profile'
import Footer from '../Footer';


const Home = () => {
    return(
        <>
        <div>
      <Hero/>
      <Content/>
      <Products/>
      <Shop/>
      <Social/>
      </div>
      </>
    )
}
export default Home;