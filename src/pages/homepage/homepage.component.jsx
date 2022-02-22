import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import CarouselItem from '../../components/carousel/carousel.component';
import { Card, CardBody, CardTitle, CardSubtitle } from 'shards-react';
import topPageWallpaper from '../../components/homepage-top-image/kitchen1-edited.jpg';
import PromoSection from '../../components/promo-section/promo-section.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import NavBarFloating from '../../components/navbar-floating/navbar-floating.component';
 
const HomePage = () => (  //functional component because we dont really need to store any state
    <div className='homepage'>
        {/* <NavBarFloating/> */}
        <topPageWallpaper/>
        <CarouselItem/>
        <PromoSection/>
        <Directory/>

        
        <h1 className="text-center" style={{ paddingTop: "30%" }}>
                Product Listings
        </h1>


    </div>


);

export default HomePage;