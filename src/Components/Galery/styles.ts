import styled from 'styled-components'
import { cores } from '../../styles'

export const Itens = styled.ul`
  display: flex;
`
export const Item = styled.li`
  margin-right: 16px;
  img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
