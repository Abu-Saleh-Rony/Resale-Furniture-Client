import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DiscountPage from '../DiscountPage/DiscountPage';
import AdvertiseItem from './AdvertiseItem/AdvertiseItem';
import Carousel from './Carousel/Carousel';
import ProductsCategory from './ProductsCategory/ProductsCategory';

const Home = () => {

    // console.log(data)

    return (
        <div>
            <Banner />
            <ProductsCategory />
            <DiscountPage />
            <AdvertiseItem />
            <Contact />
            <Carousel />

        </div>
    );
};

export default Home;