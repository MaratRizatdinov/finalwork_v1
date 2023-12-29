import styled from 'styled-components'
import {
  ButtonStyle,
  Wrapper,
} from '../../generalStyles/generalStyle'

export const AuthContainer = styled.div`
  ${Wrapper};
  background-color: #f1f1f1;
`
export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: ${(props) =>
    props.$isLoginMode === true ? '439px' : '647px'};
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 10px 5px #d9d9d9;
`


export const EnterButton = styled.button`
  ${ButtonStyle};
  background-color: #009ee4;
  color: #ffffff;
  margin-top: 60px;
  margin-top: ${(props) => (props.$isLoginMode === true ? '60px' : '20px')};
  margin-bottom: ${(props) => (props.$isLoginMode === true ? '20px' : '0px')};
  border: none;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  &:disabled {
    background-color: #d9d9d9;
  }
`
export const SignupButton = styled.button`
  ${ButtonStyle};
  background-color: transparent;
  color: #000000;
  border: 1px solid #d0cece;
  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }
`
export const ErrorSpan =styled.span`
  font-size:14px;
  color: tomato;
  position: absolute;
  left: 40px;
  top:${(props) =>
    props.$isLoginMode === true ? '250px' : '515px'};
  // top:515px;
`
