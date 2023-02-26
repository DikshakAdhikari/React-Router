import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => { //rafc
  return (
    <>
    <div>
        <input type='search' placeholder= "='Search products" />
    </div>
    <nav>
        <Link to='featured'> Featured </Link>  {/*Make sure that you don't include forward slash for nested routes. ex- /featured */}
        <Link to='new'> new </Link>
    </nav>
    <Outlet /> {/* Outlet is used to render the child component present in nested routes in app.js i.e. FeaturedProducts.js and NewProducts.js*/}
    </>
    
  )
}
