import React, { useContext } from 'react';
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
} from './StyledComponents';

const Navbar = ({
	className, //
}) => {
	const { token, logout } = useContext(AuthContext);
	return (
		<>
			<Root className={className}>
				<Logo>
					<img src={sagimaLogo} alt="logo" />
				</Logo>
				<DesktopNavItems>
					<ItemsList>
						<ListItem>
							<NavLink title="inicio" to="/home">
								Inicio
							</NavLink>
						</ListItem>
						<ListItem>
							<NavLink title="nosotros" to="/about">
								Nosotros
							</NavLink>
						</ListItem>
						<ListItem>
							<NavLink title="alidos" to="/allies">
								Aliados
							</NavLink>
						</ListItem>
						<ListItem>
							<NavLink title="portafolio" to="/portfolio">
								Portafolio
							</NavLink>
						</ListItem>
						<ListItem>
							<NavLink title="contacto" to="/contact">
								Contacto
							</NavLink>
						</ListItem>
						{!token && (
							<ListItem>
								<NavLink title="iniciar sesión" to="/auth">
									Iniciar Sesión
								</NavLink>
							</ListItem>
						)}
						{token && (
							<>
								<ListItem>
									<NavLink title="proyectos" to="/projects">
										Proyectos
									</NavLink>
								</ListItem>
								<ListItem>
									<NavButton onClick={logout}>Cerrar Sesión</NavButton>
								</ListItem>
							</>
						)}
					</ItemsList>
				</DesktopNavItems>
			</Root>
			<Bottom />
		</>
	);
};

export default Navbar;
