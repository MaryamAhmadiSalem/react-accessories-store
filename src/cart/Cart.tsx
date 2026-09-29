import { useContext } from "react";
import { ShoppingCart, X} from 'lucide-react'
import CartContext from "../Context";
import ProductCarte from "../home/ProductCarte";
import type { IProductCart } from "../Interface";

const Cart =()=>{
    const { shoppingCart , setShoppingCart} = useContext(CartContext)! ;
    const deleteItem = (id : number)=>{
        let items = shoppingCart.find(x => x.id === id)
        if(items !== undefined){
            if(items.quantity > 1){
                setShoppingCart(
                    shoppingCart.map((x)=>{
                       return  x.id === id ? {...x , quantity : x.quantity - 1} : x
                    })
                )
            }
            else{
                const deleted : IProductCart[] = shoppingCart.filter(x => x.id !== id)
                setShoppingCart(deleted) ;
            }
        }
    }
    return(
        <div style={{display : 'flex', flexDirection : 'row' , flexWrap: 'wrap'}}>
            {shoppingCart.length > 0 ? shoppingCart.map((item)=>{
                return(
                    <div key={item.id} style={{margin : '20px'}}>
                        <ProductCarte id={item?.id} title={item?.title} price={item?.price} image={item?.image} quantity={item?.quantity}>
                            <p style={{color : '#584120' , marginLeft : '200px' , fontSize : '25px'}}>deleted:
                                <button className="deleteItem" onClick={()=>deleteItem(item.id)}>
                                    <X style={{marginTop : '4px'}}/>
                                </button>
                            </p>
                            
                        </ProductCarte>
                    </div>
                )
            }):<div className="nullShoppingCart">
                    <h1>The shopping cart is empty</h1>
                    <ShoppingCart size={120} strokeWidth={1}/>
                </div> 
            }
        </div>
    )
}
export default Cart ;