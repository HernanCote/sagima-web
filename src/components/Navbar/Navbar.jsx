import React, { useState, useRef, useEffect } from 'react';
import sagimaLogo from '../../static/sagima/sagima.png';

import {
  Root,
  Logo,
  DesktopNavItems,
  ItemsList,
  ListItem,
  NavLink,
  Bottom,
  MobileNavItems,
  Line,
  HamburgerMenu,
  MobileMenu,
  MobileNavLink,
} from './StyledComponents';

const Navbar = ({
  className,
}) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      <Root className={className}>
        <Logo>
          <img src={sagimaLogo} alt="logo" />
        </Logo>
        <DesktopNavItems>
          <ItemsList>
            <ListItem>
              <NavLink title="home" to="/home">
                INICIO
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink title="services" to="/services">
                SERVICIOS
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink title="allies" to="/allies">
                ALIADOS
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink title="contact" to="/contact">
                CONTACTO
              </NavLink>
            </ListItem>
          </ItemsList>
        </DesktopNavItems>
        <MobileNavItems ref={node}>
          <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
            <Line />
            <Line />
            <Line />
          </HamburgerMenu>
          <MobileMenu open={open}>
            <MobileNavLink title="home" to="/home">INICIO</MobileNavLink>
            <MobileNavLink title="services" to="/services">SERVICIOS</MobileNavLink>
            <MobileNavLink title="allies" to="/allies">ALIADOS</MobileNavLink>
            <MobileNavLink title="contact" to="/contact">CONTACTO</MobileNavLink>
          </MobileMenu>
        </MobileNavItems>

      </Root>
      <Bottom />
    </>
  );
};

export default Navbar;
