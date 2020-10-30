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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Fishing Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={()=> props.changeMenu (1)}>Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Accessories</NavLink>
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

// import React from 'react';
// import items from './Items';

// export default function Header() {
//     return (
//         <>
//             <div className="page-header">
//                 <h1>Fishing Store</h1>
//             </div>

//             <div>
//                 {
//                     items.map(items => <div>
//                         <div>
//                             {items.name}
//                         </div>
//                     </div>)
//                 }


//             </div>


//             <div>
//                 <ul className="nav">
//                     <li className="nav-item">
//                         <a className="nav-link active" href="#">Items</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Accessories</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Shipping</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Submit</a>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );

// }


