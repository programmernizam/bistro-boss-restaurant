import { NavLink } from "react-router-dom";
import logoText from "../../assets/logo_text.png";
import Container from "./Container";
const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "text-white hover:bg-transparent font-medium hover:text-primary"
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
              ? "text-primary font-medium"
              : "text-white hover:bg-transparent font-medium hover:text-primary"
          }
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "text-white hover:bg-transparent font-medium hover:text-primary"
          }
          to={"/our-menu"}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "text-white hover:bg-transparent font-medium hover:text-primary"
          }
          to={"/shop"}
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-black/50 py-2 relative z-50">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <NavLink to={"/"}>
              <img src={logoText} className="max-w-[160px]" alt="logo text" />
            </NavLink>
          </div>
          <div className="navbar-end">
            <ul className="lg:flex gap-8 hidden uppercase">{menuItem}</ul>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost text-white lg:hidden"
              >
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
