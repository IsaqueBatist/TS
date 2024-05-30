
import { useNavigate } from 'react-router-dom'
import { Container, TextContent, Tittle, TittleHighlight } from './style'
import Button from "../../components/Button/index"
import Header from '../../components/Header/index'

const Home = () => {
  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/Login')
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Tittle> <TittleHighlight>Implemente<br /></TittleHighlight> O seu futuro global agora!</Tittle>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu nobo desafio prifissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button tittle={'Começar Agora'} variant="Secondary" onClick={handleClickSignIn}/>
        </div>
        <div>
          <img alt="Imagem Principal" />
        </div>

      </Container>


    </>

  )
}

export { Home }