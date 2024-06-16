import SignUp from "./SignUp.jsx"
import Login from "./Login.jsx"
import Home from "./Pages/Home.jsx"
import ContactUs from "./Pages/ContactUs.jsx"
import Adopt from "./Pages/Adopt.jsx"
import About from "./Pages/About.jsx"
import DogPage from "./Pages/DogPage.jsx"
import Donate from "./Pages/Donate.jsx"
import Admin from "./Admin/Admin.jsx"
import Enquiry from "./Admin/Enquiry.jsx"
import NotFound from "./NotFound.jsx"
import Contacts from "./Admin/Contacts.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/adopt' element={<Adopt />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/donate" element={<Donate/>}></Route>
        <Route path='/DogPage' element={<DogPage/>}></Route>
        <Route path="/enquiry" element={<Enquiry/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/NotFound" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
