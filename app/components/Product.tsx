import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";

// fetching all parameters wanted
export default function Product({ 
    name, 
    image, 
    price, 
    metadata 
}: ProductType) {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h1>{name}</h1>
      {price !== null ? formatPrice(price) : 'N/A'}
      <h1>{metadata}</h1>
    </div>
  );
}
