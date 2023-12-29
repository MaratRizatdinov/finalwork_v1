import styled from 'styled-components'

export const AdvWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 40px;
  padding: 0px 0px 70px;
  display: flex;
  justify-content: center;
`
export const AdvContent = styled.div`
  max-width: 1178px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`
export const AdvLeftSide = styled.div`
  max-width: 480px;
  margin-right: 54px;
`
export const AdvFillImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AdvMainImg = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AdvBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
`
export const AdvBarImg = styled.div`
  width: 91px;
  min-width: 91px;
  height: 91px;
  background-color: #f0f0f0;
  // border: 2px solid #f0f0f0;
  margin: 0 3px;
  cursor: pointer;
  border: ${(props) =>
    props.id === props.current
      ? '2px solid #009ee4'
      : 'border: 2px solid #f0f0f0'};
  box-sizing: inline-box;
`
export const AdvRightSide = styled.div`
  max-width: 621px;
  display: flex;
  flex-direction: column;
`
export const AdvTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 10px;
`
export const AdvInfo = styled.div`
  margin-bottom: 34px;
`
export const AdvDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`
export const AdvCity = styled(AdvDate)``
export const AdvLink = styled(AdvDate)`
  color: #009ee4;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const AdvPrice = styled.div`
  font-size: 28px;
  line-height: 39px;
  font-weight: 600;
  margin-bottom: 20px;
`
export const AdvButton = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto',sans-serif;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;    
`
export const AdvButtonThin = styled(AdvButton)`  
  font-weight: 400;  
`
export const AdvPhone = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
`
export const AdvAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: pointer;
`
export const AdvAuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  overflow: hidden;
`
export const AdvAuthorCont = styled.div`
  margin-left: 12px;
`
export const AdvAuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
`
export const AdvAuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`
export const AdvMainContainer = styled.div`
  max-width: 1178px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 5px;
`
export const AdvMainTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 32px;
  padding: 0 5px;
`
export const AdvMainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`
export const AdvMainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`
export const AdvBackground = styled.div`
  width: 100%;
  height: 200vh;
  position: absolute;
  background-color: #009ee4;
  left: 0px;
  top: 0px;
  opacity: 0.05;
  z-index: 1;
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`
