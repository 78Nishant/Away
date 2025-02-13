import React from 'react'

const RootLayout=({ children }:{children:React.ReactNode})=> {
  return (
    <main>
        <h1 className='bg-green-600 text-white text-center w-full'>This is a  Navbar</h1>
        {children}
        Footer
    </main>
  )
}

export default RootLayout
