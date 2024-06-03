import { useContext } from "react"
import { Card } from "../../components/card"
import Header from "../../components/Header"
import UserInfo from "../../components/UserInfo"

import { Column, Container, TextContent, Tittle, TittleHighlight } from "./style"
import { AuthContext } from "../../context/auth"

const Feed = () => {
  return (
    <>
      <Header/>
      <Container>
        <Column flex={3}>
          <Tittle>Feed</Tittle>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TittleHighlight>#RANKING 5 TOP DA SEMANA</TittleHighlight>
          <UserInfo percentual={80} nome={'Isaque'} imagem={'https://avatars.githubusercontent.com/u/160277060?v=4'} />
          <UserInfo percentual={60} nome={'Isaque'} imagem={'https://avatars.githubusercontent.com/u/160277060?v=4'} />
          <UserInfo percentual={45} nome={'Isaque'} imagem={'https://avatars.githubusercontent.com/u/160277060?v=4'} />
          <UserInfo percentual={20} nome={'Isaque'} imagem={'https://avatars.githubusercontent.com/u/160277060?v=4'} />
        </Column>

      </Container>
    </>

  )
}

export default Feed 