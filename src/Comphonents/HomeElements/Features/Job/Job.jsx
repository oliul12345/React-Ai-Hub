/* eslint-disable react/prop-types */

import { MdRoom } from 'react-icons/md';
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    console.log(job)
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
      } = job;
    return (
        <div>
            <div className="card border-2 shadow-xl">
        <figure>
          <img className="p-7 h-[200px] w-[70%]"
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="p-5 ">
          <h2 className="card-title text-3xl">{ job_title}</h2>
          <p className='text-2xl text-gray-400'>{company_name}</p>
          <div className="">
            <button className="border px-4 py-2 rounded-lg me-6 hover:bg-red-500">{remote_or_onsite}</button>
            <button className="border px-4 py-2 rounded-lg hover:bg-red-500">{job_type}</button>
          </div>
          <div className="flex gap-14 my-8 text-gray-400">
            <h1 className='flex items-center gap-2 text-2xl'><MdRoom></MdRoom>{location}</h1>
            <h1 className='flex items-center gap-2 text-2xl'><HiCurrencyDollar></HiCurrencyDollar>{salary}</h1>
          </div>
          <div className="card-actions ">
            <Link to={`jobs/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Job;