import { Input, Select, Option, Button } from "@material-tailwind/react";
import { StarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723053378/ignite%20lodge/bqhrdnjn1p2skmkutd9w.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        {/* Title and Subtitle */}
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Discover your paradise
        </h1>
        <h2 className="text-2xl font-light text-white md:text-3xl">
          under the Greek sky
        </h2>

        {/* Star Rating */}
        <div className="flex items-center justify-center mt-4">
          <StarIcon className="w-6 h-6 text-white" />
          <StarIcon className="w-6 h-6 text-white" />
          <StarIcon className="w-6 h-6 text-white" />
          <StarIcon className="w-6 h-6 text-white" />
          <StarIcon className="w-6 h-6 text-white" />
        </div>

        {/* Booking Form */}
        <div className="flex flex-col items-center justify-center w-4/5 gap-4 p-4 mt-8 bg-white rounded-md md:max-w-5xl dark:bg-black lg:flex-row">
          {/* Check-in Date */}
          <Input type="date" label="Check-in Date" />
          {/* Check-out Date */}
          <Input type="date" label="Check-out Date" />

          {/* Adults Select */}
          <Select label="Adults">
            <Option value="1">1 Adult</Option>
            <Option value="2">2 Adults</Option>
            <Option value="3">3 Adults</Option>
            <Option value="4">4 Adults</Option>
          </Select>

          {/* Children Select */}
          <Select label="Children">
            <Option value="0">0 Children</Option>
            <Option value="1">1 Child</Option>
            <Option value="2">2 Children</Option>
            <Option value="3">3 Children</Option>
          </Select>

          {/* Book Now Button */}
          <Link to="/rooms">
            <Button color="deep-purple">Book Now</Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 flex items-center justify-center w-full p-4 bg-black bg-opacity-75">
        <p className="py-6 text-xl text-white md:text-2xl">
          Discover Your Paradise
        </p>
        <ArrowRightIcon className="w-6 h-6 ml-2 text-white" />
      </div>
    </div>
  );
};

export default Hero;
