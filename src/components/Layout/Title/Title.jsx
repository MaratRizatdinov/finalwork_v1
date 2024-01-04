import React from 'react'
import * as S from './Title.style'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Title = () => {
  const page = useLocation().pathname
  const info = useParams()
  const name = useSelector((s) => s.user.username)

  const TitleText = () => {
    if (page === '/') return 'Объявления'
    if (page === '/profile/me') return `Здравствуйте, ${name}!`
    if (info.id && page === `/profile/${info.id}`) return 'Профиль продавца'
    return
  }

  const adspage = () => {
    if (info.id && page === `/ads/${info.id}`) return 'true'
    return 'false'
  }
  

  return (
    <S.TitleField adspage={adspage()}>
      <S.MainTitle>{TitleText()}</S.MainTitle>
    </S.TitleField>
  )
}
