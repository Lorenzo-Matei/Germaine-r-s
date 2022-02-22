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
import SearchBox from "../search-box/search-box.component";
import ExpandingSearchBox from "../expanding-search-box/expanding-search-box.component";
import Logo from "../../assets/images/misc/store_logo.png";
import DropDownMenu from "../NavItemDropdown/nav-item-dropdown.component"
import NewArrivalItem from "../new-arrivals/new-arrivals-item.component";
import NavItemDropdown from "../NavItemDropdown/nav-item-dropdown.component";
import NavDropdownMenu from "../nav-dropdown-menu/nav-dropdown-menu.component";

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
          <img src={Logo} className="m-auto logo-img"/>

          <Card className='m-auto navbar-card' >
            <Navbar className="m-auto" type="dark" theme="secondary" expand="md" sticky="top">
                
                
                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse open={this.state.collapseOpen} navbar>
                <Nav navbar>

                    <NavItem>
                      <button type="button" class="btn btn-outline-light btn-pill"><FaHome className="button-icon"/>Home</button>
                    </NavItem>

                    {/* <NavItem>
                      <button type="button" href="#" class="btn btn-outline-light btn-pill"><FaShoppingBag className="button-icon"/>
                        Shop Categories
                      </button>
                    </NavItem> */}

                    <NavItemDropdown>
                      <NavDropdownMenu/>
                    </NavItemDropdown>

                    <NavItem>
                      <button type="button" class="btn btn-outline-light btn-pill"><FaVideo className="button-icon"/>Showroom</button>
                    </NavItem>

                    <NavItem>
                      <button type="button" class="btn btn-outline-light btn-pill"><FaPhoneVolume className="button-icon"/>Contact Us</button>
                    </NavItem>

                    <NavItem>
                      <button type="button" class="btn btn-outline-light btn-pill"><FaUserAstronaut className="button-icon"/>Sign In</button>
                    </NavItem>

                    <NavItem>
                      <button type="button" class="btn btn-outline-light btn-pill shopping-cart"><FaShoppingCart className="button-icon"/></button>
                    </NavItem>

                    <NavItem className="nav-item">
                      <ExpandingSearchBox/>
                    </NavItem>

                </Nav>

                </Collapse>
            </Navbar>
          </Card>
        </div>
    );
  }
}

