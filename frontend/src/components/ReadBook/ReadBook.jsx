import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReadBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://book-store-backend-fa0o.onrender.com/api/v1/get-book-by-id/${id}`
        );
        setBook(response.data.data); // Assuming `data.data` contains the book info
      } catch (error) {
        console.error("Error fetching book data:", error.response || error.message);
      } finally {
        setLoading(false); // Ensure loading is stopped even if there's an error
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen bg-zinc-900 flex items-center justify-center text-white text-lg">
        Fetching your book...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="h-screen bg-zinc-900 flex items-center justify-center text-red-500 text-lg">
        Oops! No data found for this book.
      </div>
    );
  }

  return (
    <div className="p-8 bg-zinc-900 text-white min-h-screen">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-thin mb-2 text-red-600">{book.title || "Untitled"}</h1>
        <h2 className="text-xl font-semibold text-zinc-400">By: {book.author || "Unknown"}</h2>
      </header>
      <main className="bg-zinc-800 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[70vh] border border-zinc-700">
        <p className="leading-7 text-lg text-zinc-300">{book.content || "Content not available."}</p>
      </main>
    </div>
  );
};

export default ReadBook;
