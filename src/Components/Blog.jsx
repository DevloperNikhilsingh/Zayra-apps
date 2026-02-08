import React from 'react'

function Blog() {
    return (
        <>
        {/* // BANNER */}
            <div className='w-full h-[200px] bg-blogbanner bg-cover  '>
                <div className='p-14'>
                    <h1 className='text-4xl font-bold text-center font-heading'>#readmore</h1>
                    <p className='text-sm font-semibold text-center font-body'>Read all Case Study About our Products !</p>
                </div>
            </div>

            <div className='w-full p-4 flex flex-col gap-4'>
                {/* BOX-1 */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8' data-aos="fade-left">
                    <div className='left-box'>
                        <img src="/blog1.jpg" alt="" className='w-full h-[250px] object-cover  rounded-md shadow-md' />
                    </div>
                    <div className='right-box p-4'>
                        <h1 className='text-xl font-bold font-heading'>The cotton Jersy Zip-up Hoodie</h1>
                        <p className='mt-2 text-gray-500 text-sm font-semibold font-body'>kickstarter man brand godard coloring book. Ractleit Westcoll selfish yrwolf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit blanditiis fugit atque.</p>
                        <p className='text-sm font-semibold mt-5 text-gray-500 cursor-pointer font-body'>Conntinue Reading ➜</p>
                    </div>
                </div>
                {/* BOX-2 */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'data-aos="fade-right">
                    <div className='right-box p-4 hidden md:block'>
                        <h1 className='text-xl font-bold font-heading'>How to Sttyle a Quick Cuff</h1>
                        <p className='mt-2 text-gray-500 text-sm font-semibold font-body'>kickstarter man brand godard coloring book. Ractleit Westcoll selfish yrwolf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit blanditiis fugit atque.</p>
                        <p className='text-sm font-semibold mt-5 text-gray-500 cursor-pointer font-body'>Conntinue Reading ➜</p>
                    </div>
                    <div className='left-box'>
                        <img src="/blog2.jpg" alt="" className='w-full h-[250px] object-cover object-center rounded-md shadow-md' />
                    </div>
                    <div className='right-box p-4 md:hidden'>
                        <h1 className='text-xl font-bold font-heading'>How to Sttyle a Quick Cuff</h1>
                        <p className='mt-2 text-gray-500 text-sm font-semibold font-body'>kickstarter man brand godard coloring book. Ractleit Westcoll selfish yrwolf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit blanditiis fugit atque.</p>
                        <p className='text-sm font-semibold mt-5 text-gray-500 cursor-pointer font-body'>Conntinue Reading ➜</p>
                    </div>
                </div>
                {/* BOX-3 */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8' data-aos="fade-left">
                    <div className='left-box'>
                        <img src="/blog3.jpg" alt="" className='w-full h-[250px] object-cover rounded-md shadow-md' />
                    </div>
                    <div className='right-box p-4'>
                        <h1 className='text-xl font-bold font-heading'>Must have Skatter-Girls Item</h1>
                        <p className='mt-2 text-gray-500 text-sm font-semibold font-body'>kickstarter Girls brand godard coloring book. Ractleit Westcoll selfish yrwolf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit blanditiis fugit atque.</p>
                        <p className='text-sm font-semibold mt-5 text-gray-500 cursor-pointer font-body'>Conntinue Reading ➜</p>
                    </div>
                </div>
                {/* BOX-2 */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'data-aos="fade-right">
                    <div className='right-box p-4 hidden md:block'>
                        <h1 className='text-xl font-bold font-heading'>Runway-Inspired Trends</h1>
                        <p className='mt-2 text-gray-500 text-sm font-semibold font-body'>kickstarter man brand godard coloring book. Ractleit Westcoll selfish yrwolf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit blanditiis fugit atque.</p>
                        <p className='text-sm font-semibold mt-5 text-gray-500 cursor-pointer font-body'>Conntinue Reading ➜</p>
                    </div>
                    <div className='left-box'>
                        <img src="/blog4.jpg" alt="" className='w-full h-[250px] object-cover  rounded-md shadow-md' />
                    </div>
                    <div className='right-box p-4 md:hidden'>
                        <h1 className='text-xl font-bold font-heading'>Runway-Inspired Trends</h1>
                        <p className='mt-2 text-gray-500 text-sm font-semibold font-body'>kickstarter man brand godard coloring book. Ractleit Westcoll selfish yrwolf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit blanditiis fugit atque.</p>
                        <p className='text-sm font-semibold mt-5 text-gray-500 cursor-pointer font-body'>Conntinue Reading ➜</p>
                    </div>
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

export default Blog
