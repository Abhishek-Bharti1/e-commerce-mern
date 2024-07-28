import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const login = async (username, password) => {
    const response = await fetch(
      "https://e-commerce-mern-topaz.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    console.log(data);
    setUser({ username });

    localStorage.setItem("token", JSON.stringify(data.token));
    return data.message;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("User logged out");
    console.log("User logged out");
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("https://e-commerce-mern-topaz.vercel.app/api/cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Cart not found");
      }
      const cartData = await response.json();
      console.log(cartData,"cartData");
      setCart(cartData);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, cart , getCartItems }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
