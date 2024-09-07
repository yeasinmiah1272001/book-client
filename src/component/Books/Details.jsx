import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";

const Details = () => {
  const details = useLoaderData();
  const [collectionDate, setCollectionDate] = useState("");

  const handleBorrow = async (item) => {
    const data = {
      bookId: item._id,
      bookAuthor: item.author,
      image: item.image_url,
      collectionDate: collectionDate,
      category: item.category,
      isbn: item.isbn
    };

     {
      const response = await axios.post("https://server-side-one-mauve.vercel.app/borrow", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Show success message with SweetAlert
      Swal.fire({
        icon: "success",
        title: "Book Borrowed Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log(response.data);
    } 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Details</h1>
      {Array.isArray(details) && details.length > 0 ? (
        details.map((item) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleBorrow(item);
            }}
            key={item._id}
            className="flex bg-white shadow-md rounded-lg p-6 mb-4"
          >
            {/* Left Side (Image) */}
            {item.image_url && (
              <div className="flex-shrink-0">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-56 h-36 object-cover rounded-lg mb-4"
                />
              </div>
            )}

            {/* Right Side (Content) */}
            <div className="flex-1 ml-4">
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Author:</strong> {item.author}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Category:</strong> {item.category}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Description:</strong> {item.description}
              </p>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>
                    Collection Date:
                    <input
                      type="date"
                      name="date"
                      className="ml-2 border rounded px-2 py-1"
                      value={collectionDate}
                      onChange={(e) => setCollectionDate(e.target.value)}
                      required
                    />
                  </strong>
                </p>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Borrow
                </button>
              </div>
            </div>
          </form>
        ))
      ) : (
        <p className="text-center text-gray-700">No details available</p>
      )}
    </div>
  );
};

export default Details;
