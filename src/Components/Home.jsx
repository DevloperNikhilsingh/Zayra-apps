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
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight text-black">
            DISCOVER <br />
            CLOTHES <br />
            <span className="text-slate-500 font-body">
              UNIQUE STYLE
            </span>
          </h1>

          <p className="mt-5 text-gray-500 max-w-md font-body">
            Explore a curated collection of clothing
            designed to elevate your everyday look.
          </p>
          <NavLink to={"/shop"}>
            <button className="btn-primary mt-4 bg-indigo-800">
              Shop Now
            </button>
          </NavLink>
        </div>

      </section>

      <div className="overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="inline-flex gap-10 animate-marquee">
          <span className='font-heading'>🔥 New Arrivals</span>
          <span className='font-heading'>🚚 Free Delivery</span>
          <span className='font-heading'>⭐ Best Quality</span>
          <span className='font-heading'>🔥 New Arrivals</span>
          <span className='font-heading'>🚚 Free Delivery</span>
          <span className='font-heading'>⭐ Best Quality</span>
        </div>
      </div>

      {/* Feature */}

      {/* <div className='w-full m-auto p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/delivery.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105'/>
          <h3 className='font-semibold text-center mt-2 font-heading'>Online Order</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/save_mony.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center mt-2 font-semibold font-heading'>Save Money</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/customer.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2 font-heading'>Happy customer</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/giveaway.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2 font-heading'>Free Shoping</h3>
        </div>
      </div> */}

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
              <p className="text-gray-400 text-[12px] mt-2 font-body">
                Zayra
              </p>
              <h1 className='text-[14px] font-semibold font-heading'>{item.name}</h1>
              <div className="flex">
                ⭐ ⭐ ⭐ ⭐
              </div>
              <div className='w-full flex justify-between'>
                <p className='tex-sm font-body'>₹{item.price}</p>
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
          <h1 className='text-center text-3xl font-semibold font-heading text-white'>Up to <span className='text-white'>70%</span> OFF</h1>
          <h2 className='text-center text-xl font-semibold font-heading text-white'>On All ZAYRA Shirts & Essentials</h2>
          <p className='text-center text-sm font-body text-white'>Limited Time Offer • Hurry Up!</p>
          <NavLink to={"shop"}><button className="btn-primary">Explore More</button></NavLink>
        </div>
      </div>

      {/* SOME BANNER */}
      <h1 className='text-center text-3xl mt-7 font-heading font-bold'>Explore Our Collections</h1>
      <p className='text-[15px] font-body text-center text-gray-400'>From trending styles to everyday essentials, find everything you love in one place.</p>
      <div className='w-full m-auto mt-1 p-8 flex flex-col gap-3'>
        <div className='w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='h-[300px] bg-banner bg-cover bg-center flex flex-col items-start justify-center p-4' data-aos="fade-right">
            <p className='text-gray-500 font-semibold text-left font-body'>Mega Fashion Sale</p>
            <h1 className='font-bold text-3xl text-left font-heading'>Buy More, Save More</h1>
            <p className='text-gray-500 font-semibold text-left font-body'>Limited time exclusive offers</p>
            <NavLink to={"shop"}><button className='px-4 py-1 font-body border-0 outline-none bg-green-400 mt-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-300'>Shop Now</button></NavLink>
          </div>
          <div className='h-[300px] bg-banner2 bg-cover bg-center flex flex-col items-start justify-center p-4' data-aos="fade-right">
            <p className='text-gray-500 font-semibold text-left font-body'>Spring Summer Edit</p>
            <h1 className='font-bold text-3xl text-left font-heading'>Fresh Styles Incoming</h1>
            <p className='text-gray-500 font-semibold text-left font-body'>Comfort meets trend</p>
            <button className='px-4 py-1 border-2 font-body border-slate-950 outline-none bg-transparent mt-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-300'>Collection</button>
          </div>
        </div>

        <div className='w-full m-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='h-[270px] bg-banner3 bg-cover bg-center flex flex-col items-start justify-end p-4' data-aos="fade-right" >
            <h1 className='text-3xl text-white font-bold text-left  font-heading'>Trending This Season</h1>
            <p className='text-[12px] text-gray-500 font-semibold font-body'>Trending styles, fresh designs, and prices you’ll love. Don’t miss the seasonal drop.</p>
          </div>
          <div className='h-[270px] bg-banner4 bg-cover bg-center flex flex-col items-start justify-end p-4' data-aos="fade-up" >
            <h1 className='text-3xl text-white font-bold text-left font-heading'>Latest Footwear Collection</h1>
            <p className='text-[12px] text-gray-500 font-semibold font-body'>Spring / Summer Edition</p>
          </div>
          <div className='h-[270px] bg-banner5 bg-cover  flex flex-col items-start justify-end p-4' data-aos="fade-right">
            <h1 className='text-3xl text-white font-bold text-left font-heading'>Casual T-Shirts</h1>
            <p className='text-[12px] text-gray-500 font-semibold font-body'>Bold • Minimal • Trendy</p>
          </div>
        </div>
      </div>

      {/* NEW FEATURE */}

      <div className='w-full m-auto p-5'>
        <h1 className='text-center text-3xl md:text-5xl font-semibold font-heading'>New Arrivals</h1>
        <p className='text-center text-[12px] md:text-[16px] font-semibold text-gray-400 mt-2 font-body'>Fresh Styles for New Season</p>
        <div className='w-full m-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 '>
          {visibleProducts.map((item) => (
            <div key={item.id}
              className='border p-2 rounded shadow-[0_8px_24px_rgba(0,0,0,0.08)]' data-aos="fade-up">
              <NavLink to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className='w-full h-[250px] bg-gray-300 rounded-lg transition-transform duration-300 hover:scale-105' />
              </NavLink>
              <p className="text-gray-400 text-[12px] mt-2 font-body">
                Zayra
              </p>
              <h1 className='text-[14px] font-semibold font-heading'>{item.name}</h1>
              <div className="flex">
                ⭐ ⭐ ⭐ ⭐
              </div>
              <div className='w-full flex justify-between'>
                <p className='tex-sm font-body'>₹{item.price}</p>
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

      {/* Feature  */}
       <h1 className='text-3xl font-heading font-bold text-center mt-2'>Zayra at a Glance</h1>
      <div className='w-full m-auto p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center rounde' data-aos="fade-up">
          <img src='/delivery.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='font-semibold text-center mt-2 font-heading'>Online Order</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/save_mony.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center mt-2 font-semibold font-heading'>Save Money</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/customer.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2 font-heading'>Happy customer</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center' data-aos="fade-up">
          <img src='/giveaway.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2 font-heading'>Free Shoping</h3>
        </div>
      </div>

      {/* NEWSLETTER BANNER */}
      <div className='h-[150px] bg-gray-800'>
        <div className='w-full m-auto p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-[14px] md:text-3xl font-bold p-2 text-white'>Sign Up For Newsletters</h1>
            <p className='text-[12px] md:text-sm font-semibold p-2 text-white'>Get Email updates About our Latest Shop and <span className='text-yellow-400'>Special offers</span></p>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <input type="text" className='w-[400px] h-[35px] px-2 border-2 border-black outline-none shadow-sm' placeholder='Your E-mail Address' />
            <button className='w-[100px] h-[32px] bg-transparent border-2 text-white border-white shadow-sm rounded-tr-md rounded-br-md'>Subscribe</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home


