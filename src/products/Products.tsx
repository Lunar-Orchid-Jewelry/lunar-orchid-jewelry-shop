import { Route } from "react-router"
import type { ProductItem } from "./Product"
import Product from "./Product"

export type ProductsProps = {
  pages: ProductPage[],
}

export type ProductPage = {
  path: string,
  item: ProductItem,
}

const Products = ({ pages }: ProductsProps) => {
  return (
    <>
      {
        pages.map(({ path, item }, ix) => {
          const product = <Product ix={ix} item={item} />
          return <Route path={path} element={product} />;
        })
      }
    </>
  )
}

export default Products
