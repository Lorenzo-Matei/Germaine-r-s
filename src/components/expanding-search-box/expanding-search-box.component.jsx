import React from 'react';
import {FaSearch} from "react-icons/fa";
 
import './expanding-search-box.styles.scss'

const ExpandingSearchBox = () => {
    return (
        <div class="content">
            <div class="search">
                <input type="text" class="search__input" aria-label="search" placeholder="enter your search"/>
                <button class="search__submit" aria-label="submit search"><FaSearch className="fa-search"/></button>
            </div>
        </div>

    );
}

export default ExpandingSearchBox;