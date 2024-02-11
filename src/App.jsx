import {Route , BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home , About,Projects} from './pages'
import FloatingButton from './components/FloatingButton';
import { useState } from 'react';
import Modal from './components/Modal';
export default function App() {
  const [open ,setOpen]=useState(false);
  console.log(open);
  return (
  <main className='bg-slate-300/20'>
<Router>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/projects' element={<Projects/>}/>
 </Routes>
</Router>
<FloatingButton setOpen={setOpen}/>
{open && <Modal setOpen={setOpen} />}
  </main>
  )
}
