import { notFound } from "next/navigation"

export default function ProductDetails({params}: {params: {productId: string}}) {

    if(params.productId === "not-found"){
        notFound();
    }

    return (
        <h1>Product Details: {params.productId}</h1>
    )
}