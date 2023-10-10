import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoText from "../../assets/logo_text.png";
import Container from "./Container";
const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold hover:bg-transparent hover:text-white"
              : "text-white hover:bg-transparent hover:text-primary font-semibold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-white hover:bg-transparent hover:text-primary font-semibold"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-white hover:bg-transparent hover:text-primary font-semibold"
          }
          to={"/service"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-white hover:bg-transparent hover:text-primary font-semibold"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-black/50 py-2">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <NavLink to={"/"} className="flex items-end gap-2">
              <img className="max-w-[60px]" src={logo} alt="logo" />
              <img
                src={logoText}
                className="max-w-[160px] mb-[-3px]"
                alt="logo text"
              />
            </NavLink>
          </div>
          <div className="navbar-end">
            <ul className="menu px-1 hidden lg:menu-horizontal">{menuItem}</ul>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52 dropdown-content"
              >
                {menuItem}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;