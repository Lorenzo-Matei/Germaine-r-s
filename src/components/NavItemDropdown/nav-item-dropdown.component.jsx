import React, { useState } from "react";
import {FaHome, FaShoppingBag, FaVideo, FaPhoneVolume, FaSearch, FaShoppingCart, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa';
import { RiKnifeLine } from "react-icons/ri";


import './nav-item-dropdown.styles.scss';

function NavItemDropdown (props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item-and-dropdown">
            <a className="dropdown-icon-button" onClick={() => setOpen(!open)}>
                <button type="button" class="btn btn-outline-light btn-pill"><FaShoppingBag className="button-icon"/>Shop</button>
            </a>

            {open && props.children}
        </li>


    );






// function DropDownMenu() {
//     const [open, setOpen] = useState(false);

//     function DropdownItem(props){
//         return(
//             <a href="#" className="menu-item">
//                 <span className="icon-button">{props.leftIcon}</span>

//                 {props.children}

//                 <span className="icon-right">{props.rightIcon}</span>
//             </a>

//         );
//     }

//     return (
//         <div className="dropdown"> {/* leftIcon is the category icon*/}
//             <DropdownItem
//                 leftIcon={<RiKnifeLine/>} 
//                 rightIcon={<FaRegArrowAltCircleLeft/>}>
//             </DropdownItem> 


//         </div>


//     )


} export default NavItemDropdown;