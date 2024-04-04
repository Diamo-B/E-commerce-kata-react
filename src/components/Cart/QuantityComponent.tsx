import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { cartContext } from "../../context/cartContext";

type Props = {
    quantity: number,
    cartItemId: number
}

const QuantityComponent = ({quantity, cartItemId}:Props) => {
    const {incrementQuantity, decrementQuantity} = useContext(cartContext);
  return (
    <>
      <button
        className="border border-r-0 border-primary px-2 rounded-l-lg py-3 min-h-0 h-2 flex justify-center items-center"
        onClick={() => {
          decrementQuantity(cartItemId);
        }}
      >
        <FaMinus className="size-3"/>
      </button>
      <input
        type="text"
        className="text-center rounded-none border-y border-primary bg-transparent h-2 py-3 !w-5 text-base font-normal focus:outline-none"
        readOnly
        value={quantity}
      />
      <button
        className="border border-l-0 border-primary px-2 rounded-r-lg py-3 min-h-0 h-2 flex justify-center items-center"
        onClick={() => {
          incrementQuantity(cartItemId);
        }}
      >
        <FaPlus className="size-3"/>
      </button>
    </>
  );
};

export default QuantityComponent;
