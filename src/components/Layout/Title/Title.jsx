import React from 'react'
import * as S from './Title.style'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetUserQuery } from '../../../redux/reducers/userApi'

export const Title = () => {

  const page = useLocation().pathname
  const info = useParams()
  const {data} =useGetUserQuery()

  const TitleText = () => {
    if (page === '/') return 'Объявления'
    if (page === '/profile/me') return `Здравствуйте, ${data && data.name}!`
    if (info.id && page === `/profile/${info.id}`) return 'Профиль продавца'
    return
  }

  return (
    <S.TitleField>
      <S.MainTitle>{TitleText()}</S.MainTitle>
    </S.TitleField>
  )
}
