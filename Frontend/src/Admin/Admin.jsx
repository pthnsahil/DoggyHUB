import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Navbar_AP from '../Components/Navbar_AP';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

function Admin() {

    const [search, setSearch] = useSearchParams()
    const check = search.get('login')

    function isLogin() {
        return !!localStorage.getItem('logIn');
    }

    const [data, setData] = useState([]);
    const [pet, setPet] = useState({});
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [gender, setGender] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState([]);
    const [status, setStatus] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(check)
        if (!isLogin()) {
            window.location.href = "http://localhost:5173/NotFound"
        }
        if (check) { toast.success("login successfully") }
    }, [])

    function handleInputs(e) {
        e.preventDefault();
        console.log(status)
        count == 0 ? (
            axios.post('http://localhost:5001/dog/editPet', { id, name, breed, gender, age, image, status })
                .then(res => {
                    toast.success("Saved successfully");
                    setInitial();
                    fetchData();
                    closePopup();
                })
                .catch(err => { toast.error("Failed"); })) : (axios.post('http://localhost:5001/dog/addPet', { id, name, breed, gender, age, image, status })
                    .then(res => {
                        if (res.data.error) {
                            toast.error(res.data.error);
                        }
                        else {
                            toast.success("saved successfully")
                        }
                        setInitial();
                        setCount(0);
                        fetchData();
                        closePopup();

                    })
                    .catch(err => { toast.error("Failed") }))
    }

    function handleDelete(id) {
        axios.post('http://localhost:5001/dog/deletePet', { id })
            .then(res => {
                toast.error("Deleted successfully");
                fetchData();
            })
            .catch(err => console.log(err));
    }

    function setInitial() {
        setId('');
        setName('');
        setGender('');
        setBreed('');
        setAge('');
    }

    function handleEdit(item) {
        setPet(item);
        setId(item.id);
        setName(item.name);
        setGender(item.gender);
        setBreed(item.breed);
        setAge(item.age);
        setImage(item.image);
        setStatus(item.status);
        document.getElementById('adoptid').style.display = "block";
        document.getElementById('overlay').style.display = "block";
    }

    function closePopup() {
        document.getElementById('adoptid').style.display = "none";
        document.getElementById('overlay').style.display = "none";
    }

    function fetchData() {
        axios.post('http://localhost:5001/dog/allPets')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }

    function handleImageChange(index, event) {
        const newImage = [...image];
        newImage[index] = event.target.value;
        console.log(newImage)
        setImage(newImage);
    }

    function addImageField() {
        setImage([...image, '']);
    }
    function removeImageField(index) {
        const newImage = image.filter((img, i) => i !== index);
        setImage(newImage);
    }
    function handleAdd() {
        setId('');
        setName('');
        setGender('');
        setBreed('');
        setAge('');
        setImage([]);
        setStatus('available');
        setCount((count) => (count + 1))
        document.getElementById('adoptid').style.display = "block";
        document.getElementById('overlay').style.display = "block";

    }
    useEffect(() => {
        fetchData();
    }, []);

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
            <Navbar_AP />
            <div className='d-flex justify-content-end me-4'>
                <button className='btn btn-primary ' style={{ marginTop: "1rem" }} type="submit" onClick={handleAdd} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg></button>
            </div>
            <table className="table mx-auto" style={{ width: "80%", marginTop: "1rem" }}>
                <thead>
                    <tr style={{ backgroundColor: "black" }}>
                        <th >Id</th>
                        <th >Name</th>
                        <th >Breed</th>
                        <th >Gender</th>
                        <th >Age</th>
                        <th>Images</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.breed}</td>
                            <td>{item.gender}</td>
                            <td>{item.age}</td>
                            <td>{item.image.map((img) => {
                                return (
                                    <img src={img} style={{ width: "30%", height: "50px", marginRight: "5px" }}></img>
                                )
                            })}</td>
                            <td>{item.status}</td>
                            <td style={{ alignContent: "center" }} >
                                <button type="button" style={{ width: "40%", backgroundColor: "red", border: 0, marginRight: "5px", padding: "5px", color: "white", borderRadius: "10px" }} onClick={() => handleDelete(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </button>
                                <button type="button" style={{ width: "40%", backgroundColor: "green", border: 0, padding: "5px", color: "white", borderRadius: "10px" }} onClick={() => handleEdit(item)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div id="overlay" onClick={closePopup}></div>

            <div id="adoptid">
                <button className="btn-close" onClick={closePopup}>&times;</button>
                <form onSubmit={handleInputs}>
                    <div className='mb-3'>
                        <input className="form-control" type="text" value={id} placeholder="ID" onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input className="form-control" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input className="form-control" type="text" value={breed} placeholder="Breed" onChange={(e) => setBreed(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input className="form-control" type="text" value={gender} placeholder="Gender" onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input className="form-control" type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className='container mb-3'>
                        {image.map((img, index) => (
                            <div key={index} className="row">
                                <div className='col-9 '>
                                    <input className="form-control" type="text" value={img} placeholder="Image URL" onChange={(e) => handleImageChange(index, e)} /></div>
                                <div className='col'>
                                    {image.length > 1 ? (<button type="button" className="btn btn-danger" onClick={() => removeImageField(index)}>Remove</button>) : null}
                                </div>
                            </div>))}
                        <button type="button" className="btn btn-primary" onClick={addImageField}>Add Image</button>

                    </div>
                    <div className='mb-3'>
                        <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Admin;
