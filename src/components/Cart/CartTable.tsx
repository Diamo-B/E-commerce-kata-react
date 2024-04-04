import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CartItem from "./CartItem";
import { ICartItem } from "../../types/Cart";
import { v4 } from "uuid";
const CartTable = () => {
    const { items } = useContext(cartContext);

    return (
        <div className="overflow-x-auto py-5 w-full">
            <h1 className="px-5 md:px-0 font-bold text-xl mb-5">Cart</h1>

            {/* Desktop */}
            <div className="hidden md:block text-center border border-white rounded-lg font-semibold mx-auto ">
                <div className="grid grid-cols-5 justify-items-stretch border-b w-full">
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
                </div>
                {items.length > 0 ? (
                    <div className="grid grid-cols-5 justify-items-stretch overflow-x-auto w-full">
                        {items.map((item: ICartItem, index: number) => (
                            <CartItem
                                cartItem={item}
                                key={v4()}
                                isLast={index === items.length - 1}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="w-full py-10">
                        <p className="text-center font-semibold">
                            No items were added to your cart
                        </p>
                    </div>
                )}
            </div>
            {/* mobile */}
            <div className="flex flex-col gap-2 md:hidden w-full py-5 px-2">
                {items.length > 0 ? (
                    items.map((item: ICartItem) => <CartItem cartItem={item} key={v4()} />)
                ) : (
                    <div className="flex-1 h-full"></div>
                )}
            </div>
        </div>
    );
};

export default CartTable;
