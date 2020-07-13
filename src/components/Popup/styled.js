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
        margin-top: 1rem;
        padding: 2rem;
        min-height: 80vh;
        width: 50%;
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
    width: 100%;
    height: 100%;
    /* overflow: hidden; */

    h2 {
        margin-bottom: 0.3rem;
    }
`

export const ButtonClosePopup = styled.a`
    position: absolute;
    top: -46px;
    right: -10px;
`

export const FormWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
`

export const SelectorWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
`

export const Selector = styled.div`
    width: 50%;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    select {
        width: 100%;
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 5px;
    }

    [type='range'] {
        width: 100%;
        margin-top: 1.1rem;
    }
`

export const Label = styled.label`
    margin-bottom: 0.3rem;
    font-size: 12px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
`

export const CheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
`

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;

    label {
        margin-left: 0.3rem;
    }

    &:not(:last-child) {
        margin-right: 2rem;
    }
`

export const ResultWrapper = styled.div``

export const ResultFilterWrapper = styled.div``

export const ResultLabel = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        width: 50%;
        padding-bottom: 0.6rem;
        border-bottom: 2px solid #eee;

        &:not(:first-child) {
            text-align: end;
        }
    }

    select {
        margin-left: 3px;
        border: none;
        font-weight: bold;
        color: var(--blue-secondary);
    }
`

export const ResultList = styled.ul`
    height: 200px;
    overflow-y: scroll;
`

export const Result = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 2px solid #eee;
    margin-bottom: 1rem;
`

export const ResultProgram = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h5 {
        color: var(--blue-secondary);
        line-height: 1.6;
    }

    p {
        font-size: 12px;
    }
`

export const ResultImg = styled.img`
    width: 60px;
    height: auto;
    margin: 0 2rem;
`

export const ResultValue = styled.div`
    font-size: 14px;
    font-weight: 400;
    text-align: end;
    line-height: 1.6;

    span {
        color: var(--green);
        font-weight: bold;
    }
`

export const ButtonWrapper = styled.div`
    text-align: end;
    button {
        padding: 0.625rem 0.875rem;
        cursor: pointer;
        border: 1px solid var(--blue-primary);
        color: var(--blue-primary);
        background: none;
        border-radius: 4px;

        &:last-child {
            margin-left: 1rem;
        }

        &.mute {
            background: lightgrey;
            border: lightgrey;
            color: grey;
            cursor: not-allowed;
            &:focus {
                outline: none;
            }
        }
    }
`
