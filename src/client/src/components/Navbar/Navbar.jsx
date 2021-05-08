import React, { useContext, useState, useRef, useEffect } from 'react';
import sagimaLogo from '../../static/sagima/sagima.png';

import AuthContext from '../../context/auth-context';



import {
	Root,
	Logo,
	DesktopNavItems,
	ItemsList,
	ListItem,
	NavLink,
	NavButton,
	Bottom,
	MobileNavItems,
	Line,
	HamburgerMenu,
	MobileMenu,
	MobileNavLink,
} from './StyledComponents';

const Navbar = ({
	className, //
}) => {
	const { token, logout } = useContext(AuthContext);
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
		document.addEventListener("mousedown", handleClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleClick);
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
						{!token && (
							<ListItem>
								<NavLink title="login" to="/auth">
									INICIAR SESIÓN
								</NavLink>
							</ListItem>
						)}
						{token && (
							<>
								<ListItem>
									<NavLink title="projects" to="/projects">
										PROYECTOS
									</NavLink>
								</ListItem>
								<ListItem>
									<NavButton onClick={logout}>CERRAR SESIÓN</NavButton>
								</ListItem>
							</>
						)}
					</ItemsList>
				</DesktopNavItems>
				<MobileNavItems ref={node}>
					<HamburgerMenu open={open} onClick={() => setOpen(!open)}>
						<Line />
						<Line />
						<Line />
					</HamburgerMenu >
					<MobileMenu open={open}>
						<MobileNavLink title="home" to="/home">INICIO</MobileNavLink>
						<MobileNavLink title="services" to="/services">SERVICIOS</MobileNavLink>
						<MobileNavLink title="allies" to="/allies">ALIADOS</MobileNavLink>
						<MobileNavLink title="contact" to="/contact">CONTACTO</MobileNavLink>
						{!token && <MobileNavLink title="login" to="/auth">INICIAR SESIÓN</MobileNavLink>}
						{token && (
							<>
								<MobileNavLink title="projects" to="/projects">PROYECTOS</MobileNavLink>
								<NavButton onClick={logout}>CERRAR SESSIÓN</NavButton>
							</>
						)}
					</MobileMenu>
				</MobileNavItems>

			</Root>
			<Bottom />
		</>
	);
};

export default Navbar;
