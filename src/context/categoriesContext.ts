import { createContext } from "react";

export interface categoryContext  {
  categories: string[],
  selected: string | null,
  setSelected: (category: string | null) => void
} 

export const categoriesContext = createContext<categoryContext>({
  categories: [],
  selected: null,
  setSelected: () => {},
});