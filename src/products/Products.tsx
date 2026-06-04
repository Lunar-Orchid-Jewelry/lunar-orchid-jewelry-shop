import type { ProductItem } from "./Product"
import Product from "./Product"
import { useParams } from "react-router"

export type ProductsProps = {
  items: Record<string, ProductItem>,
}

// Page to show if the URL points to anything invalid, i.e. 404
const ProductFallback = () => {
  return (
    <>
      <h1>Oops, we didn't find that page, but take a look at these other items!</h1>
    </>
  )
}

const Products = ({ items }: ProductsProps) => {
  const params = useParams();
  if (!params.productId) {
    return <ProductFallback />
  }

  const item = items[params.productId];
  if (!item) {
    return <ProductFallback />
  }

  const product = <Product item={item} />
  return product
}

export default Products
