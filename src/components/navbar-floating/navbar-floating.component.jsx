import React, {useState} from "react"; // useState is a Hook

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Card,
  CardBody,
  CardImg
} from "shards-react";

import {FaHome, FaShoppingBag, FaVideo, FaPhoneVolume, FaSearch, FaShoppingCart, FaUserAstronaut} from 'react-icons/fa';

import './navbar-floating.styles.scss'
import ExpandingSearchBox from "../expanding-search-box/expanding-search-box.component";
import Logo from "../../assets/images/misc/store_logo.png";
import NewArrivalItem from "../new-arrivals/new-arrivals-item.component";
import NavItemDropdown from "../NavItemDropdown/nav-item-dropdown.component";
import NavDropdownMenu from "../nav-dropdown-menu/nav-dropdown-menu.component";
import { Link } from "react-router-dom";

export default class NavBarFloating extends React.Component {
    

  constructor(props) {
    super(props);
    // fontawesome.library.add(faSearch, FontAwesomeIcon);


    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
        <div className="navbar-div">
          <div className="logo-img-container">
            <img src={Logo} className="m-auto logo-img"/>
          </div>

          <Card className='m-auto navbar-card' >
            <Navbar className="m-auto" type="dark" expand="md" sticky="top">
                
                
                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse open={this.state.collapseOpen} navbar>
                <Nav navbar>
                    <NavItem>
                      <Link to="/">
                        <button type="button" class="btn btn-outline-light btn-pill nav-btn"><FaHome className="button-icon"/>Home</button>
                      </Link>
                    </NavItem>

                    <NavItemDropdown>
                      <NavDropdownMenu/>
                    </NavItemDropdown>

                    <NavItem>
                      <Link to="/showroom">
                        <button type="button" class="btn btn-outline-light btn-pill nav-btn"><FaVideo className="button-icon"/>Showroom</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link to="/contact-us">
                        <button type="button" class="btn btn-outline-light btn-pill nav-btn"><FaPhoneVolume className="button-icon"/>Contact Us</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link to="sign-in">
                        <button type="button" class="btn btn-outline-light btn-pill nav-btn"><FaUserAstronaut className="button-icon"/>Sign In</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link to="/cart">
                        <button type="button" class="btn btn-outline-light btn-pill shopping-cart nav-btn"><FaShoppingCart className="button-icon"/></button>
                      </Link>
                    </NavItem>

                    <NavItem className="nav-item">
                      <Link to="/search">
                        <ExpandingSearchBox/>
                      </Link>
                    </NavItem>

                </Nav>

                </Collapse>
            </Navbar>
          </Card>
        </div>
    );
  }
}

