import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' forceRedirectUrl='/search' >
        <RouterProvider router={router} />
      </ClerkProvider>
    </>
  )
}

export default App
