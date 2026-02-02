import React from 'react'

function About() {
    return (
        <>
            {/* // BANNER */}
            <div className='w-full h-[200px] bg-aboutbanner bg-cover '>
                <div className='p-14'>
                    <h1 className='text-4xl font-bold text-center'>#knowUs</h1>
                    <p className='text-sm font-semibold text-center '> We’re more than a brand — we’re a team driven by passion, creativity, and customer happiness.</p>
                </div>
            </div>

            <div className='w-full p-6 mt-8'>
                <div className='w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='left-box' data-aos="fade-right">
                        <img src="about1.jpg" alt="" className='w-full h-[350px]  object-center' />
                    </div>
                    <div className='right-box p-3'data-aos="fade-left">
                        <h1 className='text-4xl font-bold '>Who We Are ?</h1>
                        <p className='mt-3 text-sm text-gray-400 font-semibold'>We’re a team driven by creativity and a love for quality. From concept to completion, every step is guided by our commitment to craftsmanship and customer satisfaction. We focus on designing products that fit seamlessly into your lifestyle, while maintaining transparency, trust, and care in everything we do. For us, it’s not just about business — it’s about building a brand people can truly connect with.</p>
                        <p className='text-sm underline mt-3 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates cupiditate eum possimus vel magnam?</p>

                        <div className="overflow-hidden w-full bg-gray-100 py-2 mt-6">
                            <p className="whitespace-nowrap animate-move text-sm md:text-base font-medium text-gray-700">
                                Crafting quality products with passion, trust, and a modern touch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h1 className='text-4xl font-bold text-center'>Download Our <a href="" className='text-blue-500 underline'>App</a></h1>
                {/* VEDIO LAGANA HAI */}
                <div className='w-full p-10 flex justify-center items-center' data-aos="fade-up">
                 <video src="/About.mp4" type="video/mp4"
                 loop 
                 autoPlay
                 playsInline
                 muted
                 className="w-96  rounded-lg shadow"
                 />
            </div>
            </div>

            {/* Feature */}

      <div className='w-full m-auto p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center'data-aos="fade-up">
          <img src='/delivery.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='font-semibold text-center mt-2 '>Online Order</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center'data-aos="fade-up">
          <img src='/save_mony.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center mt-2 font-semibold'>Save Money</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center'data-aos="fade-up">
          <img src='/customer.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2'>Happy customer</h3>
        </div>
        <div className='min-w-[50px] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center'data-aos="fade-up">
          <img src='/giveaway.png' alt='' className='w-[200px] transition-transform duration-300 hover:scale-105' />
          <h3 className='text-center font-semibold mt-2'>Free Shoping</h3>
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

export default About
