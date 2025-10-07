const Channel = () => {
  return (
    <>
      <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <form>
          <div className="mt-5 flex justify-between items-center">
            <label
              className="mr-5 text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="border border-gray-300 p-2 w-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Name"
              id="name"
              name="name"
            />
          </div>

          <div className="mt-5 flex justify-between items-center">
            <label
              className="mr-5 text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="border border-gray-300 p-2 w-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="mt-5 flex justify-between items-center">
            <label
              className="mr-5 text-lg font-medium text-gray-700"
              htmlFor="channel"
            >
              Channel:
            </label>
            <input
              className="border border-gray-300 p-2 w-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="channel"
              id="channel"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Channel;
