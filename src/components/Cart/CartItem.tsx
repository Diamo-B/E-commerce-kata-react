import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ICartItem } from "../../types/Cart";
import { cartContext } from "../../context/cartContext";
import QuantityComponent from "./QuantityComponent";
import sliceProductTitle from "../../utils/sliceProductTitle";
import { BiTrash } from "react-icons/bi";
type Props = {
    cartItem: ICartItem;
    isLast?: boolean;
};

const CartItem = ({ cartItem, isLast }: Props) => {
    const { removeCartItem } = useContext(cartContext);
    console.log(isLast);

    return (
        /* desktop */
        <>
            <div
                className={twMerge(
                    "hidden md:flex border-r border-white col-span-2 py-4 px-5 items-center gap-2",
                    !isLast && "border-b-2"
                )}
            >
                <button
                    className="h-full rounded-full btn btn-error text-white min-w-0 w-fit px-0"
                    onClick={() => removeCartItem(cartItem.product.id)}
                >
                    <BiTrash className="size-5" />
                </button>
                <div
                    className="size-24 bg-clip-border bg-contain bg-white rounded-xl bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${cartItem.product.image})`,
                    }}
                ></div>
                <p>{cartItem.product.title}</p>
            </div>
            <div
                className={twMerge(
                    "hidden md:flex border-x border-white items-center justify-center",
                    !isLast && "border-b-2"
                )}
            >
                <p>$ {cartItem.product.price.toFixed(2)}</p>
            </div>
            <div
                className={twMerge(
                    "hidden md:flex border-x border-white py-2 justify-center items-center",
                    !isLast && "border-b-2"
                )}
            >
                <QuantityComponent
                    cartItemId={cartItem.product.id}
                    quantity={cartItem.quantity}
                />
            </div>
            <div
                className={twMerge(
                    "hidden md:flex border-x border-white items-center justify-center",
                    !isLast && "border-b-2"
                )}
            >
                <p>
                    $ {(cartItem.product.price * cartItem.quantity).toFixed(2)}
                </p>
            </div>

            {/* Mobile */}
            <div className="md:hidden grid grid-cols-2 border-2 p-2 rounded-xl">
                <div className="flex gap-2 items-center">
                    <button
                        className="h-full rounded-full btn btn-error text-white min-w-0 w-fit px-0"
                        onClick={() => removeCartItem(cartItem.product.id)}
                    >
                        <BiTrash className="size-5" />
                    </button>
                    <div
                        className="h-16 w-24 bg-contain bg-white rounded-xl bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url(${cartItem.product.image})`,
                        }}
                    ></div>
                    <h1 className="text-xs">
                        {sliceProductTitle(cartItem.product.title, 20)}
                    </h1>
                </div>
                <div className="grid grid-cols-2 justify-content-center place-items-center">
                    <div className="flex">
                        <QuantityComponent
                            cartItemId={cartItem.product.id}
                            quantity={cartItem.quantity}
                        />
                    </div>
                    <p>
                        ${" "}
                        {(cartItem.product.price * cartItem.quantity).toFixed(
                            2
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};

export default CartItem;
