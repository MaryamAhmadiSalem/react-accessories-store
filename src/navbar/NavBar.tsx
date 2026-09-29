import { House, ShoppingCart, User, Info } from "lucide-react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import CartContext from "../Context";

const NavBar = ()=>{
    const { shoppingCart } = useContext(CartContext)!;

    return(
        <nav>
            <div className="left">
                <Link to='/account'>
                    <User size={40} strokeWidth={1.5} className="navIcon"/>
                </Link>
                <Link to='/cart'>
                    <ShoppingCart size={40} strokeWidth={1.5} className="navIcon"/>
                </Link>
                <h4 className="countCart">{shoppingCart.length}</h4>
            </div>
            <h1>Maria Accessory</h1>
            <div className="right">
                <Link to='/about'>
                    <Info size={40} strokeWidth={1.5} className="navIcon"/>
                </Link>
                <Link to='/'>
                    <House size={40} strokeWidth={1.5} className="navIcon"/> 
                </Link>
            </div>
        </nav>
    )
}
export default NavBar ;