import React from 'react'
import Navbar from '@/components/Navbar'
import { StreamVideo } from '@stream-io/video-react-sdk'
import StreamVideoProvider from '@/providers/StreamClientProvider'

const RootLayout=({ children }:{children:React.ReactNode})=> {
  return (
    <main>
       <StreamVideoProvider>
          {children}
       </StreamVideoProvider>
        
    </main>
  )
}

export default RootLayout
