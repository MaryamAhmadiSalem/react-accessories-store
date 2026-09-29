import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IProps{
    id : number ;
    title : string ;
    price : number ;
    image : string ;
    quantity?: number ;
    children?: ReactNode ;
}
const ProductCarte =(props : IProps)=>{
    const navigate = useNavigate();
    
    const goToTheProductsPage = () =>{
        navigate(`/product/${props.id}`)
    }
    return (
        <div className="productCarte">
            <div className="imageBox" onClick={goToTheProductsPage}>
                <img src={props.image} className="imageProdouct"/> 
            </div>
            <div className="titleBox">
                <h3 className="title">{props.title}</h3>
            </div>
            <div className="pricBox">
                <h2>${props.price}</h2>
            </div>
            <div className="quantityBox">
                {props.quantity && <h2>Count:{props.quantity}</h2>}
            </div>
            {props.children}
        </div>
    )
}
export default ProductCarte ;