import React from 'react'
import UserAddressCard from './UserAddressCard'

const Address = () => {
  return (
    <div>
{[1,1,1,1].map((item)=><UserAddressCard/>)}


    </div>
  )
}

export default Address