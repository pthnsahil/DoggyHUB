import React, { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'


function Sign_up() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [location, setLocation] = useState()

  async function handleInput(e) {
    try {
      e.preventDefault();
      if (password.length< 8) {
        toast.error("Password length should be atleast 8");
      }
      else{
      const res = await axios.post('http://localhost:5001/user/register', { name, email, password, location })

      if (res.data.message) {
        toast.success(res.data.message)
        window.location.href="http://localhost:5173/login"
      }
      else {
        toast.error(res.data.error)
      }
    }
    }
    catch (error) {
      toast.error("error")
    }
  }
  return (
    <>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor:"rgba(200, 200, 200, 0.5)"}}>
        <div className="p-3 rounded " style={{backgroundColor:"#003366",maxWidth:"100%"}} >
          <div className='d-flex justify-content-center'  style={{color:"white"}}><h2 >REGISTER</h2></div>

          <form onSubmit={handleInput} className='mt-3'>
            <div className="mb-3">

              <input type="text" className="form-control" id="exampleInputName1" placeholder='Name'
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">

              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'
                onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">

              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">

              <input type="text" className="form-control" id="exampleInputLocation1" placeholder='Location'
                onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className='text-center'>
              <button type="submit" className=" align-center btn mb-2"  style={{backgroundColor:"brown",color:"white"}}>Submit</button>
            </div>
            <NavLink to='login' style={{color:"white",textDecoration:"none"}}>Click here to Login</NavLink>
          </form>
        </div>
      </div>
    </>
  );
}
export default Sign_up