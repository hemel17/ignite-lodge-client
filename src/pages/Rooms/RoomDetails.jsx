import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

const RoomDetails = () => {
  const { data } = useLoaderData();
  const {
    RoomDescription,
    PricePerNight,
    RoomSize,
    Available,
    RoomImages,
    SpecialOffers,
    Review,
  } = data;
  return (
    <section className="min-h-screen px-4 py-10 dark:bg-blue-gray-900 dark:text-white">
      <section className="container mx-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <Slider RoomImages={RoomImages} />
        </div>

        <div className="w-full md:w-[80%] mx-auto">
          <h2 className="mb-4 text-3xl text-center md:text-5xl">
            {RoomDescription}
          </h2>
          <p>Price Per Night : ${PricePerNight}</p>
          <p>Room Size : {RoomSize}</p>
          <p>Available : {Available ? "Yes" : "No"}</p>
          <p>Special Offer : {SpecialOffers}</p>
          <p>Total Review : {Review.length}</p>
        </div>
      </section>
    </section>
  );
};

export default RoomDetails;
