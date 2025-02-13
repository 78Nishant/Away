import React from 'react'
import Navbar from '@/components/Navbar'

const RootLayout=({ children }:{children:React.ReactNode})=> {
  return (
    <main>
       
        {children}
        Footer
    </main>
  )
}

export default RootLayout
