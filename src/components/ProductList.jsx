import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, addToCart } from '../store/cartReducer';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  const handleBuy = product => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id}>
            <img src={product.images[0]} />
            <h2>{product.title}</h2>
            <p>Price: {product.price}$</p> 
            <p>Brand: {product.brand}</p>
            <button onClick={() => handleBuy(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;