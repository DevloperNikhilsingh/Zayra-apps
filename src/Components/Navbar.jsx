import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [openUser, setOpenUser] = useState(false)
    const navigate = useNavigate();
    const { user, logout } = useAuth()
    
    const firstLetter = user?.name?.charAt(0).toUpperCase()

    return (
        <div className='relative sticky top-0 z-50 w-full m-auto p-4 bg-blue-50 shadow-sm flex flex-row justify-between items-center'>
            <div className='inline-block cursor-pointer md:hidden z-50 'onClick={() => setIsOpen(!isOpen)}>
                <img src="hamburger-lg-svgrepo-com.svg" alt="" className='w-8' />
            </div>
            <div className=''>
                <h1 className="text-3xl text-center font-bold tracking-wider">
                    <span className="text-yellow-500">ZA</span>
                    <span className="text-teal-500">YRA</span>
                </h1>
            </div>

            <div
                className={`absolute top-0 left-0  w-full bg-blue-50 md:bg-blue-50 md:static md:flex md:w-auto md:space-x-4 transition-all duration-300 ease-in ${isOpen ? "flex flex-col pt-12 pl-4" : "hidden md:flex"
                    }`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 text-[19px] underline font-semibold" : "text-black text-[19px] font-semibold hover:text-orange-500"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 text-[19px] underline font-semibold" : "text-black text-[19px] font-semibold hover:text-orange-500"
                    }
                >
                    Shop
                </NavLink>

                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 text-[19px] underline font-semibold" : "text-black text-[19px] font-semibold hover:text-orange-500"
                    }
                >
                   Blog
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 text-[19px] underline font-semibold" : "text-black text-[19px] font-semibold hover:text-orange-500"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 text-[19px] underline font-semibold" : "text-black text-[19px] font-semibold hover:text-orange-500"
                    }
                >
                    Contact
                </NavLink>
            </div>



            <div className="login-signup flex items-center space-x-2.5 ">
                
                {/* USER ICON / FIRST LETTER */}
             {!user ? (
          <button onClick={() => navigate("/login")}>
            <img src="user-svgrepo-com.svg" alt="" className="w-6" />
          </button>
        ) : (
          <div className="relative">
            <div
              onClick={() => setOpenUser(!openUser)}
              className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center cursor-pointer"
            >
              {firstLetter}
            </div>

            {openUser && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md w-32 p-3">
                <p className="text-sm font-semibold mb-2">{user.name}</p>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => {
                    logout()
                    navigate("/login")
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
                

                <button className="relative rounded-lg hover:bg-gray-400 hover:shadow-lg active:bg-gray-300 active:shadow-lg" onClick={() => navigate("/cart")}>
                    <img src="cart-large-minimalistic-svgrepo-com.svg" className="w-8 p-1 hover:cursor-pointer" alt="cart" />
                </button>
            </div>
        </div>
    )
}

export default Navbar

// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [openUser, setOpenUser] = useState(false)
//   const navigate = useNavigate()
//   const { user, logout } = useAuth()

//   const firstLetter = user?.name?.charAt(0).toUpperCase()

//   return (
//     <div className='relative sticky top-0 z-50 w-full m-auto p-4 bg-blue-50 shadow-sm flex flex-row justify-between items-center'>
      
//       {/* MOBILE MENU */}
//       <div className='inline-block cursor-pointer md:hidden z-50' onClick={() => setIsOpen(!isOpen)}>
//         <img src="hamburger-lg-svgrepo-com.svg" alt="" className='w-8' />
//       </div>

//       {/* LOGO */}
//       <div>
//         <h1 className="text-3xl font-bold tracking-wider">
//           <span className="text-yellow-500">ZA</span>
//           <span className="text-teal-500">YRA</span>
//         </h1>
//       </div>

//       {/* LINKS */}
//       <div className={`absolute top-0 left-0 w-full bg-blue-50 md:static md:flex md:w-auto md:space-x-4 transition-all duration-300 ease-in
//         ${isOpen ? "flex flex-col pt-12 pl-4" : "hidden md:flex"}`}>
//         {["/", "/shop", "/blog", "/about", "/contact"].map((path, i) => (
//           <NavLink
//             key={i}
//             to={path}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-orange-500 text-[19px] underline font-semibold"
//                 : "text-black text-[19px] font-semibold hover:text-orange-500"
//             }
//           >
//             {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
//           </NavLink>
//         ))}
//       </div>

//       {/* RIGHT ICONS */}
//       <div className="flex items-center space-x-4 relative">

//         {/* USER ICON / FIRST LETTER */}
//         {!user ? (
//           <button onClick={() => navigate("/login")}>
//             <img src="user-svgrepo-com.svg" alt="" className="w-6" />
//           </button>
//         ) : (
//           <div className="relative">
//             <div
//               onClick={() => setOpenUser(!openUser)}
//               className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center cursor-pointer"
//             >
//               {firstLetter}
//             </div>

//             {openUser && (
//               <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md w-32 p-3">
//                 <p className="text-sm font-semibold mb-2">{user.name}</p>
//                 <button
//                   className="text-red-500 text-sm"
//                   onClick={() => {
//                     logout()
//                     navigate("/login")
//                   }}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//         {/* CART */}
//         <button onClick={() => navigate("/cart")}>
//           <img
//             src="cart-large-minimalistic-svgrepo-com.svg"
//             className="w-6"
//             alt="cart"
//           />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
