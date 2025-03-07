import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { FilterAlt, SearchTwoTone } from "@mui/icons-material";
import e from "cors";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";
import { useParams, useSearchParams } from "react-router";
import { Products } from "../../../types/ProductTypes";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
  const [sort,setSort]=useState();
  const [page,setPage] = useState(1);
  const dispatch = useAppDispatch();

  const [searchParams,setSearchParams] =useSearchParams()
  const {category} =useParams();

 
const {product} = useAppSelector((store=>store))
  const handleSortChange =(event:any)=>{
    setSort(event.target.value)

  }
 const handlePageChange =(value:number)=>{
  setPage(value);
 }

 
  useEffect(()=>{
    const [minPrice,maxPrice] =searchParams.get("price")?.split("-") || [];
    const color = searchParams.get("color");
     console.log(localStorage.getItem("jwt"))
   const minDiscount=searchParams.get("discount")?Number(searchParams.get("discount")):0;
   const pageNumber =page-1;
    dispatch(fetchAllProducts({category}))
    const newFilter ={
      color:color || "",
      minPrice :minPrice?Number(maxPrice):undefined,
      maxPrice :maxPrice?Number(maxPrice):undefined,
     
      pageNumber

    }
    dispatch(fetchAllProducts(newFilter))


  },[category,searchParams])



  return (
    <div className="-z-10 mt-10">
      <div className="text-3xl text-center font-bold text-gray-700 pb-5 px-9">
        Men T-Shirts
      </div>
      <div className="lg:flex">
        <section className="filter-section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px] ">
            <div className="relative">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>
            <FormControl size="small" sx={{width:"200px"}}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="Age"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Price :Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price :HIGH - LOW</MenuItem>
               
              </Select>
            </FormControl>
          </div>
          <Divider/>
          <section className="products_section grid sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
           {product.products.map((item:Products)=>
           
           <ProductCard item={item}/>
          
           
          )}
           
       

          </section>
          <div className="flex justify-center items-center py-10">
        <Pagination 
        onChange={(e,value)=>handlePageChange(value) }
        count={10} 
        shape="rounded"
        color="primary"
        />
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default Product;
