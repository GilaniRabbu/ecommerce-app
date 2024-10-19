import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useCart } from "../context/Cart";
import Layout from "../components/Layout/Layout";

const CartPage = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  // Total Price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="text-center">
          <h1>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
          <h3>
            {cart?.length
              ? `You Have ${cart.length} items in your cart ${
                  auth?.token ? "" : "please login to checkout"
                }`
              : "Your cart is empty"}
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="w-1/2">
            {cart?.map((p) => (
              <div className="flex flex-wrap gap-4 justify-start mb-4">
                <div className="p-2 border border-black">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                    className="mb-4 mx-auto inline-block w-32 object-cover"
                  />
                </div>
                <div className="p-2 border border-black">
                  <h4>{p.name}</h4>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>Price: ${p.price}</p>
                  <button onClick={() => removeCartItem(p._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 w-1/4 border border-black">
            <h3>Cart Summary</h3>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total: {totalPrice()}</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
