import React, { use, useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import "../Product/ProductCard.css"
import { Add, AddShoppingCart, AddShoppingCartSharp, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from "@mui/icons-material";
import SimilarProductCard from "./SimilarProductCard";
import SimilarProuct from "./SimilarProuct";
import Review from "../Review/Review";
import ReviewCard from "../Review/ReviewCard";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router";
import { fetchProductById } from "../../../State/customer/ProductSlice";
import { idText } from "typescript";

const ProductDetails = () => {
  const [quantity,setQuantity]=useState(0);
  const dispatch = useAppDispatch();
  const {productId}=useParams();
  const {product} = useAppSelector(store=>store)
  const [activeImage,seActiveImage]=useState(0);
  useEffect(()=>{
    dispatch(fetchProductById(Number(productId)))
    console.log("Doe it so null Product",product)
  },[productId])

  const handleActiveImage =(index:number)=>()=>{
    seActiveImage(index);
  };

  return (
    <div className="px-5 g:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
        {/* left side  images */}
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
          {

            product.product?.images.map((item,index)=><img onClick={handleActiveImage(index)} className=" lg:w-full w-[50px] rounded-md cursor-pointer" src={item} alt="leopard"  /> )
          }
         
          </div>

          {/* main image */}
          <div className="w-full lg:w-[85%]">
            <img className="w-full rounded-md" src= {product.product?.images[activeImage]} alt="leopard"  />

          </div>
        </section>
        <section>
          
          <h1 className="font-bold text-lg text-primary-color"> </h1>
           {product.product?.seller?.businessDetails.businessName}
            <p className="text-gray-500  font-semibold">{product.product?.title}</p>

            {/* rating */}
            <div className="flex justify-between items-center py-2  w-[180px] px-3 mt-5  ">
              <div className="flex gap-1 items-center">
                <span>4</span>
                <StarIcon sx={{color :teal[500],fontSize :"17px"}}/>

              </div>
              <Divider orientation="vertical" flexItem/>
              <span>
                {product.product?.numRating} Rating
              </span>

            </div>
            <div className='price flex items-center gap-3 mt-5 text-2xl'>
          <span  className='font-sans text-gray-800'> Rs {product.product?.sellingPrice}</span>
          <span className='thin-line-through text-gray-400'>Rs {product.product?.mrpPrice}</span>
          <span className='text-primary-color font-semibold'> {product.product?.discountPrice}% off</span>
        </div>
        <div>
        <p className="text-sm">Inclusive of All taxes. Free Shipping above Rs 1500</p>

        </div>
        <div className="mt-7 space-y-3">
          <div className="flex items-center gap-4">
            <Shield sx={{color:teal[500]}}/>
            <p>Authentic  & Quality Assured</p>
          </div>

          <div className="flex items-center gap-4">
            <WorkspacePremium sx={{color:teal[500]}}/>
            <p>100% Money back gurantee</p>
          </div>

          <div className="flex items-center gap-4">
            <LocalShipping sx={{color:teal[500]}}/>
            <p>Free Shipping & return</p>
          </div>

          <div className="flex items-center gap-4">
            <Wallet sx={{color:teal[500]}}/>
            <p>Pay on deivery might be available</p>
          </div>
         

        </div>
        {/* qunatity selection */}
        <div className="mt-7 space-y-2">
          <h1>
            QUANTITY
          </h1>
          <div className="flex items-center gap-2 w-[140px] justify-between ">
            <Button disabled={quantity==1} onClick={()=> setQuantity(quantity-1)}>
              <Remove/>
            </Button>
            <p>{quantity}</p>

            <Button  onClick={()=> setQuantity(quantity+1)}>
              <Add/>
            </Button>
            



          </div>

        </div>
        {/* wishlist button */}
        <div className="mt-12 flex items-center gap-5">
          <Button
          fullWidth
          variant="contained"
          startIcon ={<AddShoppingCart/>}
          sx={{py:"1rem"}}
          >
            Add To Cart
          </Button>

          <Button
          fullWidth
          variant="outlined"
          startIcon ={<FavoriteBorder/>}
          sx={{py:"1rem"}}
          >
            Wishlist
          </Button>

        </div>
        <div className="mt-5 ">
          <p>{product.product?.description}</p>
        </div>
        <div className="mt-7 space-y-5">
          <ReviewCard/>
          <Divider/>
        </div>


        </section>


      </div>
      <div className="mt-12 ">
        <h1 className="text-lg font-bold justify-center">Similar Product</h1>
        <div className="pt-5">
        <SimilarProuct/>
        </div>
       
      </div>

    </div>
  );
};

export default ProductDetails;
