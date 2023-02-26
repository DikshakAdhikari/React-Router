import { useNavigate } from 'react-router-dom'
import React from 'react'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <>

        <div>Home Page</div>
        <button onClick={()=> navigate('order-summary' , { replace: true})}>Place Order</button>
    </>
    
  )
}
