import React from 'react';
import Banner from '../../components/banner/Banner';
import HomeService from '../../components/homeService/HomeService';
import handleTitle from '../../../useTitle';
import Accordian from '../../components/accordian/Accordian';
import HomeCarousel from '../../components/homeCarousel/HomeCarousel';


const Home = () => {
    handleTitle("Home")
    return (
        <div className='bg-banner'>
            <Banner/>
            <HomeService/>
            <Accordian/>
            <HomeCarousel/>
     
        </div>
    );
};

export default Home;