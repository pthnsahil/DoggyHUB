import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar_AP from '../Components/Navbar_AP';

function Contacts() {
    const [data, setData] = useState([])

    function isLogin() {
        return !!localStorage.getItem('logIn');
    }
    useEffect(
        () => {
            if (!isLogin()) {
                window.location.href = "http://localhost:5173/NotFound"
            }
            else {
                axios.post('http://localhost:5001/contact/fetch_contacts')
                    .then(res => setData(res.data))
                    .catch(err => console.log(err))
            }
        }
        , [])

    return (<>
        <Navbar_AP />
        <table className="table mx-auto" style={{ width: "60%", marginTop: "4rem" }}>
            <thead>
                <tr style={{ backgroundColor: "black" }}>
                    <th >First Name</th>
                    <th>Last Name</th>
                    <th >Email Address</th>
                    <th >City</th>
                    <th >PinCode</th>
                    <th >Comment</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.city}</td>
                        <td>{item.pincode}</td>
                        <td>{item.comment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Contacts