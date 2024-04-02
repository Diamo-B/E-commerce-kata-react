import { useContext, useEffect, useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import ProductCard from "./productCard";
import { categoriesContext } from "../context/categoriesContext";
import { Product } from "../types/Product";


const Home = () => {
    const { selected: selectedCategory, setSelected } = useContext(categoriesContext);

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    //? Fetching products data
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json: Product[]) => setTimeout(() => { setProducts(json) }, 2000))
            .catch((err) => console.error(err));
    }, []);

    //? Filtering products using category
    useEffect(() => {
        setFilteredProducts(() =>
            selectedCategory ? products.filter((item) => item.category == selectedCategory) : products
        )
    }, [selectedCategory, products]);

    const removeFilter = () => {
        setSelected(null)
    }

    return (
        <div className="py-5 px-10 h-full">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-lg capitalize">{selectedCategory || "All Products"}</p>
                <button className="btn btn-error btn-outline rounded-full min-h-0 h-fit py-2 px-5 hover:!text-white" disabled={!selectedCategory} onClick={removeFilter}>
                    remove filter
                    <MdRemoveCircleOutline />
                </button>
            </div>
            <div className="w-full h-full grid grid-cols-5 justify-items-center place-content-center">
                {
                    filteredProducts.length > 0 ?
                        filteredProducts.map((prod: Product) => (
                            <div className="m-5" key={prod.id}>
                                <ProductCard product={prod} />
                            </div>
                        ))
                        :
                        <div className="h-full flex justify-center items-center col-span-5">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                }
            </div>
        </div>
    );
}

export default Home;