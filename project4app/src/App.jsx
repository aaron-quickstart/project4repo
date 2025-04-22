import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./AppGlobal.css"


import LoginScreen from './LogInScreen'
import Register from './Register'
import Dashboard from './Dashboard'


export default function App() {
  

  return (
    <BrowserRouter>
      <section className='appBody'>
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </section>
    </BrowserRouter>
  )
}


