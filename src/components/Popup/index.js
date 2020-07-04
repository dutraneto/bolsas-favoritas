import React from 'react'

import * as S from './styled'
import { IconClose } from '../Icons/styled'

const Popup = (props) => {
    return (
        <S.PopupWrapper id='popup'>
            <div className='content'>
                <S.ButtonClosePopup href='/'>
                    <IconClose />
                </S.ButtonClosePopup>
                <S.PopupContentWrapper>
                    <div>
                        <h2>Adicionar bolsa</h2>
                        <p>Filtre e adicione bolsas do seu interesse.</p>
                    </div>
                    <div>
                        <form action=''>
                            <div>
                                <div>
                                    <label htmlFor=''>Selecione sua cidade</label>
                                    <select name='' id=''>
                                        <option value=''>1</option>
                                        <option value=''>2</option>
                                        <option value=''>3</option>
                                        <option value=''>4</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor=''>Selecione o curso de sua preferência</label>
                                    <select name='' id=''>
                                        <option value=''>1</option>
                                        <option value=''>2</option>
                                        <option value=''>3</option>
                                        <option value=''>4</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </S.PopupContentWrapper>
            </div>
        </S.PopupWrapper>
    )
}

export default Popup
