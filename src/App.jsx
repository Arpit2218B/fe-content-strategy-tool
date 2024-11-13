import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserView, MobileView } from 'react-device-detect'
import UseOnDesktop from './components/UseOnDesktop'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <>
      <MobileView>
        <UseOnDesktop />
      </MobileView>
      <BrowserView>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' forceRedirectUrl='/search' >
          <RouterProvider router={router} />
        </ClerkProvider>
      </BrowserView>
    </>
  )
}

export default App
