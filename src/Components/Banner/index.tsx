<<<<<<< HEAD
/* eslint-disable */
import Tag from '../Tag'
import Button from '../Button'
import { Image, Title, Prices } from './styles'
import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'
import { MoonLoader } from 'react-spinners'
import Loader from '../Loader'
=======
import Tag from "../Tag";
import Button from "../Button";
import { Image, Title, Prices } from "./styles";
import { useGetFeaturedGameQuery } from "../../services/api";
import { parseToBrl } from "../../utils";
import Loader from "../Loader";
>>>>>>> 2d6f4030e4022b734b7e921b838abb27969d21e5

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery();

  // const [game, setGame] = useState<Game>()
  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [])

  if (!game) {
    return <Loader />;
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{parseToBrl(game.prices.current)}</span> <br />
            por apenas {parseToBrl(game.prices.old)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  );
};

export default Banner;
