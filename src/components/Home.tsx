import { useContext, useEffect, useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import ProductCard from "./productCard";
import { categoriesContext } from "../context/categoriesContext";
import { Product } from "../types/Product";
import { ProductsContext } from "../context/productsContext";


const Home = () => {
    const { selected: selectedCategory, setSelected } = useContext(categoriesContext);
    const { products } = useContext(ProductsContext);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

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
        <div className={`bg-base-100 h-full py-5 px-10 flex flex-col`}>
            <div className="flex justify-between items-center">
                <p className="font-semibold text-lg capitalize">{selectedCategory || "All Products"}</p>
                <button className="btn btn-error btn-outline rounded-full min-h-0 h-fit py-2 px-5 hover:!text-white" disabled={!selectedCategory} onClick={removeFilter}>
                    remove filter
                    <MdRemoveCircleOutline />
                </button>
            </div>
            <div className="w-full h-full py-5 flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center place-content-center">
                {
                    filteredProducts.length > 0 ?
                        filteredProducts.map((prod: Product) => (
                            <div className="m-5" key={prod.id}>
                                <ProductCard product={prod} />
                            </div>
                        ))
                        : 
                    <div className="flex justify-center items-center col-span-5">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                }
            </div>
        </div>
    );
}

export default Home;