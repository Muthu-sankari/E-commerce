import React from 'react'
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId }=useParams();
  const product=all_product.find((e)=>e.id===Number(productId)
  return (
    <div>Product</div>
  )
}

export default Product