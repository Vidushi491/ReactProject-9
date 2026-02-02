import { useNavigate } from "react-router-dom";


const Product = () => {
const navigate = useNavigate();
const ProductHandler = (name)=>{
  navigate(`/product/detail/${name}`);
}
  return (
    <div className="flex flex-wrap gap-30 p-6">
      
      <div className="" >
      <h1 className=" mt-10 font-bold text-4xl">Product 1</h1>
      <p className=" mt-5 text-xl font-medium">This is the Product page.</p>
      <button 
      className=" mt-5 text-xl font-medium bg-blue-500 text-white px-4 py-2 rounded" 
      onClick={() =>ProductHandler("Product 1")}>
      Details
      </button>
      </div>

      <div className="" >
      <h1 className=" mt-10 font-bold text-4xl">Product 2</h1>
      <p className=" mt-5 text-xl font-medium">This is the Product page.</p>
      <button className=" mt-5 text-xl font-medium bg-blue-500 text-white px-4 py-2 rounded" 
      onClick={() =>ProductHandler("Product 2")}>
      Details
      </button>
      </div>

      <div className="" >
      <h1 className=" mt-10 font-bold text-4xl">Product 3</h1>
      <p className=" mt-5 text-xl font-medium">This is the Product page.</p>
      <button 
      className=" mt-5 text-xl font-medium bg-blue-500 text-white px-4 py-2 rounded" 
      onClick={() =>ProductHandler("Product 3")}>
      Details
      </button>
      </div>
    </div>
  )
}

export default Product