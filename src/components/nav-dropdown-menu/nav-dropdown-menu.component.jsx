import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

import './nav-dropdown-menu.styles.scss'
import NavItemDropdown from "../NavItemDropdown/nav-item-dropdown.component";
import { RiKnifeLine } from "react-icons/ri";
import {GiClothes, GiPorcelainVase, GiPizzaCutter} from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { CgSmartHomeRefrigerator, CgDatabase } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";


import {FaHome, FaShoppingBag, FaVideo, FaPhoneVolume, FaSearch, FaShoppingCart, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa';


function NavDropdownMenu () {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownItem(props){
        return(
            <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }


    return(
        // <div className="dropdown-container">
            <div className="dropdown" style={{height: menuHeight + 25}} ref={dropdownRef}>
                <CSSTransition 
                    in={activeMenu === 'main'} 
                    unmountOnExit 
                    timeout={500} 
                    classNames="menu-primary"
                    onEnter={calcHeight}>

                    <div className="menu">
                        <DropDownItem
                            leftIcon={<CgDatabase/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Baking">
                            Baking
                        </DropDownItem> 

                        <DropDownItem
                            leftIcon={<GiClothes/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Clothing">
                            Clothing
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<MdOutlineMicrowave/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Countertop">

                            Countertop
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<BsCupStraw/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Disposable">
                            Disposable
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<CgSmartHomeRefrigerator/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Equipment">
                            Equipment
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<GiPorcelainVase/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="GlassAndPorcelain">
                            Glass and Porcelain
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<RiKnifeLine/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Knives">
                            Knives
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<GiPizzaCutter/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Pizza">
                            Pizza
                        </DropDownItem>

                        <DropDownItem
                            leftIcon={<ImSpoonKnife/>}
                            rightIcon={<FaRegArrowAltCircleRight/>}
                            goToMenu="Smallware">
                            Small Ware
                        </DropDownItem>
                    </div>
                </CSSTransition>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <CSSTransition 
                    in={activeMenu === 'Baking'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Trays
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Mats
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Pans
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Timers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Bowls
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Spoons
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Brushes
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Racks
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Sheets
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Baskets
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Molds
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cutters
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Pastry Tubes
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Rolling Pins
                        </DropDownItem>
                    </div>
                </CSSTransition>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <CSSTransition 
                    in={activeMenu === 'Clothing'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Aprons
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Jackets
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Hats
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Pants
                        </DropDownItem>

                    </div>
                </CSSTransition>
{/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

                <CSSTransition 
                    in={activeMenu === 'Countertop'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Food Warmers
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Blenders
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Microwaves
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Rice Cooker
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Toasters
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Slicers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Meat Grinders
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Food Cutters
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Immersion Blender
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Salad Dryer
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Scales
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Food Processor
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cutting Board
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Food Procesor
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cutting Board
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Coffee
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Kettle
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Panini Press
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Can Opener
                        </DropDownItem>
                    </div>
                </CSSTransition>            
                
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <CSSTransition 
                    in={activeMenu === 'Disposable'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cups
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Napkins
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Takeout
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Wax Paper
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Vacuum Bags
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Skewers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Fuel
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Saran Wrap
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Plastic Bag
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Butcher Paper
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Freezer Wrap
                        </DropDownItem>

                    </div>
                </CSSTransition>

{/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
                <CSSTransition 
                    in={activeMenu === 'Equipment'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Range
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Ovens
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Fryers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Charbroiler
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Flat Griddles
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Hotplates
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Stockpot
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Kettle
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Proofer
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Warmers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Coolers
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Freezers
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Prep Tables
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Ice Machines
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Dishwashers
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Display Cases
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Mixers
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Meat Grinders
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Meat Saw
                        </DropDownItem>

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Food Processor
                        </DropDownItem>

                    </div>
                </CSSTransition>

                <CSSTransition 
                    in={activeMenu === 'GlassAndPorcelain'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cups
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Mugs
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Teapots
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Dishes
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Bowls
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Coffee Jugs
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Sauce Container
                        </DropDownItem>

                    </div>
                </CSSTransition>
                <CSSTransition 
                    in={activeMenu === 'Knives'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Chef Knife
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Pairing Knife
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Slicers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Broad Knife
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cleavers
                        </DropDownItem>
                    </div>
                </CSSTransition>

                <CSSTransition 
                    in={activeMenu === 'Pizza'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cutters
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Peels
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Bags
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Stands
                        </DropDownItem>

                    </div>
                </CSSTransition>

                <CSSTransition 
                    in={activeMenu === 'Smallware'} 
                    unmountOnExit  
                    timeout={500} 
                    classNames="menu-secondary"
                    onEnter={calcHeight}>
                    
                    <div className="menu">
                        <DropDownItem leftIcon={<FaRegArrowAltCircleLeft/>} goToMenu="main"/>
                        
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Cutting Boards
                        </DropDownItem> 

                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Spatula
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Tenderizer
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Weights
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Strainers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Baskets
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Tongs
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Portioners
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Scrapers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Turners
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Thermometers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Peelers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Bowls
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Colinders
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Mashers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Ricers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Ladles
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Chafers
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Spoons
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Squeeze Bottles
                        </DropDownItem>
                        <DropDownItem
                            // leftIcon={<RiKnifeLine/>}
                            >
                            Condiments
                        </DropDownItem>
                    </div>
                </CSSTransition>


            </div>


        
        // </div>
    );



}export default NavDropdownMenu;