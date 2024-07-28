import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";
// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const Navbar = () => {
  const { user, logout,cart } = useAuth();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Function to fetch search results
  const fetchSearchResults = async (searchQuery) => {
    try {
      const response = await fetch(`https://e-commerce-mern-topaz.vercel.app/api/search?query=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("Error fetching search results");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const debouncedFetchSearchResults = debounce(fetchSearchResults, 100);

  useEffect(() => {
    if (query) {
      debouncedFetchSearchResults(query);
    }
  }, [query]);

  return (
    <>
    <div className="flex justify-between items-center p-4 custom-shadow h-[100px]">
    <Link to="/">
    <img
        src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png"
        width={80}
        height={80}
        alt="logo"
        className="mr-4"
      />
    </Link>
   <input
        type="text"
        placeholder="Search Products..."
        className="flex-grow mx-4 p-2 border rounded"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
   
 
      <div className="flex items-center">
        <ul className="flex space-x-4 mr-4">
          <li className="px-4">Home</li>
          <li className="px-4">About</li>
          <li className="px-4 flex items-center gap-1">Wishlist <FaHeart/></li>
         <Link to="/cart"> <li className="px-4">Cart <span>{cart?.items?.length}</span></li></Link>
        </ul>
  
       {
        !user? <Link to='/login'>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">
         Log In
        </button></Link> :
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={logout}>
         Logout
        </button>
       }
      </div>
    </div>
    {
        results.length > 0 && (
          <ul className="w-[59%] bg-white p-2 rounded shadow-md ml-[8rem]">
            {results.map((result) => (
            <div key={result._id} className="flex items-center space-x-5 cursor-pointer hover:bg-gray-100"  onClick= {()=>{
                  navigate(`/product/${result._id}`);
                  setResults([]);
                }}>
            <img src={result.image} alt={result.name} width={35} height={35}/>
            <li
                className="py-2 px-4"
               
              >
                {result.name}
              </li>
            </div>
            ))}
          </ul>
        )
      }
    </>
  );
};

export default Navbar;
