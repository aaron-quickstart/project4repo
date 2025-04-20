import { HashRouter, Routes, Route } from 'react-router-dom'


import LoginScreen from './LogInScreen'
import Register from './Register'
import Dashboard from './Dashboard'


export default function App() {
  

  return (
    <HashRouter>
      <section className='appBody'>
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </section>
    </HashRouter>
  )
}


