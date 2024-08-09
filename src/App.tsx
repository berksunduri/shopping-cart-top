import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {


  return (
    <>
    <ShoppingCartProvider>
    <Navbar />
    <div className='container mb-4'>
      <Routes>
        <Route path='/' element={<div><Home /></div>} />
        <Route path='/about' element={<div><About /></div>} />
        <Route path='/store' element={<div><Store /></div>} />
      </Routes>
    </div>
    </ShoppingCartProvider>
    </>
  )
}

export default App
