/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import menu from 'assets/Group 48.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full z-50">
      <nav className="bg-navColor px-5 sm:py-0 lg:px-28  xl:px-44   ">
        <div className="flex flex-row justify-between py-4 md:py-0 items-center">
          <a
            href="/"
            className="text-white text- text-4xl"
            style={{ fontFamily: 'Pacifico' }}
          >
            Precious Puppies
          </a>
          <ul className="flex flex-row justify-end items-center  py-7 toggle hidden md:flex ">
            <a
              href="#collection"
              className="cursor-pointer text-2xl font-bold mr-8 text-white "
            >
              Collection
            </a>

            <a
              href="#road_map"
              className="cursor-pointer text-2xl font-bold mr-8 text-white "
            >
              Roadmap
            </a>

            <a
              href="#team"
              className="cursor-pointer text-2xl font-bold mr-8 text-white"
            >
              Team
            </a>
          </ul>

          <div className="flex justify-end  items-center md:hidden py-2">
            <button id="hamburger" onClick={() => setOpen(true)}>
              <img
                className={`${!open ? 'block' : 'block'}`}
                alt=""
                src={menu}
              />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${open ? 'left-0' : 'left-full'} fixed inset-0 z-50  `}
        onClick={() => setOpen(false)}
      >
        <ul
          className={`${
            open ? 'right-0' : '-right-96'
          } flex flex-col justify-center items-center md:hidden rounded-tl-3xl rounded-bl-3xl pt-24 pb-32 w-72 bg-sideBarColor bg-opacity-80 fixed z-50 top-2 duration-100 transition-all `}
        >
          <a
            href="#collection"
            className="cursor-pointer text-2xl font-bold text-white "
          >
            Collection
          </a>

          <a
            href="#road_map"
            className="cursor-pointer text-2xl font-bold py-20  text-white "
          >
            Road Map
          </a>

          <a
            href="#team"
            className="cursor-pointer text-2xl font-bold  text-white"
          >
            Team
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
