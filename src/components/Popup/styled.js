import styled from 'styled-components'

export const PopupWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    opacity: 1;
    visibility: hidden;
    transition: all 0.5s;

    @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.3);
    }

    .content {
        height: 75vh;
        width: 75%;
        background-color: #fff;
        box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        /* display: table; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
        transition: all 0.4s 0.2s;
    }

    &:target {
        opacity: 1;
        visibility: visible;
    }
    &:target .content {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`

export const PopupContentWrapper = styled.div`
    padding: 2rem;
    width: 100%;
    height: 100%;

    h2 {
        margin-bottom: 0.3rem;
    }
`

export const ButtonClosePopup = styled.a`
    position: absolute;
    top: -46px;
    right: -10px;
`
