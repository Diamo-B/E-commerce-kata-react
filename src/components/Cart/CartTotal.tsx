type Props = {
    subTotal: number;
};

const CartTotal = ({ subTotal }: Props) => {
    return (
        <>
            <div className="w-full px-5">
                <div className="flex justify-between">
                    <p className="text-base font-semibold">Subtotal</p>
                    <p className="text-base font-semibold">
                        $ {subTotal.toFixed(2)}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm font-semibold">Tax (10%)</p>
                    <p className="text-sm font-semibold">
                        $ {((subTotal * 10) / 100).toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="border-2 !border-gray-100 w-full"></div>
            <div className="flex justify-evenly items-center w-full mb-5">
                <div className="text-lg font-bold">
                    <p className="text-white">
                        Total: $ {(subTotal + (subTotal * 10) / 100).toFixed(2)}
                    </p>
                </div>
                <button className="min-h-0 !h-fit border-2 py-2 px-5 rounded-full btn btn-success text-white">
                    Checkout
                </button>
            </div>
        </>
    );
};

export default CartTotal;
