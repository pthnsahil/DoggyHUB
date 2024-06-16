import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar_AP from '../Components/Navbar_AP';

function Enquiry() {
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
                axios.post('http://localhost:5001/enquiry/fetch_enquiries')
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
                    <th >Name</th>
                    <th >Phone Number</th>
                    <th >Reason</th>
                    <th >Dog ID</th>
                    <th >Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.fname}</td>
                        <td>{item.phone}</td>
                        <td>{item.reason}</td>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Enquiry