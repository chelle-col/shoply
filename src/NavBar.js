import React from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <NavbarBrand tag={Link} to='/'>Store</NavbarBrand>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to='/cart'>Cart</NavLink>
            </NavItem>
          </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;