import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { Link, useNavigate } from "react-router-dom"; 
import { setSearchTerm } from "../Utils/Slice"; 

const Navbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm); 
  const navigate = useNavigate();


  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    if (searchTerm) {
      navigate("/search"); 
    }
    else{
        navigate('/')
    }
  };

  return (
    <div className="sticky top-0 w-full">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link className="text-white text-lg font-bold" to="/">E-commerce website</Link>

          <form onSubmit={handleSearchSubmit} className="flex items-center bg-white rounded-md w-full md:w-auto ">
            <input
              type="text"
              className="py-1 px-3 focus:outline-none w-full md:w-auto rounded-md"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))} 
            />
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
