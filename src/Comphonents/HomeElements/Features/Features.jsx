import { useEffect, useState } from "react";
import Job from "./Job/Job";

const Features = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-bold">
          Featured Jobs {jobs.length}
        </h1>
        <p className="text-center font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:mt-10">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Features;
