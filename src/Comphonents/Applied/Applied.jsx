import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utlity/LocalStorage";
import { useEffect, useState } from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdRoom } from "react-icons/md";

const Applied = () => {
    const [data,setData] = useState([]);
    const allJobs = useLoaderData()

    useEffect(() => {
        const getAppliedJobLs = getStoredJobApplication();
        if(allJobs.length > 0){
            const getAppliedJob = allJobs.filter(job => getAppliedJobLs.includes(job.id))
            setData(getAppliedJob)
        }
    },[])
    console.log(data)
   
    return (
        <div>
            {
                data.map(job =><div key={job.id} className="md:flex  md:justify-around my-10 border p-6 rounded-xl">
                <div className="md:flex gap-10">
                  <img src={job.logo} alt="" />
                  <div>
                  <h2 className="card-title text-3xl">{ job.job_title}</h2>
                  <p className='text-2xl text-gray-400'>{job.company_name}</p>
                  <div className="">
                    <button className="border px-4 py-2 rounded-lg me-6 hover:bg-red-500">{job.remote_or_onsite}</button>
                    <button className="border px-4 py-2 rounded-lg hover:bg-red-500">{job.job_type}</button>
                  </div>
                  <div className="flex gap-14 my-8 text-gray-400">
                    <h1 className='flex items-center gap-2 text-2xl'><MdRoom></MdRoom>{job.location}</h1>
                    <h1 className='flex items-center gap-2 text-2xl'><HiCurrencyDollar></HiCurrencyDollar>{job.salary}</h1>
                  </div>
                  </div>
                </div>
                <div className="flex items-center">
                    <button className="btn btn-primary">View Details</button>
                  </div>
              </div>)
            }
        </div>
    );
};

export default Applied;