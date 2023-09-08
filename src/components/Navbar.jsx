import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cart.length);

  return (
    <div className="navbar">
      <h1>STORE</h1>
      <Link to="/cart">basket ({cartItems})</Link>
    </div>
  );
};

export default Navbar;
