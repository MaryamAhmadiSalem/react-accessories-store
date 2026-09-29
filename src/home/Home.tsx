import { useEffect, useState } from "react";
import Poster from "./Poster";
import Axios  from "axios";
import ProductCarte from "./ProductCarte";
import type { IProductAPI } from "../Interface";  

const Home = ()=>{
    useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then((res)=>{
        console.log(res.data)
        setProducts(res.data)
        })
    },[]);
    
    let [products , setProducts] = useState<IProductAPI[]>()
    return(
        <div>
            <Poster/>
            <div className="product">
                {products?.map((product)=>{
                    return(
                        <ProductCarte key={product.id} title={product.title} price={product.price} image={product.image} id={product.id}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Home ; 