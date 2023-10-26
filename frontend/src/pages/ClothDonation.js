import React, { useState } from 'react'

import clothes1 from '../images/clothes1.jpg';

import axios from 'axios';
import Swal from 'sweetalert2';
import FormData from 'form-data';


function ClothDonation() {

    const [newCloth, setNewCloth] = useState(
        {
            name: '',
            category: 'Not Defined',
            material: 'Not Defined',
            color: '',
            donator: '',
            donator_phone: '',
            address: ''
        }
    );




    const handleChange = ({ target }) => {
        setNewCloth({ ...newCloth, [target.name]: target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure want to add this donation?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Added!',
                    'success'
                )
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/cloth/',
                    data: {
                        name: newCloth.name, 
                        category: newCloth.category, 
                        material: newCloth.material, 
                        color: newCloth.color,
                        donator: newCloth.donator,
                        donator_phone: newCloth.donator_phone,
                        address: newCloth.address
                    }
                  });

            }
        });

        
                




    }

    const categories = [
        {
            label: "Not Defined",
            value: "Not Defined",
        },
        {
            label: "Denims",
            value: "Denims",
        },
        {
            label: "Shirts",
            value: "Shirts",
        },
        {
            label: "Frocks",
            value: "Frocks",
        },
        {
            label: "Skirts",
            value: "Skirts",
        },
        {
            label: "T-Shirts",
            value: "T-Shirts",
        }
    ];

    const materials = [
        {
            label: "Not Defined",
            value: "Not Defined",
        },
        {
            label: "Silk",
            value: "Silk",
        },
        {
            label: "Leather",
            value: "Leather",
        },
        {
            label: "Wool",
            value: "Wool",
        }
    ];

    return (
        <div class="container w-100 h-100 d-flex flex-row justify-content-center align-items-center">
            <div class="row">
                <div class="col-sm" style={{ display:'flex', alignItems:'center'}}>
                    <img src={clothes1} style={{ width:'600px' }}/>
                </div>
                <div class="col-sm">
                    <div className='cloth-form-container'>

                        <section class="vh-100" style={{ paddingTop: '80px' }}>
                            <h1 class="mb-3 d-flex justify-content-center align-items-center">Wrap Someone in Warmth: Donate Clothes Today</h1>
                            <div class="container-fluid p-0">
                                <div class="row d-flex justify-content-center align-items-center h-100s h-100 p-0">
                                    <div class="row col-md col-lg col-xl p-0">

                                        <div className='col'>
                                            <form className='' onSubmit={handleSubmit} encType="multipart/form-data">

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Enter Cloth Name</label><br />
                                                    <input
                                                        class="form-control"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={newCloth.name}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                </div>

                                                <div className="select-container">
                                                    <label className="form-label" for="form3Example3">Select Cloth Category</label><br />
                                                    <select className="form-select form-control" name="category" value={newCloth.category} onChange={handleChange} required>
                                                        {categories.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select>
                                                </div><br />

                                                <div className="select-container">
                                                    <label className="form-label" for="form3Example3">Select Cloth Material</label><br />
                                                    <select className="form-select form-control" name="material" value={newCloth.material} onChange={handleChange}>
                                                        {materials.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select>
                                                </div><br />

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Enter Cloth Color</label><br />
                                                    <input
                                                        class="form-control"
                                                        placeholder="Color"
                                                        name="color"
                                                        value={newCloth.color}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Enter Donator Name</label><br />
                                                    <input
                                                        class="form-control"
                                                        placeholder="Donator"
                                                        name="donator"
                                                        value={newCloth.donator}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Enter Donator Phone Number</label><br />
                                                    <input
                                                        class="form-control"
                                                        placeholder="Donator Phone"
                                                        name="donator_phone"
                                                        value={newCloth.donator_phone}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Enter Donator Address</label><br />
                                                    <input
                                                        class="form-control"
                                                        placeholder="Pickup Location"
                                                        name="address"
                                                        value={newCloth.address}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                </div>


                                                <div class="text-center text-lg-start mt-4 pt-2">
                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default ClothDonation