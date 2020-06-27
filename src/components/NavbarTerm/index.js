import React from 'react'

import * as S from './styled'

const NavbarTerm = (props) => {
    return (
        <S.NavbarTermWrapper>
            <S.NavbarTermList>
                <S.NavbarTermItem>
                    <S.NavbarTermItemLink href='/'>Todos os semestres</S.NavbarTermItemLink>
                </S.NavbarTermItem>
                <S.NavbarTermItem>
                    <S.NavbarTermItemLink href='/'>2º Semestre de 2019</S.NavbarTermItemLink>
                </S.NavbarTermItem>
                <S.NavbarTermItem>
                    <S.NavbarTermItemLink href='/'>1º Semestre de 2019</S.NavbarTermItemLink>
                </S.NavbarTermItem>
            </S.NavbarTermList>
        </S.NavbarTermWrapper>
    )
}

export default NavbarTerm
