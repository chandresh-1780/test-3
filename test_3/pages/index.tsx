import type { NextPage } from "next";
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeSection />
    </>
  );
};

export default Home;
