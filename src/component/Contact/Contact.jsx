

const Contact = () => {
       return (
         <section className="bg-gray-100 py-8">
           <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Contact Information */}
               <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                 <h3 className="text-xl font-medium text-gray-800 mb-4">
                   Our Address
                 </h3>
                 <p className="text-lg text-gray-800 mb-4">
                   123 Library Street
                   <br />
                   Booktown, BK 56789
                   <br />
                   Country
                 </p>
                 <h3 className="text-xl font-medium text-gray-800 mb-4">
                   Contact Information
                 </h3>
                 <p className="text-lg text-gray-800 mb-4">
                   Email: contact@library.com
                   <br />
                   Phone: +123 456 7890
                   <br />
                   Fax: +123 456 7891
                 </p>
                 <div className="flex items-center justify-center mt-4">
                   <a
                     href="#"
                     className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out mr-4"
                   >
                     <svg
                       className="h-6 w-6 fill-current"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V9h2v2z" />
                     </svg>
                   </a>
                   <a
                     href="#"
                     className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out mr-4"
                   >
                     <svg
                       className="h-6 w-6 fill-current"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V9h2v2z" />
                     </svg>
                   </a>
                   <a
                     href="#"
                     className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                   >
                     <svg
                       className="h-6 w-6 fill-current"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V9h2v2z" />
                     </svg>
                   </a>
                 </div>
               </div>
               {/* Contact Form */}
               <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                 <h3 className="text-xl font-medium text-gray-800 mb-4">
                   Get in Touch
                 </h3>
                 <form>
                   <div className="mb-4">
                     <label
                       className="block text-gray-800 text-sm font-bold mb-2"
                       htmlFor="name"
                     >
                       Name
                     </label>
                     <input
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                       id="name"
                       type="text"
                       placeholder="Your Name"
                     />
                   </div>
                   <div className="mb-4">
                     <label
                       className="block text-gray-800 text-sm font-bold mb-2"
                       htmlFor="email"
                     >
                       Email
                     </label>
                     <input
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                       id="email"
                       type="email"
                       placeholder="Your Email"
                     />
                   </div>
                   <div className="mb-4">
                     <label
                       className="block text-gray-800 text-sm font-bold mb-2"
                       htmlFor="message"
                     >
                       Message
                     </label>
                     <textarea
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                       id="message"
                       rows="4"
                       placeholder="Your Message"
                     ></textarea>
                   </div>
                   <div className="flex items-center justify-center">
                     <button
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                       type="button"
                     >
                       Send Message
                     </button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </section>
       );
};

export default Contact;