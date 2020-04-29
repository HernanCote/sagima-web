import styled, { css } from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

import theme from '../../theme';

import { H1 } from '../Foundation';

const Root = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 5rem;
    background: ${theme.colors.white};
    padding: 0 1rem;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.26);
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
    :active, :hover, &.active {
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

export {
    Root,
    Logo,
    NavItems,
    ItemsList,
    ListItem,
    NavLink,
    NavButton,
};