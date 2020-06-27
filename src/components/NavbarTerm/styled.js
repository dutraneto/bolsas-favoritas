import styled from 'styled-components'

export const NavbarTermWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`

export const NavbarTermList = styled.ul`
    display: flex;
    border: 1px solid var(--blue-secondary);
    border-radius: 8px;
    overflow: hidden;
`

export const NavbarTermItem = styled.li`
    font-weight: 400;
    &:not(:last-child) {
        border-right: 1px solid var(--blue-secondary);
    }

    &:first-child {
        background: var(--blue-secondary);
        color: #fff;
    }
`
export const NavbarTermItemLink = styled.a`
    display: inline-block;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    &:hover {
        background-color: var(--blue-secondary);
        color: #FFF;
`
