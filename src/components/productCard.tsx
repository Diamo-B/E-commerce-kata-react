import { BsCart2 } from "react-icons/bs";
import { Product } from "../types/Product";
import Rating from "./Rating";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import sliceProductTitle from "../utils/sliceProductTitle";


type Props = {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    const {addCartItem} = useContext(cartContext)

    return (
        <div className="w-56 py-5 px-5 border rounded-lg border-neutral flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer">
            <img src={product.image} alt="product's image" className="size-40 rounded-lg bg-contain mx-auto" />
            <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-center">
                    {sliceProductTitle(product.title)}
                </h1>
                <p className="text-center text-xs badge badge-accent badge-outline mx-auto">
                    {product.category}
                </p>
            </div>
            <div className="flex justify-between items-center w-full px-2">
                <Rating productRating={product.rating.rate}/>
                <p className="text-sm font-semibold">({product.rating.count})</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-center font-bold text-lg">$ {product.price}</p>
                <button className="btn btn-outline btn-primary !min-h-0 h-fit py-1 rounded-full group" onClick={()=>{addCartItem(product)}}>
                    <BsCart2 className="group-hover:text-white" />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;