import React from 'react'
import TransactionTable from './Transaction'
import { Button, Card, Divider } from '@mui/material'

const Payment = () => {
  return (
   <div className='space-y-5'>
<Card className='rounded-md space-y-4 p-5'>
    <h1 className="text-gray-600 font-medium">Total Earning</h1>
<h1 className="font-bold text-xl pb-1"> Rs 9637</h1>
<Divider/>
<p className="text-gray-600 font-medium pt-1">Last Payment : <strong>Rs 0</strong></p>


</Card>

<div className='pt-5 space-y-5'>
<Button className='pb-5' variant='contained'>
    Transaction
</Button>
<div className='mt-5'>
    <h1 className='font-bold text-xl'>Recent Transaction</h1>
<TransactionTable/>
</div>

</div>

   </div>
  )
}

export default Payment