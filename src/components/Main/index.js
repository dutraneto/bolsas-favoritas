import React from 'react'

import * as S from './styled'

import Breadcrumb from '../Breadcrumb'
import NavbarTerm from '../NavbarTerm'
import CardList from '../CardList'

const Main = (props) => {
    return (
        <S.Main className='container'>
            <Breadcrumb />
            <section>
                <h1>Bolsas Favoritas</h1>
                <p>
                    Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações
                    com as melhores ofertas disponíveis.
                </p>
            </section>
            <NavbarTerm />
            <CardList />
        </S.Main>
    )
}

export default Main
