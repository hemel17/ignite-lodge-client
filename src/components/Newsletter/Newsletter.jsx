import { useState } from "react";
import {
  Button,
  Input,
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-blue-gray-900">
      <Card className="w-full max-w-md p-8 mx-auto mt-4 dark:bg-blue-gray-50 md:mt-6">
        <div className="text-center">
          <EnvelopeIcon className="w-12 h-12 mx-auto text-purple-600" />
          <Typography variant="h2" className="mt-6 text-gray-900">
            Get the Latest Updates
          </Typography>
          <Typography variant="paragraph" className="mt-2 text-gray-600">
            Join our newsletter and stay in the loop with exclusive content and
            offers.
          </Typography>
        </div>
        {!isSubmitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              type="email"
              required
              color="purple"
              label="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" color="purple" className="w-full">
              Sign Up Now
            </Button>
          </form>
        ) : (
          <div className="mt-8 text-center text-green-600">
            <CheckCircleIcon className="w-12 h-12 mx-auto" />
            <Typography variant="h5" className="mt-2">
              Thank you for signing up!
            </Typography>
            <Typography variant="paragraph" className="mt-1 text-gray-600">
              We&apos;ll be in touch soon.
            </Typography>
          </div>
        )}
        <div className="mt-10">
          <Typography
            variant="small"
            className="tracking-wide text-gray-500 uppercase"
          >
            Why subscribe?
          </Typography>
          <List className="mt-4 space-y-4">
            <ListItem className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <Typography variant="paragraph" className="ml-3 text-gray-700">
                Exclusive content delivered weekly
              </Typography>
            </ListItem>
            <ListItem className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <Typography variant="paragraph" className="ml-3 text-gray-700">
                Early access to new features and products
              </Typography>
            </ListItem>
            <ListItem className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <Typography variant="paragraph" className="ml-3 text-gray-700">
                Special offers and discounts for subscribers
              </Typography>
            </ListItem>
          </List>
        </div>
      </Card>
    </div>
  );
};

export default Newsletter;
