import React, { useState } from 'react'

import hunger from '../images/hunger.jpg';

import axios from 'axios';
import Swal from 'sweetalert2';
import FormData from 'form-data';


function FoodDonation() {

    const [newFood, setNewFood] = useState(
        {
            name: '',
            foodType: '',
            quantity: '',
            donator: '',
            donator_phone: '',
            address: ''
        }
    );

    const handleChange = ({ target }) => {
        setNewFood({ ...newFood, [target.name]: target.value });
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
                    url: 'http://localhost:8000/api/food/',
                    data: {
                        name: newFood.name,
                        foodType: newFood.foodType,
                        quantity: newFood.quantity,
                        donator: newFood.donator,
                        donator_phone: newFood.donator_phone,
                        address: newFood.address
                    }
                });
            }
        });
    }

    return (
        <div class="container w-100 h-100 d-flex flex-row justify-content-center align-items-center">
            <div class="row">
                <div class="col-sm" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={hunger} alt="Logo" width={700} height={400} />
                </div>
                <div class="col-sm">
                    <div className='cloth-form-container'>

                        <section class="vh-100" style={{ paddingTop: '80px' }}>
                            <h1 class="mb-3 d-flex justify-content-center align-items-center">"Share A Meal: Connecting Those in Need with Food Donors"</h1>
                            <div class="container-fluid p-0">
                                <div class="row d-flex justify-content-center align-items-center h-100s h-100 p-0">
                                    <div class="row col-md col-lg col-xl p-0">

                                        <div className='col'>
                                            <form className='' onSubmit={handleSubmit} encType="multipart/form-data">

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Enter Food Name</label><br />
                                                    <input
                                                        class="form-control"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={newFood.name}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Select Food Type</label><br />
                                                    <select
                                                    
                                                        class="form-select form-control"
                                                        name="foodType"
                                                        value={newFood.foodType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Choose food type</option>
                                                        <option value="Instant Food">Instant Food</option>
                                                        <option value="Bakery Items">Bakery Items</option>
                                                        <option value="Dairy Food">Dairy Food</option>
                                                        <option value="Pre Cooked Food">Pre Cooked Food</option>
                                                        <option value="Vegetables">Vegetables</option>
                                                        <option value="Meals">Meals</option>
                                                    </select>
                                                </div>
                                                

                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form3Example3">Enter Food Quantity</label><br />
                                                        <input
                                                            class="form-control"
                                                            placeholder="Quantity"
                                                            name="quantity"
                                                            value={newFood.quantity}
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
                                                            value={newFood.donator}
                                                            onChange={handleChange}
                                                            required
                                                        />

                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form3Example3">Enter Donator's Phone Number</label><br />
                                                        <input
                                                            class="form-control"
                                                            placeholder="Donator Phone"
                                                            name="donator_phone"
                                                            value={newFood.donator_phone}
                                                            onChange={handleChange}
                                                            required
                                                        />

                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form3Example3">Enter Pickup Location</label><br />
                                                        <input
                                                            class="form-control"
                                                            placeholder="Pickup Location"
                                                            name="address"
                                                            value={newFood.address}
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

            export default FoodDonation