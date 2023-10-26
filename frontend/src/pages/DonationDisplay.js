import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TodoCard from '../components/ClothCard';
import generateFoodPDF from "../services/foodsReportGenerator";
import generateClothesPDF from "../services/clothesReportGenerator";
import FoodCard from '../components/FoodCard';
import ClothCard from '../components/ClothCard';

const ClothDonationDisplay = () => {
    const [clothes, setClothes] = useState([]);
    const [food, setFood] = useState([]);

    const fetchClothes = ()=>{
        axios
        .get(`http://localhost:8000/api/cloth/`, {})
        .then(res => {
            const data = res.data
            console.log(data)
            setClothes(data);


        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchClothes();
    }, []);

    const fetchFoods = ()=>{
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
    }

    useEffect(() => {
        fetchFoods();
    }, []);

    const [filter, setFilter] = useState('all'); // State to store the selected filter

  // Function to handle the filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter the clothes based on the selected type
  const filteredClothes = filter === 'all' ? clothes : clothes.filter((data) => data.category === filter);

  const [foodFilter, setFoodFilter] = useState('all');

  const handleFoodFilterChange = (event) => {
    setFoodFilter(event.target.value);
  };

  const filteredFood = foodFilter === 'all' ? food : food.filter((data) => data.foodType === foodFilter);


    return (
        <div>
            <section className="container">
      <h1>Cloth Donation List</h1>

      <button className="btn btn-primary" onClick={() => generateClothesPDF(filteredClothes)}>
        Get Donation List PDF
      </button>

      <div className="mt-3">
        <label htmlFor="filter" className="mr-2">Filter by Type:</label>
        <select id="filter" className="form-control form-group" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Not Defined">Not Defined</option>
          <option value="Denims">Denims</option>
          <option value="Shirts">Shirts</option>
          <option value="Frocks">Frocks</option>
          <option value="Skirts">Skirts</option>
          <option value="T-Shirts">T-Shirts</option>

          {/* Add more options for different types */}
        </select>
      </div>

      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Material</th>
            <th scope="col">Color</th>
            <th scope="col">Donator Name</th>
            <th scope="col">Donator Phone Number</th>
            <th scope="col">Pickup Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredClothes.map((data) => (
            <ClothCard data={data} fetchClothes={fetchClothes} key={data.id} />
          ))}
        </tbody>
      </table>
    </section>

    <section className="container">
  <h1>Food Donation List</h1>

  <button
    className="btn btn-primary"
    onClick={() => generateFoodPDF(filteredFood)}
  >
    Get Donation List PDF
  </button>

  <div className="mt-3">
    <label htmlFor="foodFilter" className="mr-2">Filter by Type:</label>
    <select id="foodFilter" className="form-control form-group" value={foodFilter} onChange={handleFoodFilterChange}>
      <option value="all">All</option>
      <option value="Instant Food">Instant Food</option>
      <option value="Bakery Items">Bakery Items</option>
      <option value="Dairy Food">Dairy Food</option>
      <option value="Pre Cooked Food">Pre Cooked Food</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Meals">Meals</option>
      {/* Add more options for different types */}
    </select>
  </div>

  <table className="table mt-3">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Food Type</th>
        <th scope="col">Quantity</th>
        <th scope="col">Donator Name</th>
        <th scope="col">Donator Phone Number</th>
        <th scope="col">Pickup Location</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredFood.map((data) => (
        <FoodCard data={data} fetchFoods={fetchFoods} key={data.id} />
      ))}
    </tbody>
  </table>
</section>

        </div>
    )
}

export default ClothDonationDisplay
