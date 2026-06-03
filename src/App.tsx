import './App.css'
import { InformationProvider } from './context/information'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/homePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <InformationProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </InformationProvider>
      </BrowserRouter>
        
    </>
  )
}

export default App
