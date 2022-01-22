import React from 'react';

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

import './new-arrivals.styles.scss';

import cardBackground from '../new-arrivals/promo-cards-background.jpg';

class NewArrivalSection extends React.Component{



  render(){
      return(
          <div className='new-arrivals-container'>
              <Card className='new-arrivals-card' style={{}}>
                <CardImg className='new-arrivals-card-background' src={cardBackground}/>
                

              </Card>

          </div>

      );

  }



}
export default NewArrivalSection;