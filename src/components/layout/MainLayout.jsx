import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'

const MainLayout = () => {
  return (
    <div className="flex min-h-dvh flex-col gap-4">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default MainLayout
