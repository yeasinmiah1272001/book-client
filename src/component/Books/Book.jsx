import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";



const Book = ({book}) => {
       const { isbn, title, author, image_url,category } = book;
       return (
         <Link to={`/details/${category}`}>
           <div className=" w-full h-full rounded overflow-hidden shadow-lg bg-white">
             <img
               className=" w-full h-56 bg-cover mx-auto p-4 transition duration-300 transform hover:scale-125"
               src={image_url}
               alt={title}
             />
             <div className="px-6 py-4">
               <div className="font-bold text-xl mb-2">{title}</div>
               <p className="text-gray-700 text-base">{author}</p>
               <p className="text-gray-700 text-base">{isbn}</p>
             </div>
           </div>
         </Link>
       );
};

export default Book;