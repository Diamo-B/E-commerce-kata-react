import { useEffect, useState } from "react";
import NavbarStart from "./NavbarStart";
import NavbarCenter from "./NavbarCenter";
import NavbarEnd from "./NavbarEnd";
const Navbar = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="navbar bg-base-100">
      <NavbarStart categories={categories}/>
      <NavbarCenter categories={categories} />
      <NavbarEnd/>
    </div>
  );
};

export default Navbar;
