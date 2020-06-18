import React from 'react'

import * as S from './styled'

function Navbar() {
    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.NavbarList>
                    <S.NavbarItem>
                        <S.NavbarItemLink>Minha conta</S.NavbarItemLink>
                    </S.NavbarItem>
                    <S.NavbarItem>
                        <S.NavbarItemLink>Pré-matrículas</S.NavbarItemLink>
                    </S.NavbarItem>
                    <S.NavbarItem>
                        <S.NavbarItemLink href='/' className='active'>
                            Bolsas favoritas
                        </S.NavbarItemLink>
                    </S.NavbarItem>
                </S.NavbarList>
            </S.Navbar>
        </S.NavbarWrapper>
    )
}

export default Navbar
