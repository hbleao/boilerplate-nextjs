import React from 'react'

import * as S from './styles'

import { MainProps } from './interface'

const Main = ({ title, description }: MainProps) => (
  <S.Wrapper>
    <img
      className="logo"
      src="/images/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />
    <h1 className="title">{title}</h1>
    <p className="description">{description}</p>
    <img
      className="ilustration"
      src="/images/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
