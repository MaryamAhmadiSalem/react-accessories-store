export interface IProductAPI {
    id : number ;
    title : string ;
    price: number;
    description: string;
    category: string;
    image: string;
}
export interface IProductCart{
    id : number ;
    title : string ;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity : number ;
}