import Button from '../../components/Button/index'
import { Input } from '../../components/input/index'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/index'
import { useForm } from 'react-hook-form'
import { IformData } from './types'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { api } from '../../services/api'
import { Column, Container, CriarText, EsqueciText, Row, SubtittleLogin, TextContent, Tittle, TittleLogin, Wrapper } from './style'

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo três caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IformData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  console.log(isValid, errors)

  const onSubmit = async (formData: IformData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if (data.length === 1) {
        navigate('/feed')
      } else {
        alert('Email ou senha incorreto')
      }
    } catch {
      alert('ERRO!!')
    }
  }



  return (
    <>
      <Header />
      <Container>
        <Column>
          <Tittle> A plataforma par você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empreas mais desejadas </Tittle>
        </Column>
        <Column >
          <Wrapper>
            <TittleLogin>Faça seu cadastro</TittleLogin>
            <SubtittleLogin>Faça seu login e make the change</SubtittleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input control={control} errorMessage={errors?.email?.message} name="email" placeholder="email" type="email" />
              <Input control={control} errorMessage={errors?.password?.message} name="password" placeholder="senha" type="password" />
              <Button tittle="Entrar" variant='secondary' type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText >Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>)
}
export { Login }