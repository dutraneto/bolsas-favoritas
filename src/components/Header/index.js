import React from 'react'

import * as S from './styled'
import Logo from '../../static/images/logo-querobolsa.svg'

function Header() {
    // console.log(InfoCircle)
    return (
        <S.Header>
            <S.InfoWrapper>
                <S.Info>
                    <S.IconInfo />
                    <p>Como funciona</p>
                </S.Info>
                <S.Info>
                    <S.IconWhatsapp />
                    <span>
                        <p>0800 123 2222</p>
                        <p className='msg'>Envie mensagem ou lique</p>
                    </span>
                </S.Info>
            </S.InfoWrapper>
            <S.ImgWrapper>
                <img src={Logo} />
            </S.ImgWrapper>

            <S.UserWrapper>
                <p>John Doe</p>
                <S.IconUser />
            </S.UserWrapper>
        </S.Header>
    )
}

export default Header
