import { Typography } from "@material-tailwind/react";
import "animate.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, googleLogIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await createUser(data);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await googleLogIn();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 dark:bg-gradient-to-r dark:from-blue-gray-600 dark:to-blue-gray-800">
      <div className="flex flex-col w-4/5 max-w-4xl bg-white rounded-lg shadow-lg dark:bg-blue-gray-900 md:flex-row-reverse">
        {/* register Section */}
        <div className="flex animate__animated animate__bounceInRight flex-col items-center justify-center w-full p-8 md:min-h-[480px] dark:text-white md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-center">Register</h2>
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
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 bg-gray-100 rounded outline-none"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <Typography className="text-red-400">
                {errors.name.message}
              </Typography>
            )}
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
            {errors.email && (
              <Typography className="text-red-400">
                {errors.email.message}
              </Typography>
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-100 rounded outline-none"
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
              <Typography className="text-red-400">
                {errors.password.message}
              </Typography>
            )}

            <button className="w-full p-3 text-white rounded bg-primary">
              REGISTER
            </button>
          </form>
        </div>
        {/* Sign Up Section */}
        <div className="flex animate__animated animate__bounceInLeft flex-col items-center justify-center w-full p-8 text-white rounded-b-lg bg-primary md:rounded-l-lg md:rounded-r-[30%] md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Hello, Friend!</h2>
          <p className="mb-4 text-center">
            Login with your personal details to use all of our site&apos;s
            features
          </p>
          <Link
            to="/login"
            className="w-full p-3 text-center bg-white rounded text-primary hover:bg-gray-100"
          >
            <button>LOG IN</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
