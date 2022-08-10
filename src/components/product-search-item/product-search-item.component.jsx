import React, { useContext } from "react";
import { Link } from "react-router-dom"; // adding the Link Tag will ensure that the page isnt refreshed and thusly loads quicker

import { Rating } from "react-simple-star-rating";
import { Badge, Button } from "shards-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
// import Skeleton from "react-loading-skeleton";

// import KitchenKnife from "../../assets/images/product-search/kitchen-knife.png";
// import Logo from "../../assets/images/product-search/wusthof.png";
// import Logo2 from "../../assets/images/product-search/wusthof2.png";

import "./product-search-item.styles.scss";
import { Store } from "../../Store";
import axios from "axios";

// const ProductSearchItem = (props) => {
function ProductSearchItem(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    //copied from product-page.jsx add to cart button
    // console.log("const data on items: ", props);
    const itemExists = cartItems.find((x) => x._id === props._id); //checks if the product exists
    const quantity = itemExists ? itemExists.quantity + 1 : 1; // if item exists then it checks the quantity of the existing product and adds one
    const { data } = await axios.get(`/api/productsData/${item._id}`); // this stores the products info into a data object

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <div className="search-item-card">
      <div className="search-item-cardbody">
        <div className="leftside-product-item">
          {/* <a> creates a link over the image that is clickable */}
          {/* The href is site directory + the slug from data */}
          <Link to={`/products/${props.slug}`}>
            <img
              className="product-card-image"
              src={props.image}
              alt={props.name}
            />
          </Link>
          <img
            className="corner-product-card-logo"
            src={props.brandLogo}
            alt={props.brand}
          />
          <Badge className="product-card-badge" outline theme="success">
            NEW!
          </Badge>
        </div>

        <div className="rightside-product-item">
          {/* <img className='floor-product-card-logo' src={Logo2} alt="logo"/> */}

          <Link to={`/products/${props.slug}`}>
            <p className="search-product-title">{props.name}</p>

            <Rating
              m-auto
              style={{ margin: "0 10px" }}
              size={15}
              readonly="true"
              ratingValue={props.rating * 20}
              className="search-product-ratings"
            />
          </Link>

          <div className="cart-price-container">
            <Badge
              className="product-listing-price-badge"
              outline
              theme="light"
            >
              {"$ " + props.price}
            </Badge>
            {props.countInStock === 0 ? (
              <Button
                disabled
                className="product-listing-cart-button-no-stock"
                pill
                theme="danger"
              >
                Out of Stock
              </Button>
            ) : (
              <Button
                className="product-listing-cart-button"
                onClick={() => addToCartHandler(props)}
                pill
                theme="light"
              >
                <MdOutlineAddShoppingCart className="product-add-cart-icon" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSearchItem;
