import styled, { keyframes } from 'styled-components'
import { TagContainer } from '../Tag/styles'

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Imagem = styled.div`
  animation: ${fadeInAnimation} 1s ease-in;

  width: 100%;
  height: 490px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
  margin-bottom: 16px;
`
export const Precos = styled.p`
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`

const ImageContainer = styled(Imagem)``
