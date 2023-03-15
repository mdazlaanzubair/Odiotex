import { useState } from "react";
import { Link } from "react-router-dom";
import AppLogoShort from "../../assets/app-logo-icon.png";

const AuthNav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navLinks = [
    { url: "/", title: "Profile" },
    { url: "/", title: "Settings" },
    { url: "/", title: "Logout" },
  ];

  return (
    <div className="relative">
      <label className="btn btn-ghost btn-circle swap swap-rotate">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" onChange={() => setNavToggle(!navToggle)} />

        {/* <!-- hamburger icon --> */}
        <div className="swap-off fill-current avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={AppLogoShort} />
          </div>
        </div>

        {/* <!-- close icon --> */}
        <svg
          className="swap-on fill-current h-5 w-5 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      <ul
        className={`absolute right-0 menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
          navToggle ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthNav;
