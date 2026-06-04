import {
  Button,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice.js";

function Header() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          pruthvi's
        </span>
        <span className="text-light-text dark:text-dark-text">Blog</span>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img
                src={currentUser.photoURL}
                alt="profile"
                className="w-9 h-9 rounded-full cursor-pointer hover:opacity-95"
              />
            }
          >
            <DropdownHeader className="hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </DropdownHeader>
            <Link to="/dashboard?tab=profile">
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <Link to="/sign-in">
              <DropdownItem>Sign out</DropdownItem>
            </Link>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button color="purple" pill outline>
              Sign In
            </Button>
          </Link>
        )}
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink active={pathname === "/"} as={Link} to="/">
          Home
        </NavbarLink>
        <NavbarLink active={pathname === "/about"} as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink active={pathname === "/project"} as={Link} to="/project">
          Project
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
