import React from 'react';
import { CSSTransition } from "react-transition-group";
import Collapsible from 'react-collapsible';
import {Button} from 'shards-react'

import './categories-filter.styles.scss';

// create a button that has a collapsible layer where all the departments are.
// this will dropdown and show all categories

//when you click on a category then all products under that category will populate the product list component.
// furthermore, under the category menu, the children of that category will be available to further click.
// refer to https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/ for example

const CategoriesFilter = () => {

    return (
        <div className='categories-filter-container'>
            <Collapsible trigger={<Button className='categories-collapsible-btn' outline  theme="light">Categories</Button>} className='categories-collapsible'>
                
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio tempore esse aliquid, laudantium inventore nihil cumque illo quo repellat ipsa pariatur suscipit distinctio facere ipsum explicabo hic sit? Voluptatibus</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio tempore esse aliquid, laudantium inventore nihil cumque illo quo repellat ipsa pariatur suscipit distinctio facere ipsum explicabo hic sit? Voluptatibus</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio tempore esse aliquid, laudantium inventore nihil cumque illo quo repellat ipsa pariatur suscipit distinctio facere ipsum explicabo hic sit? Voluptatibus</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio tempore esse aliquid, laudantium inventore nihil cumque illo quo repellat ipsa pariatur suscipit distinctio facere ipsum explicabo hic sit? Voluptatibus</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio tempore esse aliquid, laudantium inventore nihil cumque illo quo repellat ipsa pariatur suscipit distinctio facere ipsum explicabo hic sit? Voluptatibus</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio tempore esse aliquid, laudantium inventore nihil cumque illo quo repellat ipsa pariatur suscipit distinctio facere ipsum explicabo hic sit? Voluptatibus</p>

            </Collapsible>
        </div>
        // <div className='categories-filter-container'>
        //     <button class="collapsible">Categories</button>
        //     <div class="content">
        //         <p></p>
        //     </div>
        // </div>
    )
}
export default CategoriesFilter;