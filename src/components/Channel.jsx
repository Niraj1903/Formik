const Channel = () => {
  return (
    <>
      <div>
        <form>
          <div className="mt-3 flex justify-center ">
            <label className="mr-5 p-2 " htmlFor="name  w-1/6">
              Name :
            </label>
            <input
              className="border border-black p-1 ml-5 w-[200px]"
              type="text"
              placeholder="Name"
              id="name"
              name="name"
            />
          </div>
          <div className="mt-3 flex justify-center">
            <label className="mr-5 p-2 " htmlFor="email  w-1/6">
              Email :
            </label>
            <input
              className="border border-black p-1 ml-5 w-[200px]"
              type="email"
              placeholder="email"
              name="email"
            />
          </div>
          <div className="mt-3 flex justify-center">
            <label className="mr-5 p-2 " htmlFor="channel w-1/6">
              Channel
            </label>
            <input
              className="border border-black p-1 ml-5 w-[200px]"
              type="text"
              name="channel"
              id="channel"
            />
          </div>
          <div className="mt-3 flex justify-center">
            <button className="ml-5 p-2">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Channel;
