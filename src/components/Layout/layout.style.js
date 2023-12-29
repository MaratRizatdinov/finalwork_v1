import styled from 'styled-components'
import { Wrapper } from '../../generalStyles/generalStyle'

export const PageWrapper = styled.div`
  ${Wrapper};
  background-color: #f1f1f1;
  display: flex;
`
export const PageContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;  
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardsField = styled.div`
  max-width: 1178px;
  width: 100%;
  margin-top: 20px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
  height: 922px;
`
