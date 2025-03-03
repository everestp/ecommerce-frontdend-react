import { Button } from '@mui/material';
import React, { useState } from 'react'
import DealCategoryTable from './DealCategoryTable';
import CreatDealFrom from './CreatDealFrom';
import DealTable from './DealTable';


const tabs =[
  "Deals",
  "Category",
  "Create Deal"
];
const Deal = () => {
  const [activeTab,setActiveTab] =useState("Deals")
  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item)=><Button onClick={()=>setActiveTab(item)} variant={activeTab==item? "contained":"outlined"}>{item}</Button>)}
      </div>
      <div className='mt-5'>
        {activeTab=="Deals"?<DealTable/>:activeTab=="Category"?(<DealCategoryTable/>):(
          <div className='mt-5 flex flex-cols justify-center items-center'>
  <CreatDealFrom/>
          </div>
          
        )}
      </div>
    </div>
  )
}

export default Deal