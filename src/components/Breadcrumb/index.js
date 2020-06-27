import React from 'react'

import * as S from './styled'

const Breadcrumb = (props) => {
    return (
        <S.BreadcrumbWrapper>
            <S.BreadcrumbList>
                <S.BreadcrumbItem>
                    <S.BreadcrumbItemLink href='/'>Home</S.BreadcrumbItemLink>
                </S.BreadcrumbItem>
                /
                <S.BreadcrumbItem>
                    <S.BreadcrumbItemLink href='/'>Minha conta</S.BreadcrumbItemLink>
                </S.BreadcrumbItem>
                /
                <S.BreadcrumbItem>
                    <S.BreadcrumbItemLink href='/'>Bolsas favoritas</S.BreadcrumbItemLink>
                </S.BreadcrumbItem>
            </S.BreadcrumbList>
        </S.BreadcrumbWrapper>
    )
}

export default Breadcrumb
