import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
       const singledata = useLoaderData()
       console.log(singledata)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: singledata.category,
      image: singledata.image,
      collectionDate: singledata.collectionDate,
      isbn: singledata.isbn,
    },
  });

  const onSubmit = (data) => {
    fetch(`https://server-side-one-mauve.vercel.app/borrow/${singledata._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Booking updated successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update booking.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle heading={"Update Here"} subHeading={"Update Your Book"} />

      <form onSubmit={handleSubmit(onSubmit)}>
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
            htmlFor="collectionDate"
          >
            Booking Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="collectionDate"
            type="date"
            {...register("collectionDate", { required: true })}
          />
          {errors.collectionDate && (
            <span className="text-red-500 text-sm">
              Booking Date is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="isbn"
          >
            Booking Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="isbn"
            type="text"
            placeholder="Booking Number"
            {...register("isbn", { required: true })}
          />
          {errors.isbn && (
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
            Update Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
