
const ProductDetail = () => {
  const product = {
    name: "Louis Vuitton Side Trunk MM",
    description: "A stylish and functional side trunk from Louis Vuitton, perfect for storing your essentials with a touch of luxury.",
    price: "$2,500",
    imageUrl: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=1090&hei=1090"
  };
const addToCart = ()=>{
  
}
  return (
    <div className="flex p-4 justify-center items-center">
      <div className="flex-1">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="bg-[#e8e7e7] w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1 pl-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">{product.price}</p>
        <button className="bg-[black] text-white py-2 px-4 rounded hover:bg-gray-600" onClick={addToCart}>
          Add to Cart
        </button>
     
      </div>
    </div>
  );
};

export default ProductDetail;
