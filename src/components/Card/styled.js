import styled from 'styled-components'

export const CardWrapper = styled.div`
    width: 20%;
    height: 400px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 2rem;

    h3 {
        line-height: 2rem;
    }
`

export const CardAdd = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    button {
        background: transparent;
        border: none;
    }
`
