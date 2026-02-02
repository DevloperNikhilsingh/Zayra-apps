import React from 'react'
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
function Checkout() {
    const { cartItems } = useCart();
    const {state} = useLocation();
    const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [shipping, setShipping] = useState("");
    const [tel, setTel] = useState("");
    const navigate = useNavigate();
    const { clearCart } = useCart();
    const buyNowProduct = state?.buyNowProduct;
    //BUY NOW KO PRIORITY 
  const productsToShow = buyNowProduct ? [buyNowProduct] : cartItems;

     const totalPrice = productsToShow.reduce((total, item) => total + item.price, 0);

      const handlePlaceOrder = () => {
    if (name == "" || email == "" || shipping == "" || tel == "") {
      alert("Please fill all fields!");
      return;
    }else{
    alert(`Order placed successfully!\nPayment method: ${paymentMethod}\nTotal: ₹${totalPrice}`);
  }
  //FORM RESET KARNE KE LIYE
  setName("");
  setEmail("");
  setShipping("");
  setTel("");
  clearCart();
  navigate("/", { replace: true});
  };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className='text-xl font-bold'>Checkout</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 border-2 p-2 border-black shadow-sm'>
                <div>
                    <h1 className='text-sm font-semibold'>Billing Detail</h1>
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' id="" className='w-full border p-2 mt-2' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='E-Mail Address' id="" className='w-full border p-2 mt-2' />
                    <input type="shipping" value={shipping} onChange={(e) => setShipping(e.target.value)}  placeholder='Shipping Detail' id="" className='w-full border p-2 mt-2' />
                    <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)}  placeholder='Phone Number' id="" className='w-full border p-2 mt-2' />

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-3">Select Payment Method</h2>

                        <div className="flex flex-col gap-3">
                            {/* Credit / Debit Card */}
                            <label className="flex items-center gap-2 p-2 border rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Credit/Debit Card"
                                    checked={paymentMethod === "Credit/Debit Card"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="accent-black w-4 h-4"
                                />
                                Credit / Debit Card
                            </label>

                            {/* UPI / Net Banking */}
                            <label className="flex items-center gap-2 p-2 border rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="UPI/Net Banking"
                                    checked={paymentMethod === "UPI/Net Banking"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="accent-black w-4 h-4"
                                />
                                UPI / Net Banking
                            </label>

                            {/* Cash on Delivery */}
                            <label className="flex items-center gap-2 p-2 border rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Cash on Delivery"
                                    checked={paymentMethod === "Cash on Delivery"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="accent-black w-4 h-4"
                                />
                                Cash on Delivery
                            </label>
                        </div> 

                        <p className="mt-2 text-gray-500 text-sm">
                            Selected Payment: <span className="font-semibold">{paymentMethod}</span>
                        </p>
                    </div>
                </div>

                <div className="border rounded-lg p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-fit">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="space-y-4">
          {productsToShow.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">₹{item.price}</p>
              </div>
              <p className="font-semibold">1</p> {/* Quantity default 1 */}
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between font-bold text-xl mt-2">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          type='button'
          className="w-full mt-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Place Order
        </button>
      </div>
            </div>
        </div>
    )
}

export default Checkout
