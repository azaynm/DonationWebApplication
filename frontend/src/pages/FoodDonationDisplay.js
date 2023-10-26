import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TodoCard from './ClothCard';
import generatePDF from "../services/foodsReportGenerator";
import FoodTodoCard from './FoodCard';

const FoodDonationDisplay = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/food/`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                setFood(data);


            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    return (
        <div>
            <section className="container">
                <h1>Food Donation List</h1>

                <button
                    className="btn btn-primary"
                    onClick={() => generatePDF(food)}
                >
                    Generate monthly report
                </button>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Donator Name</th>
                            <th scope="col">Donator Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        clothes.map((data) => (
                            <FoodTodoCard data={data} />
                        ))}
                    </tbody>
                </table>

            </section>
        </div>
    )
}

export default FoodDonationDisplay
