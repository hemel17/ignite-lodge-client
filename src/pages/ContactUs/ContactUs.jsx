import {
  Card,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Map from "../../components/Map/Map";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.name.value = "";
    form.email.value = "";
    form.subject.value = "";
    form.message.value = "";

    console.log(e.target.name.value);
  };
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-blue-gray-900 ">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Typography
            variant="h1"
            className="mb-4 font-extrabold text-gray-900 dark:text-white"
          >
            Contact Us
          </Typography>
          <Typography
            variant="paragraph"
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            We&apos;re here to help you with any questions or concerns.
          </Typography>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <Card className="p-8 bg-white shadow-xl dark:bg-blue-gray-100">
            <Typography variant="h2" className="mb-4 font-bold text-gray-900">
              Get in Touch
            </Typography>
            <Typography variant="paragraph" className="mb-6 text-gray-700">
              Feel free to reach out to us via phone, email, or visit us in
              person. We&apos;re here to assist you.
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="flex-shrink-0 w-6 h-6 text-purple-600" />
                <Typography variant="paragraph" className="ml-3 text-gray-700">
                  +1 (234) 567-8901
                </Typography>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="flex-shrink-0 w-6 h-6 text-purple-600" />
                <Typography variant="paragraph" className="ml-3 text-gray-700">
                  contact@ignitelodge.com
                </Typography>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="flex-shrink-0 w-6 h-6 text-purple-600" />
                <Typography variant="paragraph" className="ml-3 text-gray-700">
                  123 Lodge Drive, Scenic City, Greece
                </Typography>
              </div>
            </div>
          </Card>

          {/* Contact Form Section */}
          <Card className="p-8 bg-white shadow-xl dark:bg-blue-gray-100">
            <Typography variant="h2" className="mb-4 font-bold text-gray-900">
              Send Us a Message
            </Typography>
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              <Input
                type="text"
                name="name"
                label="Your Name"
                required
                color="purple"
              />
              <Input
                type="email"
                name="email"
                label="Your Email"
                required
                color="purple"
              />
              <Input
                type="text"
                name="subject"
                label="Subject"
                required
                color="purple"
              />
              <Textarea
                label="Your Message"
                name="message"
                required
                color="purple"
              />
              <Button color="purple" className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Typography
            variant="h2"
            className="mb-4 font-bold text-center text-gray-900 dark:text-white"
          >
            Find Us Here
          </Typography>
          <div className="w-full overflow-hidden rounded-lg">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
