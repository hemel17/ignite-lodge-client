const SignIn = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="flex flex-col w-4/5 max-w-4xl bg-white rounded-lg shadow-lg md:flex-row">
        {/* Sign In Section */}
        <div className="flex flex-col items-center justify-center w-full p-8 md:min-h-[480px] md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-center">Log In</h2>
          <div className="flex mb-4 space-x-3">
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                alt="Facebook"
              />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <img
                src="https://img.icons8.com/fluent/48/000000/twitter.png"
                alt="Twitter"
              />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="LinkedIn"
              />
            </button>
          </div>
          <p className="mb-4 text-center">or use your email account:</p>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
            />

            <button className="w-full p-3 text-white rounded bg-primary">
              LOG IN
            </button>
          </form>
        </div>
        {/* Sign Up Section */}
        <div className="flex flex-col items-center justify-center w-full p-8 text-white rounded-b-lg bg-primary md:rounded-r-lg md:rounded-l-[30%] md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Hello, Friend!</h2>
          <p className="mb-4 text-center">
            Register with your personal details to use all of our site&apos;s
            features
          </p>
          <button className="w-full p-3 bg-white rounded text-primary hover:bg-gray-100">
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
