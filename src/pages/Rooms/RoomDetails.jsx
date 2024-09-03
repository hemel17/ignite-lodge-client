import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import moment from "moment";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";

const RoomDetails = () => {
  const { user } = useAuth();
  console.log(user);
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

  const [selectedDate, setSelectedDate] = useState(null);

  const currentDate = moment().format("DDMMYY");

  const handleDateChange = (e) => {
    setSelectedDate(moment(e.target.value).format("DDMMYY"));
  };

  const handleBooking = () => {
    if (selectedDate < currentDate) {
      return alert("We dont't allow time travel!");
    }

    if (selectedDate) {
      alert(`Booking confirmed for ${selectedDate}!`);
      // Proceed with booking logic here
    } else {
      alert("Please select a date to book the room.");
    }
  };

  return (
    <section className="min-h-screen px-4 py-10 dark:bg-blue-gray-900 dark:text-white">
      <section className="container mx-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <Slider RoomImages={RoomImages} />
        </div>

        <div className="w-full md:w-[80%] mx-auto mt-8">
          <h2 className="mb-4 text-3xl text-center md:text-5xl">
            {RoomDescription}
          </h2>
          <p>Price Per Night : ${PricePerNight}</p>
          <p>Room Size : {RoomSize}</p>
          <p>Available : {Available ? "Yes" : "No"}</p>
          <p>Special Offer : {SpecialOffers}</p>
          <p>Total Review : {Review.length}</p>

          <div className="mt-6">
            <label htmlFor="date-picker" className="block mb-2 text-lg">
              Select a Date:
            </label>
            <input
              type="date"
              id="date-picker"
              className="p-2 border border-gray-300 rounded-md dark:bg-blue-gray-800 dark:border-gray-600"
              onChange={handleDateChange}
            />
          </div>

          <div className="mt-4 text-center">
            {Available ? (
              <Button onClick={handleBooking} color="deep-purple">
                Book Now
              </Button>
            ) : (
              <button className="cursor-not-allowed pointer-events-none">
                Book Now
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default RoomDetails;
