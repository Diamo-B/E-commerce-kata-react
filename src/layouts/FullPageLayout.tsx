import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { categoriesContext, categoryContext } from "../context/categoriesContext";
import { Product } from "../types/Product";
import { ProductContext, ProductsContext } from "../context/productsContext";
import { cartContext } from "../context/cartContext";

const FullPageLayout = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    //? Fetching categories
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((err) => console.error(err));

    //? Fetching products data
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json: Product[]) => setTimeout(() => {
        setProducts(json); console.log(json);
      }, 2000))
      .catch((err) => console.error(err));
  }, []);

  const [selected, setSelected] = useState<string | null>(null);

  const categoryValue: categoryContext = {
    categories: categories,
    selected,
    setSelected
  };

  const productsValue: ProductContext = {
    products: products
  }

  const cartValues: cartContext = {
    products: cartProducts,
    addProduct(product) {
      setCartProducts(prev => {
        if (!prev.some(item => item.id === product.id))
          return [...prev, product];
        else 
          return prev;
      });
    }
  }

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