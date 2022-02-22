import React from 'react';

import './search-bar.styles.scss'

const SearchBar = () => (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
            crossOrigin="anonymous"
        />
        <title>Smooth Expanding Search Bar</title>
        <div className="search-box">
            <input className="search-text" type="text" placeholder="Search Anything" />
            <a href="#" className="search-btn">
            <i className="fas fa-search" />
            </a>
        </div>
    </>

)

export default SearchBar;