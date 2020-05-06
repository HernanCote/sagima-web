import React, { useContext } from 'react';
import sagimaLogo from '../../static/sagima/sagima.png';

import AuthContext from '../../context/auth-context';

import {
	Root,
	Logo,
	NavItems,
	ItemsList,
	ListItem,
	NavLink,
	NavButton,
	Bottom,
} from './StyledComponents';

const Navbar = ({ className }) => {
	const { token, logout } = useContext(AuthContext);
	return (
		<>
			<Root className={className}>
				<Logo>
					<img src={sagimaLogo} alt="logo" />
				</Logo>
				<NavItems>
					<ItemsList>
						<ListItem>
							<NavLink to="/home">Inicio</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to="/about">Nosotros</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to="/allies">Aliados</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to="/portfolio">Portafolio</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to="/contact">Contacto</NavLink>
						</ListItem>
						{!token && (
							<ListItem>
								<NavLink to="/auth">Iniciar Sesión</NavLink>
							</ListItem>
						)}
						{token && (
							<>
								<ListItem>
									<NavLink to="/projects">Proyectos</NavLink>
								</ListItem>
								<ListItem>
									<NavButton onClick={logout}>Cerrar Sesión</NavButton>
								</ListItem>
							</>
						)}
					</ItemsList>
				</NavItems>
			</Root>
			<Bottom />
		</>
	);
};

export default Navbar;
