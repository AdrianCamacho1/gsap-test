import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGear,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import the gear icon object
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            alt="SL logo"
          >
            <img src={Logo} className="h-14" alt="SLS Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              SiteLaunch Studio
            </span>
          </Link>
          <div className="flex items-center text-xl cursor-pointer text-gray-500 dark:text-white">
            <FontAwesomeIcon
              onClick={() => setDarkMode(!darkMode)}
              icon={faGear}
            />
            <FontAwesomeIcon
              onClick={() => setSearchSection(!searchSection)}
              icon={faMagnifyingGlass}
            />
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">
                0
              </span>
            </Link>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </nav>
      {searchSection && <Search />}
    </header>
  );
};
