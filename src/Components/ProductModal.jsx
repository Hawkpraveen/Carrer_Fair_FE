import React from "react";

const ProductModal = ({ isOpen, product, onClose }) => {
  if (!isOpen || !product) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-11/12 max-w-md md:max-w-2xl lg:max-w-3xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-3xl font-bold"
        >
          &times;
        </button>

        <div className="border-b-2 border-b-slate-800 pb-3">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-cover mb-4 rounded mx-auto"
          />
        </div>

        <div className="pt-3">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">
            {product.name}
          </h3>
          <p className="text-gray-700 mb-4 text-center">
            {product.description}
          </p>
          <p className="text-lg font-semibold mb-2 text-center">
            Price: ₹ {product.price}
          </p>
          <p className="text-lg text-center">Available Stock: {product.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
