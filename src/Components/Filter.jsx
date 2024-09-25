import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Utils/Slice"; 

const Filter = () => {
  const dispatch = useDispatch();
  const categories = ["All", "Laptops", "Mobiles", "Home Appliances","Clothing", "Beauty"]; 
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value)); 
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="font-bold text-lg mr-2">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="px-3 py-2 border border-gray-300 rounded-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
