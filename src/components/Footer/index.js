import React from 'react'

import * as S from './styled'
import * as Icon from '../Icons/styled'

const Footer = (props) => {
    const iconStyle = {
        color: '#FFFFFF',
        width: '60px',
        height: '60px',
    }
    return (
        <S.Footer>
            <S.ContactWrapper>
                <S.ContactItemWrapper>
                    <S.ContactItem href='/'>
                        <Icon.IconWhatsapp iconStyle={iconStyle} />
                        <div>
                            <p>0800-123-2222</p>
                            <p className='msg'>Seg - Sex 8h - 22h</p>
                        </div>
                    </S.ContactItem>
                </S.ContactItemWrapper>
                <S.ContactItemWrapper>
                    <S.ContactItem href='/'>
                        <Icon.IconWechat iconStyle={iconStyle} />
                        <div>
                            <p>Chat ao vivo</p>
                            <p className='msg'>Seg - Sex 8h - 22h</p>
                        </div>
                    </S.ContactItem>
                </S.ContactItemWrapper>
                <S.ContactItemWrapper>
                    <S.ContactItem href='/'>
                        <Icon.IconMail iconStyle={iconStyle} />
                        <div>
                            <p>Mande um email</p>
                            <p className='msg'>Respondemos rapidinho</p>
                        </div>
                    </S.ContactItem>
                </S.ContactItemWrapper>
                <S.ContactItemWrapper>
                    <S.ContactItem href='/'>
                        <Icon.IconInfo iconStyle={iconStyle} />
                        <div>
                            <p>Central de ajuda</p>
                            <p className='msg'>Encontre todas as repostas</p>
                        </div>
                    </S.ContactItem>
                </S.ContactItemWrapper>
            </S.ContactWrapper>
            <S.CreditsWrapper>
                <S.Credits>Feito com &hearts; pela quero educação</S.Credits>
            </S.CreditsWrapper>
        </S.Footer>
    )
}

export default Footer
