import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert

const MyBooking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://server-side-one-mauve.vercel.app/borrow")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const handleReturn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-one-mauve.vercel.app/borrow/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Returned!",
                text: "Your booking has been returned.",
                icon: "success",
              });
              setBooking((prev) => prev.filter((book) => book._id !== _id));
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to return your booking.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"My Booking"} subHeading={"Programming Books"} />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Images
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Book Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {booking.map((book) => (
              <tr key={book._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <img
                    className="w-10 h-15 rounded-full"
                    src={book.image}
                    alt=""
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.isbn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {book.collectionDate}
                </td>
                <td
                  onClick={() => handleReturn(book._id)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-red-500 cursor-pointer"
                >
                  Return
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                  <Link to={`/dash/update/${book._id}`}>Update</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                  <Link to={"/dash/payment"}>Buy</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
