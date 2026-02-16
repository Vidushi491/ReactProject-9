import { useState } from "react";
import { NavLink } from "react-router-dom";
import BlurText from "../pages/BlurText";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">

      {/* FOR MOBILE VIEW */}

      <div className="md:hidden relative">
        <div className="flex items-center justify-between px-2 h-10 bg-black text-white shadow">
          <BlurText
            text="CookBook"
            animateBy="words"
            direction="top"
            delay={200}
            className="font-semibold text-lg"/>

          <button
            onClick={() => setOpen(true)}
            className="text-xl font-semibold text-white">
            ☰
          </button>

        </div>

        {open && (
          <div
            className="fixed inset-0 bg-white z-40"
            onClick={() => setOpen(false)}>
          </div>
        )}

        <div
        className={`fixed top-0 right-0 h-full w-50 text-white bg-black z-50 transform ${
        open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}>
        <button
        className="p-2 font-bold text-xl"
        onClick={() => setOpen(false)}>
        Close
        </button>

        <ul className="flex mt-6 p-2 flex-col gap-8 font-bold text-2xl">
        <li onClick={() => setOpen(false)}>
          <NavLink
          className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/">
          <BlurText
          text="Home"
          animateBy="words"
          direction="top"
          delay={200}
          className="font-semibold text-2xl"/>
          </NavLink>
        </li>

        <li onClick={() => setOpen(false)}>
          <NavLink
          className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/recipes">
          <BlurText
          text="Recipes"
          animateBy="words"
          direction="top"
          delay={200}
          className="font-semibold text-2xl"/>
          </NavLink>
        </li>

        <li onClick={() => setOpen(false)}>
          <NavLink
          className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/create-recipes">
          <BlurText
          text="Create"
          animateBy="words"
          direction="top"
          delay={200}
          className="font-semibold text-2xl"/>
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink
          className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/about">
          <BlurText
          text="About"
          animateBy="words"
          direction="top"
          delay={200}
          className="font-semibold text-2xl"/>
          </NavLink>
        </li>
      </ul>
    </div>
      </div>

      {/* FOR DESKTOP VIEW */}

      <div className="hidden md:flex items-center justify-between  px-4 py-1 bg-black shadow w-screen">

          <div className="flex items-center gap-3 text-white">
          <BlurText
            text="CookBook"
            animateBy="words"
            direction="top"
            delay={120}
            className="font-semibold text-lg" />
          </div>

        <div className="flex gap-5 font-semibold text-sm text-white">

          <NavLink className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/">
          <BlurText
            text="Home"
            animateBy="words"
            direction="top"
            delay={200}
            className="font-medium text-sm" />
          </NavLink>

          <NavLink
            className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/recipes">
          <BlurText
            text="Recipes"
            animateBy="words"
            direction="top"
            delay={200}
            className="font-medium text-sm"  />
          </NavLink>

          <NavLink
            className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/create-recipes">
          <BlurText
            text="Create"
            animateBy="words"
            direction="top"
            delay={200}
            className="font-medium text-sm"  />
          </NavLink>

          <NavLink
            className={(e) => (e.isActive ? "text-[#B99668]" : "")} to="/about" >
          <BlurText
            text="About"
            animateBy="words"
            direction="top"
            delay={200}
            className="font-medium text-sm"  />
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default Nav;
