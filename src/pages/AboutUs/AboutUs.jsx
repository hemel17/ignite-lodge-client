import { Card, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-blue-gray-900">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Typography
            variant="h1"
            className="mb-4 font-extrabold text-gray-900 dark:text-white"
          >
            Welcome to{" "}
            <span className="text-primary dark:text-amber-400">
              Ignite Lodge
            </span>
          </Typography>
          <Typography
            variant="paragraph"
            className="text-lg text-gray-700 dark:text-gray-200"
          >
            Experience luxury, comfort, and adventure all in one place.
          </Typography>
        </div>

        {/* About Us Section */}
        <Card className="max-w-4xl p-8 mx-auto bg-white shadow-xl dark:bg-gray-300">
          <Typography variant="h2" className="mb-4 font-bold text-gray-900">
            About Us
          </Typography>
          <Typography variant="paragraph" className="mb-4 text-gray-700">
            Ignite Lodge is your ultimate escape destination, nestled in the
            heart of nature yet offering all the modern amenities you need for a
            perfect stay. Whether you&apos;re here to unwind or explore, we
            provide an experience tailored to your desires.
          </Typography>
          <Typography variant="paragraph" className="mb-4 text-gray-700">
            Our team is dedicated to making your stay unforgettable, with
            top-notch service, gourmet dining, and a variety of activities
            designed to help you relax and recharge. We take pride in our
            attention to detail, ensuring that every aspect of your visit
            exceeds your expectations.
          </Typography>
        </Card>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          <div className="flex items-start">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-amber-300" />
            <Typography
              variant="paragraph"
              className="ml-3 text-gray-700 dark:text-gray-400"
            >
              Luxurious Rooms & Suites
            </Typography>
          </div>
          <div className="flex items-start">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-amber-300" />
            <Typography
              variant="paragraph"
              className="ml-3 text-gray-700 dark:text-gray-400"
            >
              Gourmet Dining Experiences
            </Typography>
          </div>
          <div className="flex items-start">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-amber-300" />
            <Typography
              variant="paragraph"
              className="ml-3 text-gray-700 dark:text-gray-400"
            >
              Adventure & Recreation Activities
            </Typography>
          </div>
          <div className="flex items-start">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-amber-300" />
            <Typography
              variant="paragraph"
              className="ml-3 text-gray-700 dark:text-gray-400"
            >
              Spa & Wellness Center
            </Typography>
          </div>
          <div className="flex items-start">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-amber-300" />
            <Typography
              variant="paragraph"
              className="ml-3 text-gray-700 dark:text-gray-400"
            >
              Conference & Event Spaces
            </Typography>
          </div>
          <div className="flex items-start">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-amber-300" />
            <Typography
              variant="paragraph"
              className="ml-3 text-gray-700 dark:text-gray-400"
            >
              Stunning Natural Surroundings
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
