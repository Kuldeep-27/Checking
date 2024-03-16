import { useEffect } from "react";
import "./ProductDetail.scss"
import { useDispatch, useSelector } from "react-redux";
import { getProductInfo } from "../../redux/slices/productSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
const ProductDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(getProductInfo({productId:params.productId}));
    },[])

    const productInfo = useSelector((store) => store.productReducer.productInfo);

    const handleAddToCart = async () => {
        
        dispatch(addToCart({ productId:params.productId}))
   }

    if(!productInfo){
        return <h2>No Product Found</h2>
    }

    return (
        <div className="product-detail-container">
            <h1>Product Detail</h1>
            <div className="contain">

           
            <div className="image-section">
                <img src={productInfo.image.url} alt="" />
            </div>
            <div className="detail-section">
                <h2>Name: {productInfo.name}</h2>
                <h3 id="desc">Description: {productInfo.description}</h3>
                <h3>Price: <span>₹{productInfo.price}</span> </h3>
              
                <button className="btn" onClick={handleAddToCart}>ADD TO CART</button>


            </div>
            </div>
        </div>
    )
}

export default ProductDetail;