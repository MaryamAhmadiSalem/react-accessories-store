import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../productDetails/ProductDetails";
import type { IProductAPI } from "../Interface";

const Product = ()=>{
    const {id} = useParams()
    const [product , setProduct ] = useState<IProductAPI>()

    useEffect(()=>{
        Axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
    },[id])

    return(
        <div>
            {product && 
             <ProductDetails id={product?.id} title={product?.title} price={product?.price} 
            description={product?.description} category={product?.category} image={product?.image}/>
            }
        </div>
    )
}
export default Product ; 