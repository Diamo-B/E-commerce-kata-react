import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { ICartItem } from "../types/Cart";
import { categoryContext } from "../context/categoriesContext";
import { ProductContext } from "../context/productsContext";
import { cartContext } from "../context/cartContext";

const useStoreInit = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    useEffect(() => {
        //? Fetching categories
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((json) => setCategories(json))
            .catch((err) => console.error(err));

        //? Fetching products data
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json: Product[]) =>
                setTimeout(() => {
                    setProducts(json);
                    console.log(json);
                }, 2000)
            )
            .catch((err) => console.error(err));
    }, []);

    const [selected, setSelected] = useState<string | null>(null);

    const categoryValue: categoryContext = {
        categories: categories,
        selected,
        setSelected,
    };

    const productsValue: ProductContext = {
        products: products,
    };

    const cartValues: cartContext = {
        items: cartItems,
        addCartItem(product) {
            setCartItems((prev) => {
                if (!prev.some((item) => item.product.id === product.id))
                    return [...prev, { product: product, quantity: 1 }];
                else return prev;
            });
        },
        removeCartItem(id) {
            setCartItems((prev) => {
                return prev.filter((item) => item.product.id !== id);
            });
        },
        incrementQuantity(id) {
            setCartItems((prev) => {
                return prev.map((item) => {
                    if (item.product.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
            });
        },
        decrementQuantity(id) {
            setCartItems((prev) => {
                return prev.map((item) => {
                    if (item.product.id === id && item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                });
            });
        },
    };

    return {categoryValue, cartValues, productsValue}
};

export default useStoreInit;
