import styled from 'styled-components'
import exit from './exit.png'
import exit_hover from './exit-hover.png'

export const ModalForm = styled.div`
  --modal-width: 600px;
  --modal-height: 800px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 22px 50px 50px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 10px 5px #d9d9d9;
  display: ${(props) => (props.modal === 'visible' ? 'block' : 'none')};
  z-index: 2;
  opacity: 1;
`
export const ModalFormArea = styled.form`
  display: flex;  
  margin-top: 5px;
  width: 500px;
  min-height: 720px;
  flex-direction: column;
  align-items: start;
  background-color: #ffffff;
}
`
export const ModalExit = styled.div`
  position: absolute;
  left: 520px;
  top: 38px;
  width: 43px;
  height: 43px;
  background-image: url(${exit});
  &:hover {
    background-image: url(${exit_hover});
  }
  cursor: pointer;
`
export const ModalTitle = styled.div`
  height: 70px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const ModalLabel = styled.label`
  height: 30px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`
export const ModalInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 16px 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  &::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: 2px solid #d9d9d9;
  }  
`
export const ModalTextarea = styled.textarea`
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  resize: none;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 16px 10px;
  line-height: 24px;
  &:focus {
    outline: 2px solid #d9d9d9;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`
export const ModalPhotosContainer = styled.div`
  height: 90px;
  width: 490px;
  background-color: #ffffff;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`
export const ModalPhoto = styled.div`
  height: 90px;
  width: 90px;
  background-color: #afffff;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalPriceContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 16px 10px;
  font-size: 16px;
  display:flex;
  margin-bottom: 20px;
  width: 200px;
  &::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: 2px solid #d9d9d9;
  }  
`
export const ModalPrice = styled.input`  
  width: 155px;  
  border:none;
  margin-right:10px;
  &:focus {
    outline: 1px solid #d9d9d9;
  }  
`
export const ModalButton = styled.button`
  display: flex;
  align-items: center;  
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 181px;
  height: 50px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  cursor: pointer;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  &:disabled {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
  }
`
export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

