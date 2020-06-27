import styled from 'styled-components'

export const Footer = styled.footer`
    position: relative;
    width: 100%;
    height: 300px;
    background: var(--blue-secondary);
    bottom: 0;
    left: 0;
`

export const ContactWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    margin: 0 auto;
    background: var(--blue-secondary);
`

export const ContactItemWrapper = styled.li``

export const ContactItem = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
        color: #ffffff;
        margin-left: 10px;
    }
`

export const CreditsWrapper = styled.div`
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blue-primary);
`

export const Credits = styled.p`
    color: #ffffff;
    font-size: 18px;
`
