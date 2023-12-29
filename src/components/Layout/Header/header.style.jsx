import styled from 'styled-components'


export const Header = styled.div`
  background-color: #009ee4;
  display: flex;
  justify-content: center;
`
export const HeaderNav = styled.div`
  height: 79px;
  max-width: 1178px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`
export const HeaderButton = styled.div`
  // width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  padding: 8px 24px;

  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:active {
    background-color: #009ee4;
  }
`
export const ProfileBackground = styled.div`
  width: 100%;
  height: 200vh;
  position: absolute;
  background-color: #009ee4;
  left: 0px;
  top: 0px;
  opacity: 0.05;
  z-index: 1;
`