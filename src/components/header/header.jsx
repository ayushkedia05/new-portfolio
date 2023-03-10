import { Drawer } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClose = () => setNav(!nav);

  const handleNav = () => {
    setNav(!nav);
  };

  window.onscroll = function () {
    setNav(false);
  };

  const handlehover = (e) => {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      // const logo = link.closest(".nav").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = 0.5;
      });
      // logo.style.opacity = 0.5;
    }
  };

  const handleout = (e) => {
    if (e.target.classList.contains("nav__link")) {
      // alert("dd")
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      // const logo = link.closest(".nav").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = 1;
      });
      // logo.style.opacity = 1;
    }
  };

  return (
    <React.Fragment>
      <div className=" h-20 bg-slate-700">
      <div className="flex justify-center max-w-[80%] mx-auto pt-7 text-white nav ">
        <div className="md:flex justify-between items-center flex-auto w-[80%] z-40">
          <div>Ayush kedia</div>


          <ul className="hidden md:flex">
            <li>

              <Link
                to="Hero"
                className="p-7 nav__link cursor-pointer font-medium"
                smooth={true}
                duration={500}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Home
              </Link>
            </li>
            <li>

              <Link
                to="About"
                className="p-7 nav__link cursor-pointer font-medium"
                smooth={true}
                offset={-200}
                duration={500}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                About
              </Link>
            </li>
            <li>

              <Link
                to="features"
                className="p-7 nav__link cursor-pointer font-medium"
                smooth={true}
                duration={500}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Projects
              </Link>
            </li>
            <li>

              <Link
                className="p-7 nav__link cursor-pointer font-medium"
                smooth={true}
                offset={-200}
                duration={1000}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Skills
              </Link>
            </li>
            <li>

              <Link
                to="Contact"
                className="p-7 nav__link cursor-pointer font-medium"
                smooth={true}
                offset={-100}
                duration={1000}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex justify-between md:hidden">
            <Drawer position="right" size="sm" opened={nav} onClose={()=>handleNav()}
        overlayProps={{ opacity: 0.8, blur: 4 }} withCloseButton={false}>
          <ul
          >

            <li className="p-4">

              <Link
                onClick={handleClose}
                to="Hero"
                className="p-4 nav__link cursor-pointer border-gray-400"
                smooth={true}
                duration={500}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Home
              </Link>
            </li>
            <li className="p-4">

              <Link
                onClick={handleClose}
                to="About"
                className="p-4 nav__link cursor-pointer border-gray-400"
                smooth={true}
                offset={-200}
                duration={500}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                About
              </Link>
            </li>
            <li className="p-4">

              <Link
                onClick={handleClose}
                to="features"
                className="p-4 nav__link cursor-pointer border-gray-400"
                smooth={true}
                duration={500}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Projects
              </Link>
            </li>
            <li className="p-4">

              <Link
                onClick={handleClose}
                className="p-4 nav__link cursor-pointer border-gray-400"
                smooth={true}
                offset={-200}
                duration={1000}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Skills
              </Link>
            </li>
            <li className="p-4">

              <Link
                onClick={handleClose}
                to="Contact"
                className="p-4 nav__link cursor-pointer"
                smooth={true}
                offset={-100}
                duration={1000}
                onMouseOver={handlehover}
                onMouseOut={handleout}
              >
                Contact
              </Link>
            </li>
          </ul>
          </Drawer>
          <div onClick={handleNav} className="block md:hidden float-right">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      </div>
    </React.Fragment>

  );
};

export default Navbar;