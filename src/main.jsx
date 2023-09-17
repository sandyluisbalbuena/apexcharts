import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Templates/Layout'
import Home from './Pages/Home.jsx'
import Show from './Pages/Show'
import About from './Pages/About'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/show' element={<Show />}/>
          <Route path='/about' element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
