import styled from 'styled-components'

export const TitleField = styled.div`
  max-width: 1178px;
  width: 100%;
  margin-top: 45px;
  @media (max-width: 320px) {
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: ${(props)=>props.adspage==='true' ? '0px': '20px'};
    display:${(props)=>props.adspage==='true' ? 'none': 'block'}
  }
`
export const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 88px;
  color: #000000;
  @media (max-width: 320px) {
    font-size: 24px;
    line-height: 29px;
  }
`