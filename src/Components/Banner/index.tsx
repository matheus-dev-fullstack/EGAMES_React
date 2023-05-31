import * as S from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
      <S.Precos>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </S.Precos>
    </div>
  </S.Imagem>
)

export default Banner
