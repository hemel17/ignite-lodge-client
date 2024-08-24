const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 md:gap-10 md:px-10 dark:bg-blue-gray-900 md:flex-row">
      {/* welcome text */}
      <div className="flex flex-col flex-1 gap-4 py-4 mx-auto text-center md:gap-8 dark:text-white">
        <h4 className="text-xl font-bold text-primary dark:text-amber-400">
          Ignite Logde
        </h4>
        <p className="mx-auto text-2xl max-w-96 md:text-5xl">
          Here is a tribute to a good life
        </p>
        <p className="max-w-4xl">
          Ignite Lodge stands as the epitome of luxury, comfort, and exceptional
          service, making it the best choice for travelers seeking an
          unforgettable stay. Nestled in a prime location, our hotel is not just
          a place to stay but a destination in itself, offering an unparalleled
          experience that sets us apart from the competition.
        </p>
      </div>

      {/* welcome image */}
      <div className="flex items-center justify-center flex-1 py-4">
        <img
          src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723832833/ignite%20lodge/ir44lnjtqfegksot4dzv.png"
          alt="welcome to ignite lodge"
          className="w-3/5 h-full"
        />
      </div>
    </section>
  );
};

export default Welcome;
