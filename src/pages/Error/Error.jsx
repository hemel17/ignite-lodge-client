import { ExclamationTriangleIcon, HomeIcon } from "@heroicons/react/24/solid";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
      <ExclamationTriangleIcon className="w-24 h-24 text-red-500" />
      <h1 className="mt-4 text-6xl font-bold">404</h1>
      <h2 className="mt-2 text-2xl font-semibold">Oops! Page Not Found</h2>
      <p className="max-w-md mt-4 text-center text-gray-400">
        The page you are looking for does not exist. It might have been moved or
        deleted.
      </p>
      <a
        href="/"
        className="flex items-center px-6 py-3 mt-8 text-white transition-colors bg-red-500 rounded-full hover:bg-red-600"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Back to Home
      </a>
    </div>
  );
};

export default Error;
