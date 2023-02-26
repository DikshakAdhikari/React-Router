import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom' //useSearchParams- This hook behave same as useState hook in react, Instead of storing state in memory though it store in url.

export const Users = () => {
    const [searchParams, setSearchParams]= useSearchParams() // it is kvery similar to useState hook. We can  invoke the setSearchParams funciton to set the value and searchParams object to get any value present in the url
    const showActiveUsers = searchParams.get('filter') === 'active' // Show activeUsers as true if we click on active Users button and false if we click on Reset Filter button
     
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
            <button onClick={()=> setSearchParams({ filter: 'active'})}>Active Users</button>
            <button onClick={()=> setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all Users</h2>
        }
    </div>
  )
}
