import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
// import Features from "../HomeElements/Features/Features";
import JobDetails from "../JobDetails/JobDetails";
import Applied from "../Applied/Applied";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //   path:'/jobs',
        //   element:<Features></Features>
        // },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:() => fetch('../jobs.json')
        },
        {
          path:'/applied',
          element:<Applied></Applied>,
          loader:() => fetch('../jobs.json')
        }
      ]
    },
  ]);

  export default router