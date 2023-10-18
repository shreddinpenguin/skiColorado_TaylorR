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
import NewMountainForm from './NewMountainForm'

function App() {

  const [epic, setEpic] = useState([])
  const [ikon, setIkon] = useState([])
  const [add, setAdd] = useState([])
  const [allResorts, setAllResorts] = useState([])
  const [isSort, setIsSort] = useState("All")

  useEffect(()=> {
    Promise.all([
        fetch("http://localhost:4000/epicResorts"),
        fetch("http://localhost:4000/ikonResorts"),
        fetch("http://localhost:4000/addedResorts"),
    ])
    .then(([resEpic, resIkon, resAdd]) => 
        Promise.all([resEpic.json(), resIkon.json(), resAdd.json()])
    )
    .then(([dataEpic, dataIkon, dataAdd])=> {
        setEpic(dataEpic)
        setIkon(dataIkon)
        setAdd(dataAdd)
        setAllResorts(dataEpic.concat(dataIkon, dataAdd))
    })
}, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout setIsSort={setIsSort} allResorts={allResorts} />}>
        <Route index element={<Home isSort={isSort} allResorts={allResorts} />} />
        <Route path="Epic" element={<Epic isSort={isSort} epic={epic} />} />
        <Route path="Ikon" element={<Ikon isSort={isSort} ikon={ikon} />} />
        <Route path="NewMountainForm" element={<NewMountainForm submit={submit}/>} />
      </Route>
    )
  )

  function submit(newResort){
    setAllResorts([...allResorts, newResort])
  }

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
