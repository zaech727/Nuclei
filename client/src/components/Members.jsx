import ProfileSidebar from "./ProfileSidebar";
import StackedList from "./StackedList";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-full m-4 pl-4 backdrop-blur-lg bg-white bg-opacity-85 rounded-2xl drop-shadow-2xl">
            <div className="flex-grow bg-gray-100 p-4">
            <div className="flex items-center w-full">
                <h1 className="text-4xl pt-4 font-bold text-secondarypurple">Members</h1>
                <div className="ml-auto flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 mr-10 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
            </div>
                <StackedList />
            </div>
            <ProfileSidebar />
        </div>
    );
};

export default Dashboard;