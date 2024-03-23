import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utlity/LocalStorage";
import { useEffect, useState } from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdRoom } from "react-icons/md";

const Applied = () => {
  const allJobs = useLoaderData();
  const [data, setData] = useState([]);
  const [displayFilter, setDisplayFilter] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setDisplayFilter(data);
    } else if (filter == "remote") {
      const filterRemote = displayFilter.filter(
        (f) => f.remote_or_onsite === "Remote"
      );
      console.log(filterRemote);
      setDisplayFilter(filterRemote);
    } else if (filter == "onsite") {
      const filterOnsite = displayFilter.filter(
        (f) => f.remote_or_onsite === "Onsite"
      );
      setDisplayFilter(filterOnsite);
    }
  };

  useEffect(() => {
    const getAppliedJobLs = getStoredJobApplication();
    if (allJobs.length > 0) {
      const getAppliedJob = allJobs.filter((job) =>
        getAppliedJobLs.includes(job.id)
      );
      setData(getAppliedJob);
      setDisplayFilter(getAppliedJob);
    }
  }, []);
  console.log(data);

  return (
    <div>
      <div className="flex justify-end">
      <details className="dropdown">
        <summary className="m-1 btn">Filter by type</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      </div>

      {displayFilter.map((job) => (
        <div
          key={job.id}
          className="md:flex  md:justify-around my-10 border p-6 rounded-xl"
        >
          <div className="md:flex gap-10">
            <img src={job.logo} alt="" />
            <div>
              <h2 className="card-title text-3xl">{job.job_title}</h2>
              <p className="text-2xl text-gray-400">{job.company_name}</p>
              <div className="">
                <button className="border px-4 py-2 rounded-lg me-6 hover:bg-red-500">
                  {job.remote_or_onsite}
                </button>
                <button className="border px-4 py-2 rounded-lg hover:bg-red-500">
                  {job.job_type}
                </button>
              </div>
              <div className="flex gap-14 my-8 text-gray-400">
                <h1 className="flex items-center gap-2 text-2xl">
                  <MdRoom></MdRoom>
                  {job.location}
                </h1>
                <h1 className="flex items-center gap-2 text-2xl">
                  <HiCurrencyDollar></HiCurrencyDollar>
                  {job.salary}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applied;
