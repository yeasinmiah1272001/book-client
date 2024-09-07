import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBooking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitAdd = (data) => {
    fetch("https://server-side-one-mauve.vercel.app/borrow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Optional: Log response data
        Swal.fire({
          title: "Success!",
          text: "Your booking has been added successfully.",
          icon: "success",
        });
        reset(); // Reset form fields after successful submission
      })
  };

  return (
    <div>
      <SectionTitle
        heading={"Add Book"}
        subHeading={"Add your Favourite Book"}
      />

      <form onSubmit={handleSubmit(onSubmitAdd)}>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            placeholder="Category"
            {...register("category", { required: true })}
          />
          {errors.category && (
            <span className="text-red-500 text-sm">Category is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="Image URL"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500 text-sm">Image URL is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Booking Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <span className="text-red-500 text-sm">
              Booking Date is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="bookingNumber"
          >
            Booking Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="bookingNumber"
            type="text"
            placeholder="Booking Number"
            {...register("bookingNumber", { required: true })}
          />
          {errors.bookingNumber && (
            <span className="text-red-500 text-sm">
              Booking Number is required
            </span>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooking;
