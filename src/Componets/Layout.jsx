import React from 'react'
import MyNavbar from './MyNavbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <MyNavbar search={search} setSearch={setSearch} />
     <Outlet context={{search , setSearch}} /> 
    </div>
  )
}

export default Layout
