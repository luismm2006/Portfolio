import './App.css'
import { useEffect } from 'react'
import { InformationProvider } from './context/information'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home';

function App() {
  useEffect(() => {
    // AOS deshabilitado
  }, [])

  return (
    <>
      <BrowserRouter>
        <InformationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </InformationProvider>
      </BrowserRouter>
        
    </>
  )
}

export default App
