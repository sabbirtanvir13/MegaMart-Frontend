import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <RouterProvider router={router} />
      {/* </AuthProvider> */}
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
