import React from 'react';

import {
    Collapse,
    Card,
    CardBody,
    CardImg
  } from "shards-react";
import ProductSearchFilters from '../../components/product-search-filters/product-search-filters.component';

import './products-search-page.styles.scss';

const ProductSearchPage = () => {
    return (
        <div className='product-search-container'>
            {/* <h1 className='product-text'>product search page</h1> */}

            {/* <Card className='m-auto product-search-card'> */}
            <Card className='product-search-card'>
                <CardBody className='product-search-cardbody'>
                    <ProductSearchFilters/>

                </CardBody>

            </Card>
        </div>
    )

}

export default ProductSearchPage;