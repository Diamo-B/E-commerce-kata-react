import { createContext } from "react";
import { Product } from "../types/Product";

export interface ProductContext {
  products:Product[]
}

export const ProductsContext = createContext<ProductContext>({
  products: [],
});
