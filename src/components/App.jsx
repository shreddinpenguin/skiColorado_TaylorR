import { React, useState, useEffect } from 'react'
import BaseLayout from '../layout/BaseLayout'
import Epic from './Epic'
import Ikon from './Ikon'
import Home from './Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

function App() {

  // const fetchEpic = async() => {
  //   const epic = await fetch("http://localhost:4000/epicResorts")
  //   return epic.json()
  // }
  // const fetchIkon = async() => {
  //   const ikon = await fetch("http://localhost:4000/ikonResorts")
  //   return ikon.json()
  // }

  // const resortLoader = async () => {
  //   const [fetchEpic, fetchIkon] = await Promise.all([fetchEpic(), fetchIkon()])
  //   return { fetchEpic, fetchIkon }
  // }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="Epic" element={<Epic />} />
        <Route path="Ikon" element={<Ikon />} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
