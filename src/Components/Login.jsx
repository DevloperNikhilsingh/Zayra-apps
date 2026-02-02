// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const success = login(email, password);
//     if (success) navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 transition-colors"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-500 mt-4">
//           Don't have an account?{" "}
//           <span
//             onClick={() => navigate("/register")}
//             className="text-teal-500 font-semibold cursor-pointer hover:underline"
//           >
//             Register
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate("/"); // navigate to home on success
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
      <video src="HomeBanner.mp4" typeof="video/mp4"
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover object-center z-10"
      ></video>
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-sm relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 transition-colors"
          >
            Login
          </button>
        </form>

        {/* ✅ Register Link Below */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-teal-500 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;