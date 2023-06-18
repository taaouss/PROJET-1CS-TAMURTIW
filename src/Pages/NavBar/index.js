import React from 'react';
import { FaBars } from 'react-icons/fa'

import { 
Nav,
NavbarContainer,
NavLogo,
MobileIcon,
NavMenu,
NavItem,
NavLinks,
NavBtn,
NavBtnLink} from './NavBarElements';

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        {/*<image src={logo} type='Image/png' />*/} TAMURT-IW
                  </NavLogo>
                    <MobileIcon onClick={toggle}>
                       <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                         <NavItem>
                                <NavLinks to="about">A Propos</NavLinks>
                          </NavItem>
                         <NavItem>
                            <NavLinks to='discover'>Nos Services</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to='services'>Meilleure Destination</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to='/Signin'>Sign Up</NavLinks>
                         </NavItem>
                 </NavMenu>
                     <NavBtn>
                        <NavBtnLink to='/Signin'> Sign In  </NavBtnLink>
                     </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar
