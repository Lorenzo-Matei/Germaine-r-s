import React from 'react';
import {
    Button,
    Collapse,
    Card,
    CardBody,
    CardImg
  } from "shards-react";
import { BackgroundSyncPlugin } from 'workbox-background-sync';
import CategoriesFilter from '../categories-filter/categories-filter.component';

import './product-search-filters.styles.scss';

const ProductSearchFilters = () => {
    return (
            <Card className='search-filter-card'>
                <CardBody className='search-filter-cardbody'>
                    <Button className='reset-filters-button' outline theme="danger">Reset</Button>
                    <hr className='hr'/>
                    <CategoriesFilter className='categories-container'/>
                    {/* <p>test test</p> */}
                </CardBody>

            </Card>

    )
}
export default ProductSearchFilters;