import { useState } from "react";
import { Link } from "react-router-dom";

const OpenNav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navLinks = [
    { url: "/", title: "Homepage" },
    { url: "/downloader", title: "Downloader" },
    { url: "/", title: "Portfolio" },
  ];

  return (
    <div className="relative">
      <label className="btn btn-ghost btn-circle swap swap-rotate">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" onChange={() => setNavToggle(!navToggle)} />

        {/* <!-- hamburger icon --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="swap-off fill-current h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>

        {/* <!-- close icon --> */}
        <svg
          className="swap-on fill-current h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      <ul
        className={`absolute left-0 menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
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

export default OpenNav;
