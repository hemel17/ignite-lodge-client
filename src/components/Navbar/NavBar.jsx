import { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Spinner,
  Button,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { ThemeContext } from "../../providers/MyThemeProvider/MyThemeProvider";
import useAuth from "../../hooks/useAuth";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Rooms", link: "/rooms" },
  { name: "My Bookings", link: "/myBookins" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Contact Us", link: "/contactUs" },
];

const NavList = () => (
  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {navItems.map((item) => (
      <Typography
        key={item.name}
        as="li"
        color="blue-gray"
        className="p-1 font-semibold dark:text-white"
      >
        <NavLink
          to={item.link}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-primary dark:text-amber-400"
              : "flex items-center transition-colors"
          }
        >
          {item.name}
        </NavLink>
      </Typography>
    ))}
  </ul>
);

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, loading, logOut } = useAuth();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 border-none rounded-none h-max dark:bg-blue-gray-900 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 dark:text-white"
        >
          <span className="text-primary dark:text-amber-400">Ignite</span> Lodge
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex items-center justify-center gap-4">
          {loading ? (
            <Spinner />
          ) : user ? (
            <Button onClick={() => logOut()} variant="outlined" color="red">
              Log Out
            </Button>
          ) : (
            <Button variant="outlined" color="green">
              <Link to="login">Login</Link>
            </Button>
          )}

          <Button
            onClick={toggleTheme}
            className="p-0 bg-transparent shadow-none hover:bg-transparent focus:bg-transparent active:bg-transparent hover:shadow-none"
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <MoonIcon className="w-6 h-6 text-black" strokeWidth={2} />
            )}
          </Button>

          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="w-6 h-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
