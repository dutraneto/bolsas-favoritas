import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './styled'

import Header from '../Header'
import Navbar from '../Navbar'
import Main from '../Main'
import Footer from '../Footer'

const Layout = (props) => {
    // Hooks here
    const [URL] = useState(`https://testapi.io/api/dutraneto/bolsas`)
    const [data, setData] = useState([])
    // Request endpoint
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getData = await axios.get(URL)
                const getArrayData = getData.data.map((course, index) => {
                    return course
                })
                setData(getArrayData)
            } catch (error) {
                console.log('Could Not get request found')
            }
        }
        fetchData()
    }, [URL])
    return (
        <S.LayoutWrapper>
            <Header />
            <Navbar />
            <Main data={data} />
            <Footer />
        </S.LayoutWrapper>
    )
}

export default Layout
