import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (


      <Navbar color="dark" dark expand="md" className="navigation-bar">
        <NavbarBrand>
          <Link className="navigation-bar__link" to="/">StoreName&nbsp;<i className="fas fa-store"></i></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="navigation-bar__link" to="/cart">Cart &nbsp;<i className="fas fa-shopping-cart"></i></Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navigation-bar__link" to="/create">Create &nbsp;<i className="far fa-plus-square"></i></Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navigation-bar__link" to="/account">Account &nbsp;<i className="fas fa-user"></i></Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navigation-bar__link" to="/login">Login &nbsp;<i class="far fa-user-circle"></i></Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navigation-bar__link" to="/register">Register &nbsp;<i class="far fa-user-circle"></i></Link>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/">Log Out &nbsp;<i className="fas fa-sign-out-alt"></i></NavLink>
            </NavItem> */}
          </Nav>
          {/* <NavbarText>
          <Link className="navigation-bar__link" to="/register">Register &nbsp;<i class="far fa-user-circle"></i></Link>
          </NavbarText> */}
        </Collapse>
      </Navbar>

  );
}

export default Navigation;