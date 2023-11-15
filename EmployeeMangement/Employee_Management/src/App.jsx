import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Category from './Components/Category';
import Employee from './Components/Employee';
import Profile from './Components/Profile';
import AddCategory from './Components/AddCategory';

function App() {

  return (
   
     <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
      
  )
}

export default App
