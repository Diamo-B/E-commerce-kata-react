import { createContext } from "react";
import { Product } from "../types/Product";

export interface cartContext {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const cartContext = createContext<cartContext>({
  products: [],
  addProduct: ()=>{}
});
