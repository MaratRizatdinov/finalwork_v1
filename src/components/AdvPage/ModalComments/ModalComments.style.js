import styled from 'styled-components'
import exit from './exit.png'
import exit_hover from './exit-hover.png'

export const ModalForm = styled.div`
  --modal-width: 800px;
  --modal-height: 900px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 18px 47px 47px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 10px 5px #d9d9d9;
  display: ${(props) => (props.modal === 'visible' ? 'block' : 'none')};
  z-index: 2;
  opacity: 1;
`
export const ModalExit = styled.div`
  position: absolute;
  left: 722px;
  top: 38px;
  width: 43px;
  height: 43px;
  background-image: url(${exit});
  &:hover {
    background-image: url(${exit_hover});
  }
  cursor: pointer;
`
export const ModalFormArea = styled.form`
  display: flex;  
  margin-top: 5px;
  width: 650px;
  height: 310px;
  flex-direction: column;
  align-items: start;
  background-color: #ffffff;
}
`
export const ModalTitle = styled.div`
  height: 70px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const ModalLabel = styled.label`
  height: 30px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
export const ModalTextarea = styled.textarea`
  height: 100px;
  width: 650px;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  resize: none;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 10px;
  line-height: 24px;
  &:focus {
    outline: 2px solid #d9d9d9;
  }
`
export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 181px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #009ee4;
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled === true ? '#d9d9d9' : '#009ee4'};
  border: ${(props) =>
    props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
  &:hover {
    background-color: ${(props) =>
      props.disabled === true ? '#d9d9d9' : '#0080c1'};
    border: ${(props) =>
      props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
  }
  &:active {
    background-color: ${(props) =>
      props.disabled === true ? '#d9d9d9' : '#009ee4'};
    border: ${(props) =>
      props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
  }
`
export const ModalCommentsField = styled.div`
  display: flex;  
  margin-top: 5px;
  width: 650px;
  height: 510px;
  flex-direction: column;
  align-items: start;
  background-color: #ffffff;
  gap:5px;
  overflow-y:auto;
}
`
export const ModalCommentContainer = styled.div`
  display: flex;    
  width: 650px;
  min-height: 125px;
  flex-direction: row;
  align-items: start;
  background-color: #ffffff;
}
`
export const ModalAvatarField = styled.div`
  display: flex;    
  width: 40px;
  min-height: 125px;
  flex-direction: column;
  justify-content: start;
  background-color: #ffffff;
  margin-right:10px;
}
`
export const ModalAvatar = styled.div`
  width: 40px;
  height:40px;
  border-radius:20px;  
  background-color: #d9d9d9;
  overflow: hidden;
}
`
export const ModalComment = styled.div`
  width: 600px;
  min-height:125px;
  background-color: #ffffff;
  display:flex;
  flex-direction: column;
  justify-content: start;
}
`
export const ModalAuthor = styled.div`
  width: 600px;
  min-height:32px;
  background-color: #ffffff;  
  display:flex;
  align-items: center;
  font-size:16px;
  font-weight:500;
}
`
export const ModalDate = styled.span`
  font-weight: 400;
  color: #5f5f5f;
`
export const ModalText = styled.div`
  width: 600px;
  font-weight: 500;
  font-size: 16px;
  min-height: 32px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`
export const ModalContent = styled.div`
  width: 600px;
  font-weight: 400;
  font-size: 16px;
  min-height: 48px;
  background-color: #ffffff;
  text-wrap: normal;
`
export const EmptyContainer = styled.div`
  width: 650px;
  height: 510px;  
  text-align:center;
  padding-top:200px;
  font-weight: 500;
  font-size: 32px;
`
