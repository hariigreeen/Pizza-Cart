import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';

import { Outlet } from 'react-router-dom';
import Cart from './features/Cart/Cart';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='row'>
        <div className='col-md-8'>
          <div style={{ backgroundAttachment: 'fixed', backgroundImage: "url('https://img.freepik.com/free-vector/polygonal-background_53876-60251.jpg?t=st=1724074061~exp=1724077661~hmac=517606dea5f4e5bd64d23a20f0340ac9e6f7f5d2f6e28bcca4ade03e5701e2c7&w=1060')" }}>
            <NavBar></NavBar>
            <Outlet></Outlet>
          </div>
        </div>
        <div className='col-md-4 d-md-block d-sm-none d-none col-0 bg-danger'>
          <Cart />
        </div>
        <div style={{ backgroundColor: "white" }} className='bg-light col d-md-none d-sm-block d-block fixed-bottom'>
          {/* <Mobilecart></Mobilecart> */}
        </div>
      </div>
    </>
  )
}

export default App
