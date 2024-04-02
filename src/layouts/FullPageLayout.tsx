import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { categoriesContext, categoryContext } from "../context/categoriesContext";

const FullPageLayout = () => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((err) => console.error(err));
  }, []);

  const [selected, setSelected] = useState<string | null>(null);

  const contextValue: categoryContext = {
    categories: categories,
    selected,
    setSelected
  };

  return (
    <div
      className="w-full flex flex-col h-dvh"
      data-theme="dark"
    >
      <categoriesContext.Provider value={contextValue}>
        <Navbar/>
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer/>
      </categoriesContext.Provider>
    </div>
  );
};

export default FullPageLayout;