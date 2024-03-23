import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utlity/LocalStorage";
import { ToastContainer, toast } from "react-toastify";


  import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobData = useLoaderData();
    console.log(jobData);
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobData.find(uniqeJob => uniqeJob.id === idInt)
    console.log(job)
    const {
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information,
        logo
      } = job;
      const handleApplied = () => {
        saveJobApplication(idInt);
        toast("You have applied successfully");
      };
    return (
        <div>
             <div className="my-10">
      <h1 className="text-3xl text-center font-bold my-14">Job Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border md:col-span-3 p-7 rounded-xl ">
          <p>
            {" "}
            <span className="font-bold text-lg">Job Description :</span>{" "}
            {job_description}
          </p>
          <p>
            {" "}
            <span className="font-bold text-lg">
              Job Responsibility :{" "}
            </span>{" "}
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold text-lg">
              Educational qualification :{" "}
            </span>{" "}
            {educational_requirements}
          </p>
          <p>
            {" "}
            <span className="font-bold text-lg">Experiance : </span>{" "}
            {experiences}
          </p>
          <img className="w-full h-[100px]" src={logo} alt="" />
        </div>

        <div className="border p-7 rounded-xl">
          <h1 className="font-bold text-lg">Job Details</h1>
          <hr className="my-6" />
          <p>Salary : {salary}</p>
          <p>Job Title : {job_title}</p>
          <hr className="my-6" />
          <p className="text-xl font-bold">Contact Information</p>
          <p>
            <span className="font-bold text-lg">Phone</span> :{" "}
            {contact_information.phone}
          </p>
          <p>
            <span className="font-bold text-lg">Email</span> :{" "}
            {contact_information.email}
          </p>
          <p>
            <span className="font-bold text-lg">Address</span> :{" "}
            {contact_information.address}
          </p>
          <button onClick={handleApplied} className="btn btn-primary my-7" >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer
         position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
         />
    </div>
        </div>
    );
};

export default JobDetails;