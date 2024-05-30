import React from 'react'
import {
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  SearchInputConainer,
  UserPicture,
  Wrapper
} from './style'
import Button from '../Button/index'
import DIO from '../../assets/DIO.png'
import { IHeader } from './types'


const Header = ({ autenticado }: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={DIO} alt='Logo DIO' width={100} />
          {autenticado ? (
            <>
              <SearchInputConainer>
                <Input placeholder='Buscar...' />
              </SearchInputConainer>
              <Menu>Life Code</Menu>
              <Menu>Global</Menu>
            </>) : null}

        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/160277060?v=4' />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button tittle={'Entrar'}></Button>
              <Button tittle={'Cadastrar'}></Button>
            </>)}

        </Row>
      </Container>
    </Wrapper>
  )
}
export default Header
