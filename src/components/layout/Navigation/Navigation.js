import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/auth';
import { connect } from 'react-redux';

const Navigation = ({ logout, isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleNavigation = () => setIsAuth(!isAuth);

  return (
    <Navbar color="dark" dark expand="md" className="navigation-bar">
      <NavbarBrand>
        <Link className="navigation-bar__link" to="/">
          StoreName&nbsp;<i className="fas fa-store"></i>
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link className="navigation-bar__link" to="/cart">
                Cart &nbsp;<i className="fas fa-shopping-cart"></i>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link className="navigation-bar__link" to="/create">
                Create &nbsp;<i className="far fa-plus-square"></i>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link className="navigation-bar__link" to="/orders">
                Orders &nbsp;<i className="far fa-plus-square"></i>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link className="navigation-bar__link" to="/account">
                Account &nbsp;<i className="fas fa-user"></i>
              </Link>
            </NavLink>
          </NavItem>
          {isAuthenticated ? (
            <Fragment>
              <NavItem>
                <NavLink>
                  <Link
                    to="/"
                    onClick={logout}
                    className="navigation-bar__link"
                  >
                    Log Out &nbsp;<i className="fas fa-user"></i>
                  </Link>
                </NavLink>
              </NavItem>
            </Fragment>
          ) : (
            <Fragment>
              <NavItem>
                <NavLink>
                  <Link className="navigation-bar__link" to="/login">
                    Login &nbsp;<i class="far fa-user-circle"></i>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="navigation-bar__link" to="/register">
                    Register &nbsp;<i class="far fa-user-circle"></i>
                  </Link>
                </NavLink>
              </NavItem>
            </Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navigation);
