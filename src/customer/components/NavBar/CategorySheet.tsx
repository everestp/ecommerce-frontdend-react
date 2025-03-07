import React, { useState } from 'react'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { electronicsLevelThree } from '../../../data/category/level three/electronicsLevelThree'
import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo'
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree'
import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree'
import { menLevelThree } from '../../../data/category/level three/menLevelThree'

import { Box } from '@mui/material'
import { ChildCare } from '@mui/icons-material'
import { useNavigate } from 'react-router'



const categoryTwo :{[key:string]:any[]} ={
    men:menLevelTwo,
    women:womenLevelTwo,
    electronics:electronicsLevelTwo,
    home_furniture :furnitureLevelTwo,

}

const categoryThree:{[key:string]:any[]}= {
    men:menLevelThree,
    women:womenLevelThree,
    electronics:electronicsLevelThree,
    home_furniture :furnitureLevelThree,

}
const CategorySheet = ({ selectedCategory}: any) => {
    const navigate = useNavigate();
    const [showSheet,setShowSheet]= useState(true)
    const handleSheet=()=>{
        setShowSheet(!showSheet)
    }
    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId == parentCategoryId)
       
    }
    console.log(selectedCategory)
    return (
      <>
      {
        showSheet &&

        <Box sx={
            { zIndex: 2 }
        } className='bg-white shadow-lg lg:h-[500px] overflow-y-auto'>
            <div className='flex text-sm flex-wrap'>
                {
                    categoryTwo[selectedCategory]?.map((item, index) =>
                        <div className={`p-8 lg:w-[20%] ${index % 2 == 0 ? "bg-slate-50" : "bg-white-50"} `}
                        >
                            <p className='text-primary-color mb-5 font-semibold '>{item.name}</p>
                            
                            <ul className='space-y-3'>
                                {childCategory(categoryThree[selectedCategory], item.categoryId).map((item: any) =>
                                    <div>
                                        <li   onClick={
                                           
                                            ()=>{
                                            handleSheet()
                                            navigate("/products/"+item.categoryId)}} className='hover:text-primary-color cursor-pointer'>
                                            {item.name}
                                        </li>
                                    </div>
                                )}

                            </ul>
                        </div>

                    )
                }

            </div>

        </Box>
      }
       
      </>  
       
    )
}

export default CategorySheet