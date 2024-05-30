import styled from "styled-components";
import {IColumn} from './types'

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Tittle = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color:white;
`

export const TittleHighlight = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF70;
  margin-bottom: 24px;
`

export const TextContent = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
width: 420px;
margin-bottom: 20px;
line-height: 22px;

color :white;
`

export const Column = styled.div<IColumn>`
  flex:${({flex}) => flex};
  padding-right: 24px;
`