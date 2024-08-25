import Hero from "../../components/Hero/Hero";
import Welcome from "../../components/Welcome/Welcome";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Newsletter from "../../components/Newsletter/Newsletter";
import Map from "../../components/Map/Map";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedRooms />
      <Newsletter />
      <Map />
    </>
  );
};

export default Home;
