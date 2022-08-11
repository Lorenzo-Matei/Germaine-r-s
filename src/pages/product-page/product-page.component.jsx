import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { Carousel } from "react-carousel-minimal";
// import { Carousel } from "react-responsive-carousel";

import { Carousel } from "react-carousel-minimal";

import "./product-page.styles.scss";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  FormSelect,
  Button,
  Badge,
  Alert,
} from "shards-react";
import { Rating } from "react-simple-star-rating";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Collapsible from "react-collapsible";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";
import { getError } from "../../util";
import { Store } from "../../Store";

const ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  //-------- // originally from the products-search-page //----
  //state is the starting or default value of the state.  2nd param, action , is the action or function that changes the current state.
  switch (action.type) {
    case ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true }; // ...state returns the previous state values. loading: true -> shows a loading message or animation

    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, productData: action.payload }; // 3rd param -  productsData: action.payload -> loads the productsData variable/state with data coming from the 'action'

    case ACTIONS.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }; //error returns the payload as a error message
  }
};

function ProductPage() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      // caption: `<div>
      //             San Francisco
      //             <br/>
      //             Next line
      //           </div>`,
    },

    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const [quantity, setQuantity] = useState(1);
  const changeQuantity = (event) => {
    setQuantity(event.target.quantity);
  };

  const navigate = useNavigate();
  const params = useParams(); //this enables you to grab the productsData params or variables
  const { slug } = params; //this gets the slug variable from productData

  ////////////////////////////////////   copied from products-page-component  //////////////////////////
  const [{ loading, error, productData }, dispatch] = useReducer(reducer, {
    //changed productsData to productData
    loading: true,
    error: "",
    productData: [],
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
        const result = await axios.get(`/api/productsData/slug/${slug}`); //sends ajax request to the address specified- api

        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: result.data,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS.FETCH_FAIL,
          payload: getError(err),
        });
      }
    };

    // setProducts(result.data); // sets state for products by grabbing 'data' from backend with the 'result' function

    fetchData(); //now that we've define fetchData function we call it within the useEffect.
  }, [slug]); // 2nd parameter - after the , - specifies when to rerender/update it, in this case its when the user selects another product which changes the slug
  // therefore useEffect will run this function after the 1st render of this component

  const { state, dispatch: ctxDispatch } = useContext(Store); //dispatch: is renamed to ctxdispatch to distinguish it from the dispatch in the reducer
  const { cart } = state;

  const addToCartHandler = async () => {
    const itemExists = cart.cartItems.find((x) => x._id === productData._id); //checks if current product exists in the cart
    const quantity = itemExists ? itemExists.quantity + 1 : 1; // '?' if itemExists then increase quantity +1 ':' otherwise make quantity 1
    const { data } = await axios.get(`/api/productsData/${productData._id}`); //ajax request to pull data on this item.

    // console.log("const data on product page: ", data);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock. Call to order or reserve!");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...productData, quantity }, //this is the item and 1 amount is added to cart
    });

    navigate("/cart");
  };

  ////////////////////////////////////   copied from products-page-component  //////////////////////////

  return loading ? (
    // <div>Please Wait, Loading...</div>
    <div style={{ margin: "auto", width: "0%" }}>
      <LoadingPageAnimation />
    </div>
  ) : error ? (
    <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
  ) : (
    <div className="product-page-container">
      <Helmet>
        <title>{productData.name}</title>
      </Helmet>

      <div className="product-page-product-display-container">
        <div className="product-page-carousel-container">
          <Carousel
            className="product-page-carousel"
            data={data}
            time={200000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              maxHeight: "500px",
              margin: "0px",
            }}
          />
        </div>

        <div className="item-info-card" id="purchase-card">
          <h1 id="product-page-title">{productData.name}</h1>
          {/* 
          <h2 id="product-page-product-description">
            {productData.description}
          </h2> */}

          <div id="product-page-ratings-container">
            <Rating
              id="product-page-rating-star"
              allowHalfIcon="true"
              showTooltip="true"
              readonly="true"
              emptyColor="#ddd"
              ratingValue={87}
              // emptyIcon={{ border: "solid 1px #fff" }}
              // emptyStyle={{ border: "solid 1px #fff" }}
            />
          </div>
          {productData.countInStock === 0 ? (
            <Badge outline theme="danger" id="product-page-stock-indicator">
              Out of Stock
            </Badge>
          ) : (
            <Badge outline theme="success" id="product-page-stock-indicator">
              In Stock
            </Badge>
          )}

          <h5 id="variant-title">Variant</h5>
          <FormSelect size="sm" id="product-page-formselect">
            <option value="first">This is the first Variant</option>
            <option value="second">This is the second Variant.</option>
            <option value="third">This is the third variant.</option>
          </FormSelect>

          <div id="product-page-quantity-container">
            <InputGroup className="mb-2" id="product-page-quantity-inputgroup">
              <InputGroupAddon className="quantity-input" type="prepend">
                <InputGroupText className="quantity-input">
                  Quantity
                </InputGroupText>
              </InputGroupAddon>
              <FormInput
                type="number"
                className="quantity-input"
                value={quantity}
                onChange={changeQuantity}
                min="1"
                max="99"
              ></FormInput>
            </InputGroup>
          </div>

          {/* <Badge outline theme="light" id="product-page-price">
            $ {productData.price}
          </Badge> */}

          <h3 id="product-page-price">$ {productData.price}</h3>

          <Button
            id="product-page-cart-btn"
            theme="light"
            onClick={addToCartHandler}
          >
            <MdOutlineAddShoppingCart
              className="product-add-cart-icon"
              style={{ width: "2em" }}
            />
            Add To Cart
          </Button>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////// */}

      <div className="product-page-technicals-container">
        <Collapsible
          className="product-page-collapsible"
          open="true"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Product Description
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            {productData.description}
          </div>
        </Collapsible>

        <Collapsible
          className="product-page-collapsible"
          // open="true"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Technical Information
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            officiis dolorem, fugiat nihil eligendi at? Cupiditate architecto
            quos ducimus qui est sed dolor reiciendis, dignissimos voluptatibus
            eum doloribus molestias autem. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Similique officiis dolorem, fugiat
            nihil eligendi at? Cupiditate architecto quos ducimus qui est sed
            dolor reiciendis, dignissimos voluptatibus eum doloribus molestias
            autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Similique officiis dolorem, fugiat nihil eligendi at? Cupiditate
            architecto quos ducimus qui est sed dolor reiciendis, dignissimos
            voluptatibus eum doloribus molestias autem.
          </div>
        </Collapsible>
        {/* </div> */}

        <Collapsible
          className="product-page-collapsible"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Warranty
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            officiis dolorem, fugiat nihil eligendi at? Cupiditate architecto
            quos ducimus qui est sed dolor reiciendis, dignissimos voluptatibus
            eum doloribus molestias autem.
          </div>
        </Collapsible>

        <Collapsible
          className="product-page-collapsible"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Fuel Information
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            officiis dolorem, fugiat nihil eligendi at? Cupiditate architecto
            quos ducimus qui est sed dolor reiciendis, dignissimos voluptatibus
            eum doloribus molestias autem.
          </div>
        </Collapsible>

        <Collapsible
          className="product-page-collapsible"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Additional Information
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            officiis dolorem, fugiat nihil eligendi at? Cupiditate architecto
            quos ducimus qui est sed dolor reiciendis, dignissimos voluptatibus
            eum doloribus molestias autem.
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

export default ProductPage;
