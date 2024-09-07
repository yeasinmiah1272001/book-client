

const ExtraSection3 = () => {
       return (
         <div className="container mx-auto p-4">
           <div className="collapse collapse-plus bg-base-200 mb-4">
             <input type="radio" name="library-accordion" defaultChecked />
             <div className="collapse-title text-xl font-medium">
               Fiction Books
             </div>
             <div className="collapse-content">
               <ul>
                 <li>To Kill a Mockingbird by Harper Lee</li>
                 <li>1984 by George Orwell</li>
                 <li>The Great Gatsby by F. Scott Fitzgerald</li>
                 <li>Moby Dick by Herman Melville</li>
               </ul>
             </div>
           </div>
           <div className="collapse collapse-plus bg-base-200 mb-4">
             <input type="radio" name="library-accordion" />
             <div className="collapse-title text-xl font-medium">
               Non-Fiction Books
             </div>
             <div className="collapse-content">
               <ul>
                 <li>
                   "Sapiens: A Brief History of Humankind" by Yuval Noah Harari
                 </li>
                 <li>Educated by Tara Westover</li>
                 <li>Becoming by Michelle Obama</li>
                 <li>
                   The Immortal Life of Henrietta Lacks by Rebecca Skloot
                 </li>
               </ul>
             </div>
           </div>
           <div className="collapse collapse-plus bg-base-200 mb-4">
             <input type="radio" name="library-accordion" />
             <div className="collapse-title text-xl font-medium">
               Science Fiction Books
             </div>
             <div className="collapse-content">
               <ul>
                 <li>Dune by Frank Herbert</li>
                 <li>Neuromancer by William Gibson</li>
                 <li>Enders Game by Orson Scott Card</li>
                 <li>the Left Hand of Darkness by Ursula K. Le Guin</li>
               </ul>
             </div>
           </div>
         </div>
       );
};

export default ExtraSection3;