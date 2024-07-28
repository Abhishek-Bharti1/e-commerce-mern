import { FaCheckCircle } from "react-icons/fa";

const OrderPlaced = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <FaCheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Order Placed Successfully!</h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <p className="mt-4 text-gray-600">Order ID: <span className="font-semibold">#123456</span></p>
        <button
          className="mt-6 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.location.href = '/'} 
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
