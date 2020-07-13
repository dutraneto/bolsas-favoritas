import React from 'react'

import * as S from './styled'

import Breadcrumb from '../Breadcrumb'
import NavbarTerm from '../NavbarTerm'
import CardList from '../CardList'
import Popup from '../Popup'

const Main = ({ data }) => {
    console.log(data)
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
            <Popup data={data} />
        </S.Main>
    )
}

export default Main
