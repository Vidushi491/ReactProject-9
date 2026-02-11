import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    
    
  return (
    <div className="flex items-center flex-col mt-20">
        <h1 className=" mt-10 font-bold text-4xl">{params.name}</h1>
        <p className=" mt-5 text-xl font-medium">This is the Product Details page.</p>
        <button className=" mt-5 text-xl font-medium bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ProductDetails