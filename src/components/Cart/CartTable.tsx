import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Product } from "../../types/Product";
import CartItem from "./CartItem";

const CartTable = () => {
    const { products } = useContext(cartContext)
    return (
        <div className="overflow-x-auto py-5">
            <div className="text-center border border-white rounded-lg font-semibold mx-auto ">
                <div className="grid grid-cols-6 justify-items-stretch border-b w-full">
                    <div className="border-r border-white col-span-2 py-2">
                        <p>Product</p>
                    </div>
                    <div className="border-x border-white py-2">
                        <p>Unit price</p>
                    </div>
                    <div className="border-x border-white py-2">
                        <p>Quantity</p>
                    </div>
                    <div className="border-x border-white py-2">
                        <p>Subtotal</p>
                    </div>
                    <div className="border-l border-white py-2">
                    </div>
                </div>
                {
                    products.length > 0 ?
                        <div className="grid grid-cols-6 justify-items-stretch overflow-x-auto w-full">
                            {products.map((prod:Product)=>(
                                <CartItem product={prod} key={prod.id}/>
                            ))}
                        </div>
                        :
                        <div className="w-full py-10">
                            <p className="text-center font-semibold">No items were added to your cart</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default CartTable;