import { useContext } from "react";
import CartContext from "../Context";
import type { IProductAPI } from "../Interface";

const ProductDetails = (props : IProductAPI)=>{
    const { shoppingCart,  setShoppingCart } = useContext(CartContext)!;

    const addToBasket =(id : number)=>{
        let item = shoppingCart.find(x => x.id === id)
        if(item !== undefined){
            setShoppingCart((previousCart)=>{
                return previousCart.map((x)=>{
                    if(x.id === id){
                        return {...x , quantity : x.quantity + 1}
                    }
                    else return {...x}
                })
            })
        }
        else{ 
            setShoppingCart((previousCart)=>[...previousCart , { ...props , quantity: 1} ])
        } 
        alert("item has been added to the shopping cart.")
        console.log(shoppingCart)
    }

    return(
        <div className="productContainer">
            <div className="leftContainer">
                <div className="imageContainer">
                    <img className="pic" src={props.image}/>
                </div>
            </div>
            <div className="rightContainer">
                <div className="titleContainer">
                    <h2 style={{margin : '20px', color : '#685842'}}>{props.title}</h2>
                </div>
                <div className="categoryContainer">
                    <h2 style={{margin : '20px', color : '#685842'}}>{props.category}</h2>
                </div>
                <div className="descriptionContainer">
                    <h2 style={{margin : '20px', color : '#685842'}}>{props.description}</h2>
                </div>
                <div className="priceContainer">
                    <h2 style={{margin : '20px', color : '#685842'}}>${props.price}</h2>
                    <h3 className='addToBasket' onClick={()=>addToBasket(props.id)}>Add to basket🛒</h3>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails ; 