import { useParams, NavLink, Navigate, useNavigate, } from "react-router-dom";
import { allProducts } from "../AllData.js/Allproduct";
import { useContext, useState } from "react";
import { useCart } from "../context/CartContext";


const ProductDetail = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
      const { id } = useParams();
    const [selected, setselected] = useState(null);


      const product = allProducts.find(
        (item) => item.id === Number(id)
      );

    if (!product) {
        return <p>Product not found</p>;
    }

    const handleBuy = () => {
        navigate("/checkout", {
        state:{
           buyNowProduct: product,
        },
        });
    };

    return (
        <div className="max-w-6xl p-4 ">
            {/* BACK */}
            <NavLink to={"/shop"}
            >
                <h2 className="text-2xl text-left font-semibold">← Back to Shop</h2>
            </NavLink>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {/* IMAGE */}
                <div className="w-full flex flex-col">
                    <img src={product.image} alt={product.name} className="w-full rounded-xl shadow bg-gray-300" />
                    {/* Thumbnails */}
                    {/* <div className="flex gap-2 mt-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="w-20 h-20 object-cover border cursor-pointer hover:border-blue-500"
              onClick={() => setMainImage(img)} // Click changes main image
            />
          ))}
        </div> */}
                </div>

                {/* DETAIL */}
                <div className="w-full">
                    <p className="text-sm font-semibold text-gray-400">Brand: Addidas</p>
                    <h1 className="text-2xl font-bold mt-3">{product.name}</h1>
                    <div className="flex gap-1 mt-2">
                        ⭐ ⭐ ⭐ ⭐ <span className="text-gray-500">(4.0)</span>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-sm ">Select Size</p>
                        <div className="flex flex-wrap gap-3">
                            {product.sizes.map((sizes) => (
                                <button key={sizes}
                                    onClick={() => setselected(sizes)}
                                    className={`w-12 h-12 border rounded-md flex items-center justify-center text-sm font-semibold mt-2
          ${selected === sizes
                                            ? "bg-black text-white"
                                            : "hover:border-black"
                                        }`}
                                >
                                    {sizes}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-xl font-bold mt-3">₹{product.price}</p>
                    <p className="text-gray-400 text-sm font-semibold mt-3"> Premium quality fabric, stylish design and perfect
                        fitting. Suitable for daily wear and special occasions.</p>
                    <div className="flex gap-8 mt-5">
                        <button className="px-4 py-2 border-2 border-black rounded-md bg-black text-white active:bg-gray-700 transition-all duration-300" onClick={() => addToCart(item)} >Add to Cart</button>
                        <button className="px-4 py-2 border-2 border-black rounded-md active:bg-gray-300 transition-all duration-200" onClick={handleBuy}>Buy Now</button>
                    </div>
                    <div className="mt-8">
                        <p className="text-gray-400 text-sm font-semibold">✔ Free Delivery</p>
                        <p className="text-gray-400 text-sm font-semibold">✔ 7 Day's Return Policy</p>
                        <p className="text-gray-400 text-sm font-semibold">✔ Cash on Delivery</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
