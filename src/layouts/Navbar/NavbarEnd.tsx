import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const NavbarEnd = () => {
  const { items } = useContext(cartContext);
  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <NavLink
          role="button"
          className="mr-5 group hover:text-orange-500"
          to={"/cart"}
        >
          <div className="indicator">
            <BsCart2 className="size-5" />
            <span className="badge badge-sm indicator-item bg-base-300 group-hover:text-orange-500">
              {items.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarEnd;
