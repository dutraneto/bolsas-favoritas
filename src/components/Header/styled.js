import styled from 'styled-components'
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'

export const Header = styled.header`
    max-width: 1440px;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: var(--blue-secondary);
        font-weight: 700;
        font-size: 14px;
        margin-left: 5px;
        margin-right: 10px;
        line-height: 1.6;
    }

    .msg {
        font-size: 12px;
        font-weight: 700;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(100% / 3);
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;

    &:first-child {
        padding-right: 30px;
        border-right: 2px solid #e6e6e6;
        margin-right: 30px;
    }
`

export const ImgWrapper = styled.figure`
    width: 125px;
    height: auto;
`
export const ImgLogo = styled.img`
    width: 100%;
    max-height: auto;
`

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% / 3);
    justify-content: flex-end;
`

export const IconInfo = styled(InfoCircle)`
    width: 30px;
    height: 30px;
    fill: var(--blue-secondary);
`
export const IconWhatsapp = styled(Whatsapp)`
    width: 30px;
    height: 30px;
    fill: var(--green);
`
export const IconUser = styled(UserCircle)`
    width: 30px;
    height: 30px;
    fill: var(--blue-secondary);
`
