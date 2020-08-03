import React from 'react'

import * as S from './styled'
import { IconClose } from '../Icons/styled'

const Popup = ({ data }) => {
    const cities = [...new Set(data.map((item, index) => item.campus.city))].sort()
    const courses = [...new Set(data.map((item, index) => item.course.name))].sort()

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
                    <S.FormWrapper>
                        <form action=''>
                            <S.SelectorWrapper>
                                <S.Selector>
                                    <S.Label htmlFor='selectCity'>Selecione sua cidade</S.Label>
                                    <select name='' id='selectCity'>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </S.Selector>

                                <S.Selector>
                                    <S.Label htmlFor='selectCourse'>
                                        Selecione o curso de sua preferência
                                    </S.Label>
                                    <select name='' id='selectCourse'>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </select>
                                </S.Selector>
                            </S.SelectorWrapper>
                            <S.SelectorWrapper>
                                <S.Selector>
                                    <S.Label>Como você quer estudar?</S.Label>
                                    <S.CheckboxWrapper>
                                        <S.Checkbox>
                                            <input type='checkbox' />
                                            <label htmlFor=''>Presencial</label>
                                        </S.Checkbox>
                                        <S.Checkbox>
                                            <input type='checkbox' />
                                            <label>A distância</label>
                                        </S.Checkbox>
                                    </S.CheckboxWrapper>
                                </S.Selector>
                                <S.Selector>
                                    <S.Label>Até quanto você pode pagar?</S.Label>
                                    <p>$ 10000</p>
                                    <input type='range' name='' id='' />
                                </S.Selector>
                            </S.SelectorWrapper>
                        </form>
                    </S.FormWrapper>
                    <S.ResultWrapper>
                        <S.ResultFilterWrapper>
                            <S.ResultLabel>
                                <div>
                                    <S.Label htmlFor=''>Resultado:</S.Label>
                                </div>
                                <div>
                                    <S.Label>Ordenar por</S.Label>
                                    <select name='' id=''>
                                        <option value='' defaultValue>
                                            Nome da faculdade
                                        </option>
                                        <option value=''>1</option>
                                        <option value=''>1</option>
                                        <option value=''>1</option>
                                    </select>
                                </div>
                            </S.ResultLabel>
                        </S.ResultFilterWrapper>
                        <S.ResultList>
                            {data.map((item, index) => (
                                <S.Result key={index}>
                                    {console.log(item.university.logo_url)}
                                    <S.ResultProgram>
                                        <input type='checkbox' name='' id='' />
                                        <S.ResultImg src={item.university.logo_url} alt='' />
                                        <div>
                                            <h5>{item.course.name}</h5>
                                            <p>{item.course.level}</p>
                                        </div>
                                    </S.ResultProgram>
                                    <S.ResultValue>
                                        <p>
                                            Bolsa de <span>{item.discount_percentage}%</span>
                                        </p>
                                        <p>
                                            <span>R$ {item.price_with_discount}/mês</span>
                                        </p>
                                    </S.ResultValue>
                                </S.Result>
                            ))}
                        </S.ResultList>
                    </S.ResultWrapper>
                    <S.ButtonWrapper>
                        <button>Cancelar</button>
                        <button className='mute'>Adicionar bolsa(s)</button>
                    </S.ButtonWrapper>
                </S.PopupContentWrapper>
            </div>
        </S.PopupWrapper>
    )
}

export default Popup
