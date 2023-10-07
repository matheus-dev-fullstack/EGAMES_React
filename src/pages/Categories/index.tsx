<<<<<<< HEAD
/* eslint-disable */
import ProductsList from '../../Components/ProductsList'
=======
import ProductsList from "../../Components/ProductsList";
>>>>>>> 2d6f4030e4022b734b7e921b838abb27969d21e5

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from "../../services/api";

const Categories = () => {
  // const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  // const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  // const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  // const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  // const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesAcao(res))
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setGamesEsportes(res))
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSimulacao(res))
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setGamesLuta(res))
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setGamesRPG(res))
  // }, [])

  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery();
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
<<<<<<< HEAD
      <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" isLoading={isLoadingFight}/>
=======
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
>>>>>>> 2d6f4030e4022b734b7e921b838abb27969d21e5
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  );
};
export default Categories;
