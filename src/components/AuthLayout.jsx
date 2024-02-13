import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentication = true}) => {

  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()
  const authStatus = useSelector((state)=> state.auth.status)


  useEffect(()=>{

    if(authentication && authStatus !== authentication){
      navigate('/login')
    }else if(!authentication && authStatus !== authentication){
      navigate('/')
    }

    setLoader(false)

  }, [navigate, authStatus, authentication])

  return (
    loader? <h1>Loading...</h1> : <>{children}</>
  )
}

export default Protected