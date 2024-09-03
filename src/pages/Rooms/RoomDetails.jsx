import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import moment from "moment";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";

const RoomDetails = () => {
  const { user } = useAuth();
  const email = user?.email;
  const { data } = useLoaderData();
  const {
    _id,
    RoomDescription,
    PricePerNight,
    RoomSize,
    Available,
    RoomImages,
    SpecialOffers,
    Review,
  } = data;

  const [selectedDate, setSelectedDate] = useState(null);

  const bookingInfo = {
    email,
    selectedDate,
  };

  const currentDate = moment().format("YYMMDD");

  const handleDateChange = (e) => {
    setSelectedDate(moment(e.target.value).format("YYMMDD"));
  };

  const handleBooking = () => {
    if (!selectedDate) {
      return toast.error("Please select a date!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    if (selectedDate < currentDate) {
      return toast.error("We don't allow time travel!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    Swal.fire({
      title: "You've selected",
      html: `
      <p>${RoomDescription}</p>
      <p>$${PricePerNight} per night</p>
      <p>${RoomSize} of heaven</p>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Book Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.put(`http://localhost:5000/rooms/${_id}`, bookingInfo);

        Swal.fire({
          title: "Welcome!",
          text: "You've booked the room!",
          icon: "success",
        });
      }
    });
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
              <button className="px-4 py-2 text-red-400 border-2 border-red-400 rounded-lg cursor-not-allowed pointer-events-none">
                Not Available!
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default RoomDetails;
