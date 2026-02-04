import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import BlurText from "../pages/BlurText";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* FOR MOBILE VIEW */}
      <div className="md:hidden relative">
        <div className="flex items-center justify-between px-2 h-16 bg-[#B5B5A1] shadow">
          <div className="flex items-center gap-16">
            <img
              src={logo}
              alt="logo"
              className="w-14 h-14 object-cover"
            />
          </div>
          <BlurText
            text="My Recipe"
            animateBy="words"
            direction="top"
            delay={200}
            className="font-semibold text-lg"
          />
          <button
            onClick={() => setOpen(true)}
            className="text-xl font-semibold"
          >
            ☰
          </button>
        </div>

        {open && (
          <div
            className="fixed inset-0 bg-white z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full w-50 bg-[#B5B5A1] z-50 transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            className="p-2 font-bold text-xl"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <ul className="flex mt-6 p-2 flex-col gap-8 font-bold text-2xl">
            <li onClick={() => setOpen(false)}>
              <NavLink
                className={(e) => (e.isActive ? "text-white" : "")}
                to="/"
              >
                <BlurText
                  text="Home"
                  animateBy="words"
                  direction="top"
                  delay={200}
                  className="font-semibold text-2xl"
                />
              </NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink
                className={(e) => (e.isActive ? "text-white" : "")}
                to="/product"
              >
                <BlurText
                  text="Product"
                  animateBy="words"
                  direction="top"
                  delay={200}
                  className="font-semibold text-2xl"
                />
              </NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink
                className={(e) => (e.isActive ? "text-white" : "")}
                to="/create"
              >
                <BlurText
                  text="Create"
                  animateBy="words"
                  direction="top"
                  delay={200}
                  className="font-semibold text-2xl"
                />
              </NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink
                className={(e) => (e.isActive ? "text-white" : "")}
                to="/about"
              >
                <BlurText
                  text="About"
                  animateBy="words"
                  direction="top"
                  delay={200}
                  className="font-semibold text-2xl"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* FOR DESKTOP VIEW */}
      <div className="hidden md:flex items-center justify-between px-3 py-2 bg-[#B5B5A1] shadow">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <BlurText
            text="My Recipe"
            animateBy="words"
            direction="top"
            delay={120}
            className="font-semibold text-lg"
          />
        </div>

        <div className="flex gap-5 font-semibold text-sm">
          <NavLink
            className={(e) => (e.isActive ? "text-white" : "")}
            to="/"
          >
            <BlurText
              text="Home"
              animateBy="words"
              direction="top"
              delay={200}
              className="font-medium text-sm"
            />
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-white" : "")}
            to="/product"
          >
            <BlurText
              text="Product"
              animateBy="words"
              direction="top"
              delay={200}
              className="font-medium text-sm"
            />
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-white" : "")}
            to="/create"
          >
            <BlurText
              text="Create-Recipes"
              animateBy="words"
              direction="top"
              delay={200}
              className="font-medium text-sm"
            />
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-white" : "")}
            to="/about"
          >
            <BlurText
              text="About"
              animateBy="words"
              direction="top"
              delay={200}
              className="font-medium text-sm"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;


        