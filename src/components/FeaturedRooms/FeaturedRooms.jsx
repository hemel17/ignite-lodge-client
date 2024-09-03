import axios from "axios";
import { useEffect, useState } from "react";
import Rooms from "./Rooms";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/rooms");
        // console.log(res.data);
        setRooms(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section>
      {rooms
        .filter((room) => room.Featured)
        .map((room) => (
          <Rooms key={room._id} room={room} />
        ))}
    </section>
  );
};

export default FeaturedRooms;
