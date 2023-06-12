import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import * as S from './styles'

const Galery = () => (
  <Section title="Galeria" background="black">
    <S.Itens>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
    </S.Itens>
  </Section>
)

export default Galery
