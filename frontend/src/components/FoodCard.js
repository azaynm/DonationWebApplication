import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom"

const FoodTodoCard = ({ data, fetchFoods }) => {

    const { _id, name, foodType, quantity, donator, donator_phone, address } = data;
    const navigate = useNavigate();

    const deleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/food/${id}`)
                    .then(response => {
                        console.log(response.data);
                        fetchFoods();
                    })
                    .catch(error => {
                        console.log(error);
                    });
                Swal.fire(
                    'Deleted!',
                    'Donation has been deleted.',
                    'success'
                )
            }
        })


    }
    return (
        <tr>
            <td>{name}</td>
            <td>{foodType}</td>
            <td>{quantity}</td>
            <td>{donator}</td>
            <td>{donator_phone}</td>
            <td>{address}</td>
            <td className='d-flex justify-content-end'>
                <button className="bg-warning" onClick={() => navigate(`/edit-food/${_id}`)} style={{ padding: '0 20px' }}>Edit</button>
                <button className="bg-danger" onClick={() => deleteItem(_id)} style={{ padding: '0 20px' }}>X</button>
                </td>
            
        </tr>
    )
}

export default FoodTodoCard

