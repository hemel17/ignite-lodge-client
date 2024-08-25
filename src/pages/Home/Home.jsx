import Hero from "../../components/Hero/Hero";
import Welcome from "../../components/Welcome/Welcome";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedRooms />
      <Newsletter />
    </>
  );
};

export default Home;
