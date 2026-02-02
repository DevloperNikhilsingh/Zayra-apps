import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { HomeData } from '../Homedata.js/HomeData';

function Home() {
  const { addToCart } = useCart();

  const [selected, setselected] = useState(null);
  const visibleProducts = HomeData;
  return (
    <>
      <section className="relative min-h-screen bg-blue-50 overflow-hidden">
        {/* IMAGE */}
        <video
          src="/HomeBanner.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />


        {/* TEXT OVER IMAGE */}
        <div
          className="
      absolute top-1/2 -translate-y-1/2
      left-6 md:left-20
      z-10 max-w-xl
    "
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
            DISCOVER <br />
            CLOTHES <br />
            <span className="text-slate-500">
              UNIQUE STYLE
            </span>
          </h1>

          <p className="mt-5 text-gray-500 max-w-md">
            Explore a curated collection of clothing
            designed to elevate your everyday look.
          </p>
          <NavLink to={"/shop"}>
            <button className="mt-7 px-8 py-3 bg-black text-white rounded-full hover:bg-yellow-300 hover:border-2 hover:text-black hover:border-black transition-all duration-300">
              Shop Now
            </button>
          </NavLink>
        </div>

      </section>

      <div className="overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="inline-flex gap-10 animate-marquee">
          <span>🔥 New Arrivals</span>
          <span>🚚 Free Delivery</span>
          <span>⭐ Best Quality</span>
          <span>🔥 New Arrivals</span>
          <span>🚚 Free Delivery</span>
          <span>⭐ Best Quality</span>
        </div>
      </div>

      {/* Feature */}

      <div className='w-full m-auto p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/delivery.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105'/>
          <h3 className='font-semibold text-center mt-2 '>Online Order</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/save_mony.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center mt-2 font-semibold'>Save Money</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/customer.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2'>Happy customer</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/giveaway.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2'>Free Shoping</h3>
        </div>
      </div>

      {/* FEATURED PRODDUCT */}

      <div className='w-full m-auto p-5'>
        <h1 className='text-center text-3xl md:text-5xl font-bold '>Featured Products</h1>
        <p className='text-center text-[12px] md:text-[16px] font-semibold text-gray-400 mt-2'>Summer Collection New Modern Design</p>

        <div className='w-full m-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 '>
          {visibleProducts.map((item) => (
            <div key={item.id}
              className='border p-2 rounded shadow-[0_8px_24px_rgba(0,0,0,0.08)]' data-aos="fade-up">
              <NavLink to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className='w-full h-[250px] bg-gray-300 rounded-lg transition-transform duration-300 hover:scale-105' />
              </NavLink>
              <p className="text-gray-400 text-[12px] mt-2">
                Addidas
              </p>
              <h1 className='text-[14px] font-semibold'>{item.name}</h1>
              <div className="flex">
                ⭐ ⭐ ⭐ ⭐
              </div>
              <div className='w-full flex justify-between'>
                <p className='tex-sm font-semibold'>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>
                  <img
                    src="cart-large-minimalistic-svgrepo-com.svg"
                    alt=""
                    className="w-8 p-1 cursor-pointer active:shadow-lg active:bg-gray-400 hover:shadow-lg hover:bg-gray-400 transition-all duration-300 rounded-lg"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SALE BANNER */}

      <div className='w-full m-auto mt-6'>
        <div className="h-[200px] pt-6 bg-sale-banner bg-cover bg-center flex flex-col space-y-2 items-center">
          <h1 className='text-center text-3xl font-semibold'>Up to <span className='text-white'>70%</span> OFF</h1>
          <h2 className='text-center text-xl font-semibold'>On All ZAYRA Shirts & Essentials</h2>
          <p className='text-center text-sm '>Limited Time Offer • Hurry Up!</p>
          <NavLink to={"shop"}><button className='px-4 py-1 outline-none border-0 bg-white text-black text-[15px] hover:bg-black hover:text-white transition-all duration-500 active:bg-gray-300 shadow-md rounde-md'>Explore More</button></NavLink>
        </div>
      </div>

      {/* SOME BANNER */}

      <div className='w-full m-auto mt-1 p-8 flex flex-col gap-3'>
        <div className='w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='h-[300px] bg-banner bg-cover bg-center flex flex-col items-start justify-center p-4' data-aos="fade-right">
            <p className='text-gray-500 font-semibold text-left '>Mega Fashion Sale</p>
            <h1 className='font-bold text-3xl text-left'>Buy More, Save More</h1>
            <p className='text-gray-500 font-semibold text-left'>Limited time exclusive offers</p>
            <NavLink to={"shop"}><button className='px-4 py-1 border-0 outline-none bg-green-400 mt-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-300'>Shop Now</button></NavLink>
          </div>
          <div className='h-[300px] bg-banner2 bg-cover bg-center flex flex-col items-start justify-center p-4' data-aos="fade-right">
            <p className='text-gray-500 font-semibold text-left '>Spring Summer Edit</p>
            <h1 className='font-bold text-3xl text-left'>Fresh Styles Incoming</h1>
            <p className='text-gray-500 font-semibold text-left'>Comfort meets trend</p>
            <button className='px-4 py-1 border-2 border-slate-950 outline-none bg-transparent mt-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-300'>Collection</button>
          </div>
        </div>

        <div className='w-full m-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='h-[270px] bg-banner3 bg-cover bg-center flex flex-col items-start justify-end p-4'data-aos="fade-right" >
            <h1 className='text-3xl text-white font-bold text-left font-serif'>Trending This Season</h1>
            <p className='text-[12px] text-gray-500 font-semibold'>Trending styles, fresh designs, and prices you’ll love. Don’t miss the seasonal drop.</p>
          </div>
          <div className='h-[270px] bg-banner4 bg-cover bg-center flex flex-col items-start justify-end p-4'data-aos="fade-up" >
            <h1 className='text-3xl text-white font-bold text-left font-serif'>Latest Footwear Collection</h1>
            <p className='text-[12px] text-gray-500 font-semibold'>Spring / Summer Edition</p>
          </div>
          <div className='h-[270px] bg-banner5 bg-cover  flex flex-col items-start justify-end p-4' data-aos="fade-right">
            <h1 className='text-3xl text-white font-bold text-left font-serif'>Casual T-Shirts</h1>
            <p className='text-[12px] text-gray-500 font-semibold'>Bold • Minimal • Trendy</p>
          </div>
        </div>
      </div>

      {/* NEW FEATURE */}

      <div className='w-full m-auto p-5'>
        <h1 className='text-center text-3xl md:text-5xl font-bold'>New Arrivals</h1>
        <p className='text-center text-[12px] md:text-[16px] font-semibold text-gray-400 mt-2'>Fresh Styles for New Season</p>
        <div className='w-full m-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {visibleProducts.map((item) => (
            <div key={item.id}
              className='border p-2 rounded shadow-[0_8px_24px_rgba(0,0,0,0.08)]' data-aos="fade-up">
              <NavLink to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className='w-full h-[250px] bg-gray-300 rounded-lg transition-transform duration-300 hover:scale-105' />
              </NavLink>
              <p className="text-gray-400 text-[12px] mt-2">
                Addidas
              </p>
              <h1 className='text-[14px] font-semibold'>{item.name}</h1>
              <div className="flex">
                ⭐ ⭐ ⭐ ⭐
              </div>
              <div className='w-full flex justify-between'>
                <p className='tex-sm font-semibold'>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>
                  <img
                    src="cart-large-minimalistic-svgrepo-com.svg"
                    alt=""
                    className="w-8 p-1 cursor-pointer active:shadow-lg active:bg-gray-400 hover:shadow-lg hover:bg-gray-400 transition-all duration-300 rounded-lg"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER BANNER */}
      <div className='h-[150px] bg-banner6 bg-cover bg-center'>
        <div className='w-full m-auto p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-[14px] md:text-3xl text-black font-bold p-2'>Sign Up For Newsletters</h1>
            <p className='text-[12px] md:text-sm text-white font-semibold p-2'>Get Email updates About our Latest Shop and <span className='text-yellow-400'>Special offers</span></p>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <input type="text" className='w-[400px] h-[33px] px-2 border-2 border-black outline-none shadow-sm' placeholder='Your E-mail Address' />
            <button className='w-[100px] h-[32px] bg-transparent border-2 border-black shadow-sm'>Subscribe</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home


