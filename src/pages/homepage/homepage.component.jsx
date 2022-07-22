import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import CarouselItem from "../../components/carousel/carousel.component";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import topPageWallpaper from "../../components/homepage-top-image/kitchen1-edited.jpg";
import PromoSection from "../../components/promo-section/promo-section.component";
import NavBarFloating from "../../components/navbar-floating/navbar-floating.component";
import { Helmet } from "react-helmet-async";

const HomePage = () => (
  //functional component because we dont really need to store any state

  <div className="homepage">
    <Helmet>
      <title> GRS Home</title>
    </Helmet>

    <topPageWallpaper />
    <CarouselItem />
    <PromoSection />
    <Directory />
  </div>
);

export default HomePage;
