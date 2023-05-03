import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Hero from '../HeroSection/Hero';
import NewsLatter from '../NewsLatter/NewsLatter';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Hero></Hero>
           <Chef></Chef>
           <NewsLatter></NewsLatter>

        </div>
    );
};

export default Home;