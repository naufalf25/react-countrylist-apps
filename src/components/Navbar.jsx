import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setDark(true);
    }
  }, []);

  const handleDarkModeEvent = () => {
    if (localStorage.theme === 'dark') {
      localStorage.removeItem('theme');
      setDark(false);
      document.documentElement.classList.remove('dark');

      return;
    }

    localStorage.setItem('theme', 'dark');
    setDark(true);
    document.documentElement.classList.add('dark');
  };

  return (
    <div className="px-5 py-6 md:px-12 lg:px-20 flex justify-between items-center shadow-md dark-transition dark:bg-dark-element">
      <div className="dark:text-white">
        <h1 className="font-extrabold md:text-lg lg:text-xl">
          Where in the world?
        </h1>
      </div>
      <button
        onClick={handleDarkModeEvent}
        className="flex gap-2 items-center text-sm font-semibold md:text-base lg:text-lg dark:text-white hover:opacity-70"
      >
        {dark ? (
          <>
            <IoSunnyOutline className="text-lg" />
            <p>Light Mode</p>
          </>
        ) : (
          <>
            <IoMoonOutline className="text-lg" />
            <p>Dark Mode</p>
          </>
        )}
      </button>
    </div>
  );
};

export default Navbar;
