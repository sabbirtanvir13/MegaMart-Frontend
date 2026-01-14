import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import ProductCard from '../../components/Product/ProductCard';
import BestSale from '../../components/Product/BestSale';
import HotProduct from '../../components/Product/HotProduct';

const Home = () => {
    return (
        <div>
            
            <HeroSlider></HeroSlider>
           <BestSale></BestSale>
           <HotProduct></HotProduct>
         
        </div>
    );
};

export default Home;