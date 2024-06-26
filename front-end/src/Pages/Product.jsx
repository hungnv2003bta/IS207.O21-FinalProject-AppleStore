import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Navbar from '../Components/Navbar/Navbar';

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  const category = product ? product.category : '';
  const id = product ? product.id : '';

  return (
    <>
      <Navbar />
      <div>
        <ProductDisplay product={product} />
        {product && <RelatedProducts category={category} id={id} />}
      </div>
    </>
  );
};

export default Product;
