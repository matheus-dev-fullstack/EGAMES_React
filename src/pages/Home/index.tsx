import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { title } from 'process'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazar 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazar 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 200'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazar 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazar 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Zeldaé um game jogável, legal, bacana, empolgante, alegre, feliz, cativante, emocionante,impressionante',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Zeldaé um game jogável, legal, bacana, empolgante, alegre, feliz, cativante, emocionante,impressionante',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Zeldaé um game jogável, legal, bacana, empolgante, alegre, feliz, cativante, emocionante,impressionante',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Zeldaé um game jogável, legal, bacana, empolgante, alegre, feliz, cativante, emocionante,impressionante',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
