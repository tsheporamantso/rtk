import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
