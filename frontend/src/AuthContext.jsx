import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

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
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));
    setUser(data.user);
    await getCartItems();
    return data.message;
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setUser(null);
    setCart([]);
    toast.success("User logged out");
  };
  const getCartItems = async () => {
    try {
      const response = await fetch(
        "https://e-commerce-mern-topaz.vercel.app/api/cart",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Cart not found");
      }
      const cartData = await response.json();
      setCart(cartData);
      localStorage.setItem("cart", JSON.stringify(cartData));
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, cart, login, getCartItems,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
