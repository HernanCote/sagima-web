import styled, { css } from 'styled-components/macro';
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
    text-decoration: none;
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

const Line = styled.div`
	width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
`;

const MobileNavItems = styled.div`
	position: relative;
	cursor: pointer;
	display: block;
	margin-left: auto;

	${getMediaMinWidth('md')} {
		display: none;
	}
`;

const HamburgerMenu = styled.div`
	width: 2rem;
	height: 2rem;
	z-index: 20;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;

	${Line} {
		background-color: ${({ open }) => (open ? theme.colors.sagimaLightGrey : theme.colors.sagimaYellow)};

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
			width: ${({ open }) => (open ? '2.05rem' : '2rem')};
		}
		&:nth-child(2) {
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
			width: ${({ open }) => (open ? '2.05rem' : '2rem')};
		}
	}
`;

const MobileMenu = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 19;
	right: -2rem;
	top: calc(${theme.heights.navbar} - 2rem);
	width: 20rem;
	background-color: ${theme.colors.white};
	transition: all 0.2s linear;
	height: ${({ open }) => (open ? 'auto' : '0')}
`;

const MobileNavLink = styled(BaseNavLink)`
	${commonStyles};
	text-align: center;
	padding: 0.75rem 0;
	border-radius: 0;
	font-size: 1.25rem;
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
  MobileNavItems,
  HamburgerMenu,
  Line,
  MobileMenu,
  MobileNavLink,
};
