import extra2 from "../../assets/banner/banner6.webp";

const ExtraSection2 = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Left Column */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                About Our Book Store
              </h3>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-1 flex justify-center items-center">
            <div className="max-w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={extra2}
                alt="Bookstore Image"
                className="object-cover w-full h-60 transition duration-300 transform hover:scale-125"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Services
              </h3>
              <ul className="list-disc list-inside">
                <li className="text-base text-gray-700">
                  Book recommendations
                </li>
                <li className="text-base text-gray-700">
                  Author events and signings
                </li>
                <li className="text-base text-gray-700">
                  Book clubs and discussions
                </li>
                <li className="text-base text-gray-700">
                  Book clubs and discussions
                </li>
                <li className="text-base text-gray-700">
                  Book clubs and discussions
                </li>
                {/* Add more services as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection2;
