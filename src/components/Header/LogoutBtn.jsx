import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

const LogoutBtn = () => {

  const dispatch = useDispatch()

  const logoutHandler = ()=>{
    authService.logout()
    .then((response)=>{
      dispatch(logout())
    })
  }


  return (
    
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      Logout
    </button>
  )
}

export default LogoutBtn