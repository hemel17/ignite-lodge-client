import { Typography } from "@material-tailwind/react";
import "animate.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { logIn, googleLogIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await logIn(data);
      console.log(res);
      navigate(location.state ? location.state : "/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await googleLogIn();
      console.log(res);
      navigate(location.state ? location.state : "/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 dark:bg-gradient-to-r dark:from-blue-gray-600 dark:to-blue-gray-800">
      <div className="flex flex-col w-4/5 max-w-4xl bg-white rounded-lg shadow-lg dark:bg-blue-gray-900 md:flex-row">
        {/* Sign In Section */}
        <div className="flex animate__animated animate__bounceInLeft flex-col items-center justify-center w-full p-8 md:min-h-[480px] dark:text-white md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-center">Log In</h2>
          <div className="flex mb-4 space-x-3">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-4 p-3 bg-transparent border-2 "
            >
              <img
                className="w-5 h-5"
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />{" "}
              Continue with Google
            </button>
          </div>
          <p className="mb-4 text-center">or use your email and password</p>
          <form onSubmit={handleSubmit(onSubmit)} className="text-black">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-100 rounded outline-none"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <Typography>{errors.email.message}</Typography>}

            <input
              type="password"
              placeholder="Password"
              className="relative w-full p-3 mb-4 bg-gray-100 rounded outline-none"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long!",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])/,
                  message:
                    "Password must contain both uppercase and lowercase letter",
                },
              })}
            />
            {errors.password && (
              <Typography>{errors.password.message}</Typography>
            )}

            <button className="w-full p-3 text-white rounded bg-primary">
              LOG IN
            </button>
          </form>
        </div>
        {/* Sign Up Section */}
        <div className="flex animate__animated animate__bounceInRight flex-col items-center justify-center w-full p-8 text-white rounded-b-lg bg-primary md:rounded-r-lg md:rounded-l-[30%] md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Hello, Friend!</h2>
          <p className="mb-4 text-center">
            Register with your personal details to use all of our site&apos;s
            features
          </p>

          <Link
            to="/register"
            className="w-full p-3 text-center bg-white rounded text-primary hover:bg-gray-100"
          >
            <button>REGISTER</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
