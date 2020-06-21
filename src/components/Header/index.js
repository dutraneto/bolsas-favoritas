import React from 'react'

import * as S from './styled'
import * as Icon from '../Icons/styled'
import Logo from '../../static/images/logo-querobolsa.svg'

function Header() {
    const iconStyle = {
        color: '#007A8D',
        width: '30px',
        height: '30px',
    }
    return (
        <S.Header>
            <S.InfoWrapper>
                <S.Info>
                    <Icon.IconInfo iconStyle={iconStyle} />
                    <p>Como funciona</p>
                </S.Info>
                <S.Info>
                    <Icon.IconWhatsapp iconStyle={iconStyle} className='color-green' />
                    <span>
                        <p>0800 123 2222</p>
                        <p className='msg'>Envie mensagem ou lique</p>
                    </span>
                </S.Info>
            </S.InfoWrapper>
            <S.ImgWrapper>
                <img src={Logo} alt='Logo' />
            </S.ImgWrapper>

            <S.UserWrapper>
                <p>John Doe</p>
                <Icon.IconUser iconStyle={iconStyle} />
            </S.UserWrapper>
        </S.Header>
    )
}

export default Header
