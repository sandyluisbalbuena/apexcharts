import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Templates/Layout'
import Home from './Pages/Home.jsx'
import Show from './Pages/Show'
import About from './Pages/About'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DataStoreProvider } from './Context/DataStoreContext'
import Contacts from './Pages/Contacts'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <DataStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/:id' element={<Show />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/about' element={<About />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </DataStoreProvider>
  </QueryClientProvider>
)
