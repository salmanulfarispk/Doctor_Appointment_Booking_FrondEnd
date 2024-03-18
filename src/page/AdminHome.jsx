import React from 'react'
import Layout from './Layout'
import { Outlet } from 'react-router-dom'


const AdminHome = () => {
  return (
    <div>
       <Layout>
        <Outlet/>
       </Layout>
  
  

    </div>
  )
}

export default AdminHome