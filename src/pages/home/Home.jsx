import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import ProductCard from '../../components/Product/ProductCard';
import BestSale from '../../components/Product/BestSale';
import HotProduct from '../../components/Product/HotProduct';
import DeliveryBanner from '../DeliveryBanner/DeliveryBanner';
import SpecialDeals from '../SpecialDeals';
import NewProducts from '../../components/Product/NewProducts';

const Home = () => {
    return (
        <div>
            
            <HeroSlider></HeroSlider>
           <BestSale></BestSale>
           <HotProduct></HotProduct>
           <NewProducts></NewProducts>
           <DeliveryBanner></DeliveryBanner>
           <SpecialDeals></SpecialDeals>
         
        </div>
    );
};

export default Home;