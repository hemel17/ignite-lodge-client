import { useState, useEffect } from "react";
import { Card, Button, Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { StarIcon } from "@heroicons/react/24/solid";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const [filter, setFilter] = useState({ min: "", max: "" });

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/rooms", {
          params: filter,
        });
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, [filter]);

  const handleFilterChange = () => {
    setFilter({
      min: priceRange.split("-")[0],
      max: priceRange.split("-")[1],
    });
  };

  return (
    <section className="min-h-screen px-10 mx-auto md:px-20 dark:bg-blue-gray-900">
      <div className="flex justify-end max-w-xl py-4 mx-auto space-x-2">
        <Select
          label="Price Range"
          onChange={(value) => setPriceRange(value)}
          value={priceRange}
        >
          <Option value="101-200">$100 - $200</Option>
          <Option value="201-500">$201 - $500</Option>
        </Select>
        <Button color="deep-purple" onClick={handleFilterChange}>
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Link key={room._id} to={`/rooms/${room._id}`}>
            <Card className="overflow-hidden rounded-lg">
              <img
                src={room.RoomImages[0]}
                alt={room.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{room.RoomDescription}</h3>
                <p className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  {room.Review.length} reviews
                </p>
                <p className="mt-2 text-gray-800">
                  ${room.PricePerNight} per night
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
