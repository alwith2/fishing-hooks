import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

// stateful component
const Header = (props) => {

    // setting state using 
    // isOpen initializes as false
  const [isOpen, setIsOpen] = useState(false);

    // toggle calls function to switch isOpen state
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Fishing Store</NavbarBrand>
        {/* calls function to switch state */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                {/* button sets state with click */}
              <NavLink onClick={()=> props.changeMenu (0)}>Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=> props.changeMenu (1)}>Accessories</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cart
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Cart
                </DropdownItem>
                <DropdownItem>
                  Checkout
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

