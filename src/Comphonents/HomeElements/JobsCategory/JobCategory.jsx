const JobCategory = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-4xl text-center font-bold my-3">
          Job Category List
        </h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-7">
          <div className="border p-4">
            <img src="../../../public/accounts 1.png" alt="" />
            <p className="text-xl font-bold my-3">Account & Finance</p>
            <p>300 Jobs Available</p>
          </div>
          <div className="border p-4">
            <img src="../../../public/chip 1.png" alt="" />
            <p className="text-xl font-bold my-3">Creative Design</p>
            <p>100+ Jobs Available</p>
          </div>
          <div className="border p-4">
            <img src="../../../public/business 1.png" alt="" />
            <p className="text-xl font-bold my-3">Marketing & Sales</p>
            <p>150 Jobs Available</p>
          </div>
          <div className="border p-4">
            <img src="../../../public/social-media 1.png " alt="" />
            <p className="text-xl font-bold my-3">Engineering Job</p>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
