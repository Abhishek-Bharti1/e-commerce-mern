import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user,"user");
  return (
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
      />
      <div className="flex items-center">
        <ul className="flex space-x-4 mr-4">
          <li className="px-4">Home</li>
          <li className="px-4">About</li>
          <li className="px-4 flex items-center gap-1">Wishlist <FaHeart/></li>
         <Link to="/cart"> <li className="px-4">Cart <span>0</span></li></Link>
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
  );
};

export default Navbar;
