import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Transformation",
  description: "",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
     <Sidebar />
     <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      <Toaster/>
    </main>
  )
}

export default Layout