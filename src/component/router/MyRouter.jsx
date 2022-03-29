import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Dashboard from '../../page/dashboard/Dashboard';
import Customer from './../../page/Customer';

const MyRouter = () => {
  return (
    <Routes >
      <Route path="/" element={<Dashboard/>}  />
      <Route path='/customers' element={<Customer/>} />
    </Routes>

  )
}

export default MyRouter