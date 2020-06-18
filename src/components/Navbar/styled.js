import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    background: var(--blue-primary);
`

export const Navbar = styled.nav`
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
`

export const NavbarList = styled.ul`
    display: flex;
    justify-items: flex-start;
`

export const NavbarItem = styled.li`
    color: #fff;
    font-size: 1rem;
    height: 100%;
    font-weight: bold;
    cursor: pointer;

    .active {
        background-color: var(--blue-secondary);
    }
`

export const NavbarItemLink = styled.a`
    display: inline-block;
    padding: 1rem 2.25rem;
    transition: background-color 0.3s;
    &:hover {
        background-color: var(--blue-secondary);
    }
`
