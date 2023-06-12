import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.Titulo>{title}</S.Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <S.Descricao>{description}</S.Descricao>
  </S.Card>
)

export default Product
