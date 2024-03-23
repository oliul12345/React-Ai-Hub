import Banner from "../HomeElements/Banner/Banner";
import Features from "../HomeElements/Features/Features";
import JobCategory from "../HomeElements/JobsCategory/JobCategory";

const Home = () => {
    return (
        <div className="p-2">
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Features></Features>
        </div>
    );
};

export default Home;