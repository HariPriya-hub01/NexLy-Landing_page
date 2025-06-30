import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b  border-neutral-300 dark:border-neutral-700 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-50 via-rose-100 to-white text-blue-950 dark:bg-none dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <a href="#home" className="text-xl tracking-tight">NexLy</a>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12 tracking-normal">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover-underline-animation">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop theme toggle */}
          <div className="hidden lg:flex justify-center space-x-3 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-neutral-700  dark:bg-black hover:scale-110 hover:bg-neutral-950 dark:hover:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-50" />}
            </button>
            <a href="#" className="py-2 px-3 rounded-md hover:bg-yellow-400 dark:hover:bg-rose-600">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-yellow-200 to-rose-500 dark:from-yellow-600 dark:to-rose-600 py-2 px-3 rounded-md hover:bg-none hover:bg-yellow-400 dark:hover:bg-rose-600"
            >
              Create an account
            </a>
          </div>

          {/* Mobile theme toggle */}
          <div className="lg:hidden md:flex-col justify-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex-col mr-8 p-2 rounded-full bg-neutral-700  dark:bg-black hover:scale-110 hover:bg-neutral-950 dark:hover:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              <div className="transition-transform duration-500 ease-in-out transform">
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-50" />}
              </div>
            </button>

            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* mobile nav bar */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 rounded-b-3xl bg-gradient-to-tr from-red-300 via-yellow-50 to-white text-blue-950 dark:bg-none dark:bg-neutral-900 dark:text-neutral-100 w-full p-12 flex flex-col justify-center items-center lg:hidden text-center">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 hover:underline decoration-rose-800 dark:decoration-yellow-500 underline-offset-4 decoration-2 hover:text-xl "
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="py-2 px-3 rounded-md hover:bg-yellow-400 dark:hover:bg-rose-600 ">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-yellow-200 to-rose-500 dark:from-yellow-600 dark:to-rose-600 hover:bg-none hover:bg-yellow-400 dark:hover:bg-rose-600"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
