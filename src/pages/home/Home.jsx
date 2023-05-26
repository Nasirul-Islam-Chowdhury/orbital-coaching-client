import React from 'react';
import Banner from '../../components/banner/Banner';
import HomeService from '../../components/homeService/HomeService';
import handleTitle from '../../../useTitle';

const Home = () => {
    handleTitle("Home")
    return (
        <div className='bg-banner'>
            <Banner/>
            <HomeService/>
        </div>
    );
};

export default Home;