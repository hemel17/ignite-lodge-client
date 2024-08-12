import Slider from "../../components/Slider/Slider";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [rooms, setRooms] = useState([]);

  console.log(rooms);

  useEffect(() => {
    axiosSecure
      .get("/rooms")
      .then((res) => setRooms(res.data))
      .catch((error) => console.log(error));
  }, [axiosSecure]);
  return (
    <>
      <Slider />
    </>
  );
};

export default Home;
