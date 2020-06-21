import React from 'react'

import * as S from './styled'

import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = (props) => {
    // Hooks here

    return (
        <S.LayoutWrapper>
            <Header />
            <Navbar />
            <Footer />
        </S.LayoutWrapper>
    )
}

export default Layout
