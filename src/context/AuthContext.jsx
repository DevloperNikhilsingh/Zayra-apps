// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("loggedUser"))
//   );

//   // REGISTER / LOGIN SIMPLIFIED (frontend demo)
//   const login = (name, email) => {
//     const userData = { name, email };
//     setUser(userData);
//     localStorage.setItem("loggedUser", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("loggedUser");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // loggedUser = currently logged in user
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );

  // Register function (optional if you want to save users)
  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.email === email);
    if (exists) {
      alert("User already exists");
      return false;
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  // Login function with email + password
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matched = users.find(u => u.email === email && u.password === password);
    if (!matched) {
      alert("Invalid email or password");
      return false;
    }
    setUser(matched);
    localStorage.setItem("loggedUser", JSON.stringify(matched));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
