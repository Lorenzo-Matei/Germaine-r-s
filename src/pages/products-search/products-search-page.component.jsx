import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { Collapse, Card, CardBody, CardImg, Button } from "shards-react";
import { BsFilterCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

import ProductSearchFilters from "../../components/product-search-filters/product-search-filters.component";
import ProductSearchItem from "../../components/product-search-item/product-search-item.component";
import productsData from "../../productsData";

import "./products-search-page.styles.scss";
import { data } from "jquery";

const ProductSearchPage = () => {
  // const[filterMenuWidth, setFilterMenuWidth] = useState('3px');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterMenuWidth, setFilterMenuWidth] = useState(null);
  const searchFilterRef = useRef(null);

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
            {productsData.products.map((product) => (
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

{
  /* {productsData.products.map((product) => (
              <div className="product" key={product.slug}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))} */
}
// <ProductSearchItem />
// <ProductSearchItem />
