import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { Collapse, Card, CardBody, CardImg, Button } from "shards-react";
import { BsFilterCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

import ProductSearchFilters from "../../components/product-search-filters/product-search-filters.component";
import ProductSearchItem from "../../components/product-search-item/product-search-item.component";
// import productsData from "../../productsData"; // dont use anymore because of the useEffect hook that fetchs it

import "./products-search-page.styles.scss";
import { data } from "jquery";
import axios from "axios";

const ProductSearchPage = () => {
  // const[filterMenuWidth, setFilterMenuWidth] = useState('3px');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterMenuWidth, setFilterMenuWidth] = useState(null);
  const searchFilterRef = useRef(null);

  //hooks
  const [productsData, setProducts] = useState([]); // useState() returns an array that contains variable and a function that return values in that variable ; in this case products

  useEffect(() => {
    //this hook does something everytime something rerenders -> ex. use types something/ click someting
    const fetchData = async () => {
      //this is a async functinon that grabs products from backend
      const result = await axios.get("/api/productsData"); //sends ajax request to the address specified- api
      setProducts(result.data); // sets state for products by grabbing 'data' from backend with the 'result' function
    };

    fetchData(); //now that we've define fetchData function we call it within the useEffect.
  }, []); // 2nd parameter - after the , - specifies when to to do it, in this case its after the first render and only do it once.
  // therefore useEffect will run this function after the 1st render of this component

  const changeIcon = (icon) =>
    icon.classList.toggle(<IoIosCloseCircleOutline />);

  return (
    <div className="product-search-container">
      <div className="product-search-card">
        <div className="product-search-cardbody">
          <div className="search-filter-container-test">
            <Button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              pill
              theme="primary"
              className="filter-open-button"
            >
              <BsFilterCircle size="25px" />
            </Button>

            <div
              className="search-filter-container-test-2"
              style={{ width: filterMenuWidth }}
              ref={searchFilterRef}
            >
              <CSSTransition
                in={showFilterMenu}
                timeout={0}
                classNames="filter-menu"
                unmountOnExit
                onEnter={() => setFilterMenuWidth(300)}
                onExited={() => setFilterMenuWidth(0)}
              >
                <ProductSearchFilters />
              </CSSTransition>
            </div>
          </div>

          <div className="search-results-container">
            {productsData.map((product) => (
              <ProductSearchItem
                brand={product.Brand}
                name={product.name}
                slug={product.slug}
                brandLogo={product.brandLogo}
                image={product.image}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchPage;

// <ProductSearchItem />
// <ProductSearchItem />
