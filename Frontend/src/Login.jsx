import React, { useState } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState('')
  async function handleLogin(e) {
    try {
      e.preventDefault();
      if (password.length < 8) {
        toast.error("Password length should be atleast 8");
      }
      else {

        const s = await axios.post('http://localhost:5001/user/login', { email, password, role })

        if (s.data.message) {

          if (role == "admin") {
            localStorage.setItem('logIn', 'true')
            window.location.href = "http://localhost:5173/admin?login=true"
          }
          else {
            localStorage.setItem('logIn', 'true')
            window.location.href = "http://localhost:5173/home?login=true"

          }
        }
        else {
          toast.error("username or/and password is incorrect ")
        }
      }
    }
    catch (error) {
      toast.error("erorr")

    }

  }


  return (
    <>

      <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "rgba(200, 200, 200, 0.5)" }}>

        <div className="bg-opacity-50 p-3 rounded " style={{ backgroundColor: "#003366", maxWidth: "60%" }}>

          <div className='d-flex justify-content-center' style={{ color: "white" }}><h2 >LOGIN</h2></div>

          <form onSubmit={handleLogin} className='mt-3'  >
            <div className="mb-3">

            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="Email1" placeholder="Email " onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">

              <input type="password" className="form-control" id="Password1" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='mb-3'>
              <select className='form-control' id="role" onChange={(e) => setRole(e.target.value)}>
                <option value=" ">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="text-center mt-5">
              <button type="submit" className="align-center btn" style={{ backgroundColor: "brown", color: "white" }}>Submit</button>
            </div>
          </form>
          <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover />
        </div>
      </div>
    </>
  );
}
export default Login