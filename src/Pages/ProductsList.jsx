import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../Utils/Slice";
import Filter from "../Components/Filter";
import ProductModal from "../Components/ProductModal";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://carrer-fair-be.onrender.com/api/products/get-products"
        );
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products
    .filter((product) => selectedCategory === "All" || product.category === selectedCategory)
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <Filter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto w-11/12 cursor-pointer"
              onClick={() => openModal(product)} 
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-2/3 object-cover p-5 hover:scale-110 transition-transform"
              />
              <div className="p-4 border-t-2">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2 text-lg font-semibold">
                  Price - ₹ {product.price} /-
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>

      
      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProductList;
