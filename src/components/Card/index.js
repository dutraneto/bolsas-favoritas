import React from 'react'

import * as S from './styled'

import { IconAdd } from '../Icons/styled'

const Card = (props) => {
    const iconStyle = {
        width: '60px',
        height: '60px',
        marginBottom: '1rem',
        cursor: 'pointer',
    }
    return (
        <S.CardWrapper>
            <S.CardAdd>
                <button>
                    <IconAdd iconStyle={iconStyle} title='Clique para adicionar bolsas' />
                </button>
                <div>
                    <h3>Adicionar bolsa</h3>
                    <p>Clique para adicionar bolsas e cursos de seu interesse</p>
                </div>
            </S.CardAdd>
        </S.CardWrapper>
    )
}

export default Card
