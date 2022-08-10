import { useState, useEffect, useRef, useReducer } from "react";
import { CSSTransition } from "react-transition-group";

import { Button } from "shards-react";
import { BsFilterCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
import { Carousel } from "react-carousel-minimal";

import ProductSearchFilters from "../../components/product-search-filters/product-search-filters.component";
import ProductSearchItem from "../../components/product-search-item/product-search-item.component";
// import productsData from "../../productsData"; // dont use anymore because of the useEffect hook that fetchs it

import "./products-search-page.styles.scss";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";

const ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  //state is the starting or default value of the state.  2nd param, action , is the action or function that changes the current state.
  switch (action.type) {
    case ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true }; // ...state returns the previous state values. loading: true -> shows a loading message or animation

    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, productsData: action.payload }; // 3rd param -  productsData: action.payload -> loads the productsData variable/state with data coming from the 'action'

    case ACTIONS.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }; //error returns the payload as a error message
  }
};

function getFiles() {
  // const files = [];
  const files = process.env.PUBLIC_URL + "/test-products";
  console.log(files);
}

const ProductSearchPage = () => {
  // const[filterMenuWidth, setFilterMenuWidth] = useState('3px');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterMenuWidth, setFilterMenuWidth] = useState(null);
  const searchFilterRef = useRef(null);

  // const { state } = useContext(Store); //copied from product-page and removed dispatch as changes wont occur here
  // const { cart } = state;

  //hooks
  const [{ loading, error, productsData }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    productsData: [],
  });
  // 1st param - {loading, error, products} -> created a set of states within an object
  // 2nd param, dispatch, is the different functions that will be passed through to manipulate the states in said object
  //useReducer 1st param - reducer -> reducer is the function created outside of the component.
  // useReducer 2nd param - {loading: true, error: '', products: [] -> these are the default or starting states of said object initialized in the first half

  // const [productsData, setProducts] = useState([]); // useState() returns an array that contains variable and a function that return values in that variable ; in this case products

  useEffect(() => {
    //this hook does something everytime something rerenders -> ex. use types something/ click someting
    const fetchData = async () => {
      //this is a async functinon that grabs products from backend

      dispatch({ type: ACTIONS.FETCH_REQUEST });

      try {
        const result = await axios.get("/api/productsData"); //sends ajax request to the address specified- api

        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: result.data,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS.FETCH_FAIL,
          payload: err.message,
        });
      }
    };

    // setProducts(result.data); // sets state for products by grabbing 'data' from backend with the 'result' function

    fetchData(); //now that we've define fetchData function we call it within the useEffect.
  }, []); // 2nd parameter - after the , - specifies when to to do it, in this case its after the first render and only do it once.
  // therefore useEffect will run this function after the 1st render of this component

  const changeIcon = (icon) =>
    icon.classList.toggle(<IoIosCloseCircleOutline />);

  return (
    <div className="product-search-container">
      <Helmet>
        <title>GRS Products</title>
      </Helmet>

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
            {loading ? (
              <LoadingPageAnimation />
            ) : error ? (
              <ErrorMessageBox variant="danger">{error}</ErrorMessageBox> // if there is an 'error' then show the message
            ) : (
              (getFiles(),
              // otherwise show products
              productsData.map((product) => (
                <ProductSearchItem
                  key={product.slug}
                  _id={product._id}
                  brand={product.Brand}
                  name={product.name}
                  slug={product.slug}
                  brandLogo={product.brandLogo}
                  image={product.image}
                  rating={product.rating}
                  price={product.price}
                  countInStock={product.countInStock}
                />
              )))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchPage;

// <ProductSearchItem />
// <ProductSearchItem />
