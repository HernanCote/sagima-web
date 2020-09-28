import React, { useContext } from 'react';
import sagimaLogo from '../../static/sagima/sagima.png';

import AuthContext from '../../context/auth-context';

import { Root, Logo, DesktopNavItems, ItemsList, ListItem, NavLink, NavButton, Bottom } from './StyledComponents';

const Navbar = ({
	className, //
}) => {
	const { token, logout } = useContext(AuthContext);
	const showFeature = process.env.NODE_ENV !== 'production';
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
								INICIO
							</NavLink>
						</ListItem>
						{showFeature && (
							<>
								<ListItem>
									<NavLink title="services" to="/services">
										SERVICIOS
									</NavLink>
								</ListItem>
								<ListItem>
									<NavLink title="alidos" to="/allies">
										ALIADOS
									</NavLink>
								</ListItem>
								<ListItem>
									<NavLink title="contacto" to="/contact">
										CONTACTO
									</NavLink>
								</ListItem>
							</>
						)}
						{!token && (
							<ListItem>
								<NavLink title="iniciar sesión" to="/auth">
									INICIAR SESIÓN
								</NavLink>
							</ListItem>
						)}
						{token && (
							<>
								<ListItem>
									<NavLink title="proyectos" to="/projects">
										PROYECTOS
									</NavLink>
								</ListItem>
								<ListItem>
									<NavButton onClick={logout}>CERRAR SESSIÓN</NavButton>
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
