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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Docs", link: "/docs" },
  { name: "Lodge", link: "/lodge" },
];

const NavList = () => (
  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {navItems.map((item) => (
      <Typography
        key={item.name}
        as="li"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <NavLink
          to={item.link}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors text-primary"
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
  const { user, loading } = useContext(AuthContext);
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
    <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            {loading ? (
              <Spinner />
            ) : user ? (
              <Button>Log Out</Button>
            ) : (
              <Button>
                <Link to="login">Login</Link>
              </Button>
            )}
          </div>
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
