import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <Link tag={Link} to='/'>Store</Link>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link tag={Link} to='/cart'>Cart</Link>
                </NavItem>
            </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;