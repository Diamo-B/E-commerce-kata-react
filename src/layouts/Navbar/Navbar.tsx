import NavbarStart from "./NavbarStart";
import NavbarCenter from "./NavbarCenter";
import NavbarEnd from "./NavbarEnd";
import { useContext } from "react";
import { categoriesContext } from "../../context/categoriesContext";

const Navbar = () => {
  const {categories, setSelected} = useContext(categoriesContext);

  return (
    <div className="navbar bg-base-100 border-b border-neutral-600">
      <NavbarStart categories={categories} setSelected={setSelected}/>
      <NavbarCenter categories={categories} setSelected={setSelected}/>
      <NavbarEnd/>
    </div>
  );
};

export default Navbar;
