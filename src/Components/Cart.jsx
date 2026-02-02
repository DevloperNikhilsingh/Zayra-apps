import React from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {cartItems.length === 0 ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <p className="text-2xl text-gray-500 font-semibold text-center">
            Your cart is empty. Let’s add something.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-lg"
              >
                <NavLink to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </NavLink>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="text-yellow-400 mt-1">⭐ ⭐ ⭐ ⭐</div>
                  <p className="mt-1 font-semibold">₹{item.price}</p>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRICE SUMMARY */}
          <div className="border rounded-lg p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-fit">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="w-full mt-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
