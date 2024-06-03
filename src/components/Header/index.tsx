import React, { useContext } from 'react'
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
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'


const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={DIO} alt='Logo DIO' width={100} />
            </Link>
              {user.id ? (
                <>
                  <SearchInputConainer>
                    <Input placeholder='Buscar...' />
                  </SearchInputConainer>
                  <Menu>Life Code</Menu>
                  <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
              {user.id ? (
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
