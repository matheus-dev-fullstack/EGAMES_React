<<<<<<< HEAD
/* eslint-disable */
import Banner from '../../Components/Banner'
=======
import Banner from "../../Components/Banner";
>>>>>>> 2d6f4030e4022b734b7e921b838abb27969d21e5

import ProductsList from "../../Components/ProductsList";

import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery();
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery();

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  );
};

export default Home;
