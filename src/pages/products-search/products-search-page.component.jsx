import { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';


import {
    Collapse,
    Card,
    CardBody,
    CardImg,
    Button
  } from "shards-react";
  import { BsFilterCircle } from "react-icons/bs";
  import { IoIosCloseCircleOutline } from "react-icons/io";


import ProductSearchFilters from '../../components/product-search-filters/product-search-filters.component';
import ProductSearchItem from '../../components/product-search-item/product-search-item.component';

import './products-search-page.styles.scss';

const ProductSearchPage = () => {
    // const[filterMenuWidth, setFilterMenuWidth] = useState('3px');
    const[showFilterMenu, setShowFilterMenu] = useState(false);
    const [filterMenuWidth, setFilterMenuWidth] = useState(null);
    const searchFilterRef = useRef(null);

    const changeIcon = (icon) => icon.classList.toggle(<IoIosCloseCircleOutline/>);


    return (
        <div className='product-search-container'>


                <div className='product-search-card'>
                    <div className='product-search-cardbody'>


                        <div className="search-filter-container-test" >
                            <Button onClick={() => setShowFilterMenu(!showFilterMenu)} pill theme='primary' className='filter-open-button'>
                                    <BsFilterCircle size='25px'/>
                            </Button>

                            <div className="search-filter-container-test-2" style={{width: filterMenuWidth}} ref={searchFilterRef}>
                                <CSSTransition
                                    in={showFilterMenu}
                                    timeout={0}
                                    classNames="filter-menu"
                                    unmountOnExit
                                    onEnter={() => setFilterMenuWidth(300) }
                                    onExited={() => setFilterMenuWidth(0)}
                                    >
                                        <ProductSearchFilters/>
                                    </CSSTransition>

                            </div>
                            
                        </div>



                            
                        <div className='search-results-container'>
                            {/* <p>test test</p> */}
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            <ProductSearchItem/>
                            
                        </div>
                    </div>

                </div>

                {/* </CardBody>
            </Card> */}

        </div>
    )

}

export default ProductSearchPage;