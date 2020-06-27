import styled from 'styled-components'

export const Header = styled.header`
    padding-top: 1rem;
    padding-bottom: 1rem;
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

    .color-green {
        fill: var(--green) !important;
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
