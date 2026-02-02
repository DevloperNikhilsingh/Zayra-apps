import React from 'react'

function Footer() {
    return (
        <div className='w-full m-auto p-2 bg-slate-300 flex flex-col gap-5'>
            <div className='w-full m-auto p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='w-full m-auto'>
                    <div>
                        <h1 className="text-2xl text-left font-bold tracking-wider">
                            <span className="text-yellow-500">ZA</span>
                            <span className="text-teal-500">YRA</span>
                        </h1>
                    </div>
                    <div className='w-full m-auto mt-2 flex flex-col gap-4'>
                        <h1 className='text-[15px] font-semibold font-sans'>Contact :</h1>
                        <div className=''>
                            <p className='text-sm text-gray-700'>Address: 512 Wellington Road, Street 32 Saint Fransisco</p>
                            <p className='text-sm text-gray-700'>Phone: +01 2222 365 / +91 7647 28273 999</p>
                            <p className='text-sm text-gray-700'>Hours: 10:00 AM - 10:00 PM (Mon-Sat)</p>
                        </div>
                    </div>
                    <div className='w-full m-auto mt-2 flex flex-col gap-2'>
                        <h1 className='text-[15px] font-semibold font-sans'>Follow us :</h1>
                        <div className='flex '>
                            <img src="/facebook.png" alt="" className='w-10 h-10 rounded-lg cursor-pointer' />
                            <img src="/linkdn.png" alt="" className='w-10 h-10 rounded-lg cursor-pointer' />
                            <img src="/twitter.jpg" alt="" className='w-10 h-10 rounded-lg bg-slate-300 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <div>
                        <p className='text-2xl font-bold font-sans'>About us</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-700'>Delivery Information</p>
                        <p className='text-sm text-gray-700'>Privacy Policy</p>
                        <p className='text-sm text-gray-700'>Term & Condition</p>
                        <p className='text-sm text-gray-700'>Contact Us</p>
                    </div>

                </div>
                 <div className='w-full flex flex-col gap-3'>
                    <div>
                        <p className='text-2xl font-bold font-sans'>My Account</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-700'>Sign In</p>
                        <p className='text-sm text-gray-700'>View Cart</p>
                        <p className='text-sm text-gray-700'>My Wishlist</p>
                        <p className='text-sm text-gray-700'>Track My</p>
                        <p className='text-sm text-gray-700'>Help</p>
                    </div>

                </div>
                <div className='w-full flex flex-col gap-3'>
                    <div>
                        <p className='text-2xl font-bold font-sans'>Install App</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-700'>From App Store or Google Play</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='w-[120px] border-2 border-green-500 text-sm'>🍎Download <br /><span className='ml-4 text-sm'>App Store</span></button>
                        <button className='w-[120px] h-[43px] border-2 border-green-500'>▷ Google Play </button>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700'>Secured Payment Gateways</p>
                    </div>

                </div>
            </div>
            <div>
                <p className='text-sm font-semibold text-gray-700 text-center'>© 2026. Nikhil Singh etc - React.js TailwindCSS Template</p>
            </div>
        </div>

    )
}

export default Footer
