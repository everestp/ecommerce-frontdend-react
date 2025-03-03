import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useFormAction } from 'react-router'
import { useFormik } from 'formik'
import { discount } from '../../../data/Filter/discount'
import { Category } from '@mui/icons-material'

const DealCategoryTable = () => {
   
  return (
    <div>
        <HomeCategoryTable/>
    </div>
  )
}

export default DealCategoryTable