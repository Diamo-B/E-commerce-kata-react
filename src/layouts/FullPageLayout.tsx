import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { categoriesContext } from "../context/categoriesContext";
import { ProductsContext } from "../context/productsContext";
import { cartContext } from "../context/cartContext";
import useStoreInit from "../hooks/useStoreInit";

const FullPageLayout = () => {
  const { cartValues,categoryValue,productsValue } = useStoreInit();

  return (
    <div
      className="h-full w-full flex flex-col "
      data-theme="dark"
    >
      <categoriesContext.Provider value={categoryValue}>
        <cartContext.Provider value={cartValues}>
          <Navbar />
          <div className="flex-1">
            <ProductsContext.Provider value={productsValue}>
              <Outlet />
            </ProductsContext.Provider>
          </div>
        </cartContext.Provider>
        <Footer />
      </categoriesContext.Provider>
    </div>
  );
};

export default FullPageLayout;