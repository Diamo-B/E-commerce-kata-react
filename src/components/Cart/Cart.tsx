import { useContext, useEffect, useState } from "react";
import CartTable from "./CartTable";
import { cartContext } from "../../context/cartContext";
import CartTotal from "./CartTotal";

const Cart = () => {

    const {items} = useContext(cartContext);
    const [subTotal, setSubTotal] = useState<number>(0)
    useEffect(() => {
        console.log("in",items);
        setSubTotal(0)
        items.map((item)=>{
            setSubTotal(prev=> prev+item.product.price*item.quantity)
        })
    }, [items]);

    return ( 
        <>
            <div className="overflow-x-auto h-full flex flex-col justify-center items-center gap-5 md:w-3/4 mx-auto">
                <CartTable />
                <div className="border-2 !border-gray-100 w-full"></div>
                <CartTotal subTotal={subTotal}/>
            </div>
        </>
     );
}
 
export default Cart;