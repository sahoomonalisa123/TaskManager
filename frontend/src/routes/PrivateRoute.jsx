import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = (allowRoles) => {
  return <Outlet/>
}

export default PrivateRoute
