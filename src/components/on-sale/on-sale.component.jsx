import React from 'react';

import './on-sale.styles.scss';

import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    CardImgOverlay,
    CardSubtitle
  } from "shards-react";

import cardBackground from '../new-arrivals/promo-cards-background.jpg';

class OnSaleSection extends React.Component{



    render(){
        return(
            <div className='on-sale-container'>
                <Card className='on-sale-card' style={{}}>
                    <CardImg className='on-sale-card-background' src={cardBackground}/>
                    

                </Card>

            </div>

        );

    }



}

export default OnSaleSection;