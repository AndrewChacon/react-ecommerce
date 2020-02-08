import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">StoreName&nbsp;<i class="fas fa-store"></i></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Cart &nbsp;<i class="fas fa-shopping-cart"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Create &nbsp;<i class="far fa-plus-square"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Account &nbsp;<i class="fas fa-user"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log Out &nbsp;<i class="fas fa-sign-out-alt"></i></NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Log Out</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;