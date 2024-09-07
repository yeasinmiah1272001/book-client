import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Book from "../Books/Book";


const Books = () => {
  const { data: cart = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await axios.get("https://server-side-one-mauve.vercel.app/books");
      return response.data;
    },
  });

  const [shownBooks, setShownBooks] = useState(16); // Number of books initially shown
  const pageSize = 8; // Number of books to load per "Load More" click

  console.log(cart); // Check the fetched data in the console for debugging

  const loadMore = () => {
    setShownBooks((prev) => prev + pageSize); // Increment number of shown books
  };

  return (
    <div className=" py-8 sm:py-12 md:py-16 lg:py-20 shadow-md">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        All Book Collection
      </h1>
      <div className="divider divider-secondary">
        Programming Book Collection
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Render your books data here */}
        {cart.slice(0, shownBooks).map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>

      {/* Load More Button */}
      {shownBooks < cart.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;
