import { createContext, type Dispatch, type SetStateAction } from "react";
import type { IProduct } from "./Interface";

interface ICartContext {
    shoppingCart: IProduct[];
    setShoppingCart: Dispatch<SetStateAction<IProduct[]>>;
}
// const CartContext = createContext();
const CartContext = createContext<ICartContext|null>(null);

export default CartContext ; 