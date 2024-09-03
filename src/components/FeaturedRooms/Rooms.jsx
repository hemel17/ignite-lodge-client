import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Rooms = ({ room }) => {
  return (
    <section className="flex flex-col gap-4 dark:bg-blue-gray-900 dark:text-gray-400 md:flex-row">
      <div className="flex-1 mb-5">
        <img src={room.RoomImages[1]} className="object-cover w-full" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-4 px-5 mb-5">
        <h2 className="text-xl md:text-3xl dark:text-white">
          {room.RoomDescription}
        </h2>
        <p className="max-w-lg">
          Ignite Lodge stands as the epitome of luxury, comfort, and exceptional
          service, making it the best choice for travelers seeking an
          unforgettable stay.
        </p>
        <Link to="/rooms">
          <Button color="deep-purple">Book Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default Rooms;
