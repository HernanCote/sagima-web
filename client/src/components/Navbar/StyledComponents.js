import styled, { css } from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

import { getMediaMinWidth } from '../../utils';
import theme from '../../theme';

const Root = styled.header`
	left: 0;
	top: 0;
	width: 100%;
	height: ${theme.heights.navbar};
	background: ${theme.colors.white};
	padding: 0 2rem;
	display: flex;
	align-items: center;
`;

const Bottom = styled.div`
	width: 100%;
	height: ${theme.heights.breakLine};
	background-image: linear-gradient(
		to right,
		${theme.colors.sagimaYellow},
		${theme.colors.sagimaOrange}
	);
`;

const Logo = styled.div`
	img {
		max-width: 13rem;
		max-height: 4rem;
		height: auto;
		width: auto;
	}
`;

const NavItems = styled.nav`
	margin: 0 1rem 0 auto;
`;

const ItemsList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	align-items: center;
`;

const ListItem = styled.li`
	margin: 0 0.5rem;
`;

const commonStyles = css`
	background: ${theme.colors.white};
	text-decoration: none;
	border: none;
	color: ${theme.colors.black};
	padding: 0.25rem 0.5rem;
	border-radius: 0.5rem;
	font-size: inherit;
	cursor: pointer;
	:active,
	:hover,
	&.active {
		color: ${theme.colors.white};
		background: ${theme.colors.sagimaYellow};
	}
`;

const NavLink = styled(BaseNavLink)`
	${commonStyles}
`;

const NavButton = styled.button`
	${commonStyles}
`;

const DesktopNavItems = styled(NavItems)`
	display: none;

	${getMediaMinWidth('md')} {
		display: block;
	}
`;

export {
	Root,
	Logo,
	NavItems,
	ItemsList,
	ListItem,
	NavLink,
	NavButton,
	Bottom,
	DesktopNavItems,
};
