import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardsField } from '../CardsField/CardsField'
import * as S from './ProfilePage.style'
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '../../redux/reducers/userApi'

import { ModalAvatar } from './ModalAvatar/ModalAvatar'
import { useGetAdsQuery } from '../../redux'

export const ProfilePage = () => {
  const navigate = useNavigate()
  
  const { data, isLoading: getLoading} = useGetUserQuery()
  const {refetch} =useGetAdsQuery()
  const [updateUser] = useUpdateUserMutation()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [avatar, setAvatar] = useState('')
  const [modal, setModal] = useState('unvisible')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (!getLoading) {
      setName(data.name)
      setSurname(data.surname)
      setCity(data.city)
      setPhone(data.phone)
      setAvatar(data.avatar)
    }
  }, [getLoading, data])

  const handleClickToUpdate = async (e) => {
    e.preventDefault()
    setDisabled(true)
    const body = { name, surname, city, phone }
    await updateUser({ body })
      .unwrap()      
      .then(()=>refetch())
      .catch(() => navigate('/login'))
  }

  return (
    <S.ProfileContainer>
      <ModalAvatar modal={modal} setModal={setModal} avatar={avatar}/>
      {modal==='visible' ? <S.ProfileBackground /> : null}
      <S.ProfileContent>
        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
        <S.ProfileSettings>
          <S.ProfileLeft>
            <S.ProfileImgContainer>
              <S.ProfileImg src={`http://localhost:8090/${avatar}`} alt="" />
            </S.ProfileImgContainer>

            <S.ProfileChangeButton onClick={() => setModal('visible')}>
              Заменить
            </S.ProfileChangeButton>
          </S.ProfileLeft>
          <S.ProfileRight>
            <S.ProfileForm>
              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="name">Имя</S.ProfileLabel>
                <S.ProfileInput
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    setDisabled(false)
                  }}
                  placeholder="Введите имя"
                />
              </S.ProfileBlock>

              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="surname">Фамилия</S.ProfileLabel>
                <S.ProfileInput
                  id="surname"
                  name="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value)
                    setDisabled(false)
                  }}
                  placeholder="Введите фамилию"
                />
              </S.ProfileBlock>

              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="city">Город</S.ProfileLabel>
                <S.ProfileInput
                  id="city"
                  name="city"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                    setDisabled(false)
                  }}
                  placeholder="Введите город"
                />
              </S.ProfileBlock>

              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="phone">Телефон</S.ProfileLabel>
                <S.ProfileInput
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setDisabled(false)
                  }}
                  placeholder="+7(XXX)XXX-XX-XX"
                />
              </S.ProfileBlock>

              <S.ProfileSaveButton
                disabled={disabled}
                onClick={(e) => handleClickToUpdate(e)}
              >
                Сохранить
              </S.ProfileSaveButton>
            </S.ProfileForm>
          </S.ProfileRight>
        </S.ProfileSettings>
      </S.ProfileContent>

      <S.ProfileTitle>Мои товары</S.ProfileTitle>
      <CardsField user={data && data.id} adv='myAdv'/>
    </S.ProfileContainer>
  )
}
