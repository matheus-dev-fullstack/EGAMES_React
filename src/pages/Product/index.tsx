import { useParams } from "react-router-dom";

import Hero from "../../Components/Hero";
import Section from "../../Components/Section";
import Galery from "../../Components/Galery";
import Loader from "../../Components/Loader";

import { useGetGameQuery } from "../../services/api";

type GameParams = {
  id: string;
};

/* eslint-disable */
const Product = () => {
  const { id } = useParams() as GameParams;
  const { data: game } = useGetGameQuery(id);
  // const [game, setGame] = useState<Game>()s
  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [id])

  if (!game) {
    return <Loader />;
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="grey">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b> Desenvolvedor: </b>
          {game.details.developer}
          <br />
          <b> Editora:</b> {game.details.publisher} <br />
          <b>Idiomas: </b>O jogo oferece suporte a diversos idiomas, incluindo{" "}
          {game.details.languages.join(", ")}
        </p>
      </Section>
      <Galery
        name={game.name}
        defaultCover={game.media.cover}
        itens={game.media.gallery}
      />
    </>
  );
};

export default Product;
