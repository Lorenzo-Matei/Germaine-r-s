import React from "react";
import { Link } from "react-router-dom"; // adding the Link Tag will ensure that the page isnt refreshed and thusly loads quicker

import { Rating } from "react-simple-star-rating";
import { Badge, Button, Card, CardBody } from "shards-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import KitchenKnife from "../../assets/images/product-search/kitchen-knife.png";
import Logo from "../../assets/images/product-search/wusthof.png";
import Logo2 from "../../assets/images/product-search/wusthof2.png";

import "./product-search-item.styles.scss";

const ProductSearchItem = (props) => {
  // function ProductSearchItem(props) {
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

          {/* <p className="p-size-text">Size</p>
          <div className="product-size-variants-container">
            <Badge className="product-card-size-badge" theme="light">
              12"
            </Badge>
            <Badge className="product-card-size-badge" theme="light">
              16"
            </Badge>
            <Badge className="product-card-size-badge" theme="light">
              20"
            </Badge>
          </div> */}

          <div className="cart-price-container">
            <Badge
              className="product-listing-price-badge"
              outline
              theme="light"
            >
              {"$ " + props.price}
            </Badge>

            <Button className="product-listing-cart-button" pill theme="light">
              <MdOutlineAddShoppingCart className="product-add-cart-icon" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const ProductSearchItem = () => {
//     return (

//         <div className='search-item-card'>
//             <div className='search-item-cardbody'>
//                 <div className='leftside-product-item'>
//                     <img className='product-card-image' src={KitchenKnife} alt="knife"/>
//                     <img className='corner-product-card-logo' src={Logo} alt="logo"/>
//                     <Badge className='product-card-badge' outline theme="success">NEW!</Badge>
//                 </div>

//                 <div className='rightside-product-item'>
//                     {/* <img className='floor-product-card-logo' src={Logo2} alt="logo"/> */}
//                     <p className='search-product-title'>12" inch Chef's Knife Long Black Handle</p>

//                     <Rating m-auto style={{margin:"0 10px"}} size={15} readonly='true' ratingValue={80} className='search-product-ratings'></Rating>

//                     <p className='p-size-text'>Size</p>
//                     <div className='product-size-variants-container'>
//                         <Badge className='product-card-size-badge'  theme="light">12"</Badge>
//                         {/* <Badge className='product-card-size-badge' outline theme="info">14"</Badge> */}
//                         <Badge className='product-card-size-badge'  theme="light">16"</Badge>
//                         <Badge className='product-card-size-badge'  theme="light">20"</Badge>
//                     </div>

//                     <div className='cart-price-container'>
//                         <Button className='product-listing-cart-button' pill theme="light"><MdOutlineAddShoppingCart className='product-add-cart-icon'/></Button>

//                         <Badge className='product-listing-price-badge' outline theme="light">$ 225.65</Badge>
//                     </div>
//                 </div>

//             </div>
//         </div>

//     )
// }

export default ProductSearchItem;
