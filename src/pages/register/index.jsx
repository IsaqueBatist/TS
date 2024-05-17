import React from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Input } from '../../components/input'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Column, Conta, Container, FormContainer, Row, SubTittle, Text, TextForm, Tittle } from "./style"

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  name: yup.string().required('Cmpo obrigatório'),
  email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo três caracteres').required('Campo Obrigatório'),
}).required();

const Register = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  console.log(isValid, errors)

  const onSubimit = async formData => {
    try {
      const { data } = await api.post('/users', {
        nome: `${formData.name}`,
        email: `${formData.email}`,
        senha: `${formData.password}`,
      })
      if(data.length === 1){
        navigate('/feed')
      } else {
        alert('ERRO')
      }
    } catch {
      alert('ERRO!!!')
    }
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Text>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Text>
        </Column>
        <Column>
          <FormContainer>
            <Tittle>
              Comece agora grátis
            </Tittle>
            <SubTittle>
              Crie sua conta e make the change._
            </SubTittle>
            <form onSubmit={handleSubmit(onSubimit)}>
              <Input name={'name'} errorMessage={errors?.name?.message} placeholder="Nome Completo" control={control} autoComplete="off"  type="text"/>
              <Input name={'email'} errorMessage={errors?.email?.message} placeholder="E-mail" control={control} autoComplete="off" type="email"/>
              <Input name={'password'} errorMessage={errors?.password?.message} placeholder="Password" control={control} autoComplete="off" type="password"/>
              <Button tittle="Criar minha conta" variant='secondary' type="submit" />
            </form>
            <TextForm>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </TextForm>
            <Conta>
              Já tenho conta. <span >Fazer login</span>
            </Conta>
          </FormContainer>
        </Column>




      </Container>
    </>
  )
}
export default Register
