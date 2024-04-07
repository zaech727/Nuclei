import EventCard from "./EventCard"
import ProfileSidebar from "./ProfileSidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-full m-4 pl-4 backdrop-blur-lg bg-white bg-opacity-85 rounded-2xl drop-shadow-2xl">
            <div className="flex-grow bg-gray-100 p-4">
            <div className="flex items-center w-full">
                <h1 className="text-4xl pt-4 font-bold text-secondarypurple">Calendar</h1>
                <div className="ml-auto flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 mx-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            </div>
            <ProfileSidebar />
        </div>
    );
};

export default Dashboard;