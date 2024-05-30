import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import {
  CardContainer,
  Content,
  ImageBackground,
  PostInfo, UserInfo,
  UserPicture,
  HasInfo
} from './style'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/160277060?v=4' />
          <div>
            <h4>Isaque BARBOSA</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para Curso de HTLM e CSS</h4>
          <p>Projeto feito no cuso de HTML e CSS do bootcamp <strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 18
          </p>
        </HasInfo>
      </Content>

    </CardContainer>
  )
}

export { Card } 