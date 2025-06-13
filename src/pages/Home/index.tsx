import { Container } from "@mui/material";
import HomeOne from "../../components/Home/Home-1";
import HomeTwo from "../../components/Home/Home-2";
import HomeThree from "../../components/Home/Home-3";
import HomeFour from "../../components/Home/Home-4";
import HomeFive from "../../components/Home/Home-5";
import HomeSix from "../../components/Home/Home-6";
import HomeSeven from "../../components/Home/Home-7";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeSix />
      <HomeSeven />
    </Container>
  );
};

export default Home;
