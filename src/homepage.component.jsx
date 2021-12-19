import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (  //functional component because we dont really need to store any state
    <div className='homepage'>
        <div className='directory-menu'> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>EQUIPMENT</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Countertop</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Pots & Pans</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Pizza</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Baking</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Glass & Porcelain</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Serving Tools</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Smallware</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>


    </div>

);

export default HomePage;