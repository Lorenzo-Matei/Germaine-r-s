import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

import "./nav-dropdown-menu.styles.scss";
import { RiKnifeLine } from "react-icons/ri";
import {
  GiClothes,
  GiPorcelainVase,
  GiPizzaCutter,
  GiCookingGlove,
} from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { CgSmartHomeRefrigerator, CgDatabase } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { getError } from "../../util";

function NavDropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);

    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/products/categories");
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };

    fetchCategories();
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <a
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    // <div className="dropdown-container">
    <div
      className="dropdown"
      style={{ height: menuHeight + 25 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <strong>Categories</strong>
        {categories.map((category) => (
          <Link
            to={"/search?category=${category}"}
            // onClick={()}
          >
            <DropDownItem key={category}> </DropDownItem>
          </Link>
        ))}
      </CSSTransition>
    </div>

    // </div>
  );
}
export default NavDropdownMenu;
