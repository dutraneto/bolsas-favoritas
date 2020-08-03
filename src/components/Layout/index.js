import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v1 as uuidv1 } from 'uuid'

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
                const getArrayData = getData.data.map((course) => {
                    course.id = uuidv1()
                    return course
                })
                setData(getArrayData)
            } catch (error) {
                console.log('Could not get requested data')
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
