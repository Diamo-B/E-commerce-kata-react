import { createContext } from "react";
import { Product } from "../types/Product";
import { ICartItem } from "../types/Cart";

export interface cartContext {
  items: ICartItem[];
  addCartItem: (product: Product) => void;
  removeCartItem: (id:number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void; 
}

export const cartContext = createContext<cartContext>({
  items:[],
  addCartItem: ()=>{},
  removeCartItem: ()=>{},
  incrementQuantity: ()=>{},
  decrementQuantity: ()=>{}
});
