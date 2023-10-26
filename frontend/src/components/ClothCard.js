import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom"

const ClothCard = ({ data, fetchClothes}) => {

    const { _id, name, category, material, color, donator, donator_phone, address } = data;
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
                axios.delete(`http://localhost:8000/api/cloth/${id}`)
                    .then(response => {
                        console.log(response.data);
                        fetchClothes();
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
            <td>{category}</td>
            <td>{material}</td>
            <td>{color}</td>
            <td>{donator}</td>
            <td>{donator_phone}</td>
            <td>{address}</td>
            <td className='d-flex justify-content-end'>
                <button className="bg-warning" onClick={() => navigate(`/edit-cloth/${_id}`)} style={{ padding: '0 20px' }}>Edit</button>
                <button className="bg-danger" onClick={()=> deleteItem(_id)} style={{padding:'0 20px'}}>X</button>
            </td>
            
        </tr>
    )
}

export default ClothCard

