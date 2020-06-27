import styled from 'styled-components'

export const BreadcrumbWrapper = styled.div`
    margin-bottom: 2rem;
`

export const BreadcrumbList = styled.ul`
    display: flex;
    align-items: baseline;
`

export const BreadcrumbItem = styled.li`
    &:not(:first-child) {
        margin-left: 0.5rem;
    }
    &:not(:last-child) {
        font-weight: bold;
        color: var(--blue-secondary);
    }
    margin-right: 0.5rem;
    font-size: 0.75rem;
`

export const BreadcrumbItemLink = styled.a``
