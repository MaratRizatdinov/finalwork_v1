import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 1178px;
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
export const ProfileContent = styled.div`
  max-width: 834px;
  margin-bottom: 60px;
`
export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
`
export const ProfileSettings = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 43px;
`
export const ProfileImgContainer = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProfileChangeButton = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const ProfileRight = styled.div`
  width: 630px;
`
export const ProfileForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
`
export const ProfileBlock = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
`
export const ProfileLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
`
export const ProfileInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  width: ${(props) => (props.name === 'phone' ? '614px' : '300px')};
  &::placeholder {
    color: #d9d9d9;
  }
`
export const ProfileSaveButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 6px;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
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
