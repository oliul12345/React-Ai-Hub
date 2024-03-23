const Banner = () => {
  return (
    <div>
      <div className=" md:flex gap-5">
        <div className="flex justify-center items-center md:w-1/2">
          <div>
            <h1 className="text-5xl font-bold">
              One Step Closer To Your{" "}
              <span className="text-blue-500"> Dream Job</span>
            </h1>
            <p className="my-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/yQ0gZTc/fotor-20240323144829-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
