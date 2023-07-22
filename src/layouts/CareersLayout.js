import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Hello welcome here its a great Plesure Thankyou for Coming..</p>

        <Outlet/>
    </div>
  )
}

export default CareersLayout
