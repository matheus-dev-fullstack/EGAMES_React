import Banner from "../../Components/Banner";

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
