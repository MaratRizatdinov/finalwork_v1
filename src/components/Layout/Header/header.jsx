import React, { useState } from 'react'
import * as S from './header.style'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeSubstring } from '../../../redux/reducers/searchSlice'
import { ModalAdv } from '../../ModalAdv/ModalAdv'
import { getAuthorization } from '../../../scripts/tools'


export const Header = () => {
  const navigate = useNavigate()
  const page = useLocation().pathname
  const dispatch = useDispatch()
  const [modal, setModal] = useState('unvisible')
  const isAuth = getAuthorization() || false
  
  const handleNewAdd = () => {
    isAuth
      ? setModal('visible')
      : confirm('Для подачи объявления необходима авторизоваться')
        ? navigate('/login')
        : null
  }

  const ButtonText = () => {
    if (page === '/') return 'Вход в личный кабинет'
    return 'Личный кабинет'
  }

  const HandleClick = () => {
    if (page === '/') dispatch(removeSubstring())
    if (page !== '/profile/me') navigate('/profile/me')
  }

  return (
    <S.Header>
      {modal === 'visible' ? <S.ProfileBackground /> : null}
      <ModalAdv modal={modal} setModal={setModal} role="newAdv" />
      <S.HeaderNav>
        {page === '/' ? null : (
          <S.HeaderButton onClick={() => handleNewAdd()}>
            Разместить объявление
          </S.HeaderButton>
        )}
        <S.HeaderButton onClick={() => HandleClick()}>
          {ButtonText()}
        </S.HeaderButton>
        
      </S.HeaderNav>
    </S.Header>
  )
}
