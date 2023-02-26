import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const params = useParams() //The hook returns an object of key value pairs
    const userId = params.userId //inside params object use useId variable
  return (
    <div>Details about user {userId}</div>
  )
}
