import React from 'react'
import * as S from './layout.style'
import { Header } from './Header/header'
import { Navigation } from './Navigation/Navigation'
import { Title } from './Title/Title'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <S.PageWrapper>
      <S.PageContainer>
        <Header />
        <Navigation />
        <S.MainContainer>
          <Title/>
          <Outlet/>          
        </S.MainContainer>
      </S.PageContainer>
    </S.PageWrapper>
  )
}
