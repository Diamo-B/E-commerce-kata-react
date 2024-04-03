import { useState } from "react";
import { Product } from "../../types/Product";
import { FaPlus, FaMinus } from "react-icons/fa";
type Props = {
    product: Product
}

const CartItem = ({ product }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    return (
        <>
            <div className="border-r border-white col-span-2 py-5 px-5 flex items-center gap-2">
                <img src={product.image} className="size-24 rounded-lg" />
                <p>{product.title}</p>
            </div>
            <div className="border-x border-white flex items-center justify-center">
                <p>$ {(product.price).toFixed(2)}</p>
            </div>
            <div className="border-x border-white py-2 flex justify-center items-center">
                <button className="border border-r-0 border-primary px-2 rounded-l-lg py-3 w-fit min-h-0 h-2 flex justify-center items-center"
                    onClick={() => { setQuantity(prev=>prev-1) }}
                >
                    <FaMinus />
                </button>
                <input type="text" className="text-center input input-primary rounded-none w-14 min-h-0 h-2 py-3 focus:outline-none" readOnly value={quantity}/>
                <button className="border border-l-0 border-primary px-2 rounded-r-lg py-3 w-fit min-h-0 h-2 flex justify-center items-center"
                    onClick={() => { setQuantity(prev => prev+1) }}
                >
                    <FaPlus />
                </button>
            </div>
            <div className="border-x border-white flex items-center justify-center">
                <p>$ {(product.price*quantity).toFixed(2)}</p>
            </div>
            <div className="border-l border-white py-2 flex justify-center items-center">
                <button className="btn btn-error min-h-0 h-fit py-2 px-5">
                    <p className="text-white font-semibold">remove</p>
                </button>
            </div>
        </>
    );
}

export default CartItem;