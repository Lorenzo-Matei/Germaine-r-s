import React from "react";
import {FaSearch} from "react-icons/fa";

import './search-box.styles.scss';

 const SearchBox = () => {
    return (
        <div className="search-box-container">
            <div className="search-box">
                <input type="text" class="search-input" placeholder="Start Looking For Something!"/>
                <a class="search-btn" href="#">
                    <FaSearch className="fa-search"/>
                </a>
            </div>
        </div>

    );
 }

export default SearchBox;