import React from 'react'
import {Container, NameText, Progress, UserPicture} from './style'
import { IUserInfo } from './types'
const UserInfo = ({nome, imagem, percentual} : IUserInfo) => {
  return (
    <Container>
      <UserPicture src={imagem}/>
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual}></Progress>

      </div>
    </Container>
  )
}

export default UserInfo