import React from 'react'

import * as S from './styled'

import Header from '../Header'
import Navbar from '../Navbar'

const Layout = (props) => {
    // Hooks here

    return (
        <S.LayoutWrapper>
            <Header />
            <Navbar />
        </S.LayoutWrapper>
    )
}

export default Layout
