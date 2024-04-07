import EventCard from "./EventCard"
import ProfileSidebar from "./ProfileSidebar";
import Notifications from "./Notifications";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-full m-4 pl-4 backdrop-blur-lg bg-white bg-opacity-85 rounded-2xl drop-shadow-2xl">
            <div className="flex-grow bg-gray-100 p-4 overflow-hidden">
            <div className="flex items-center w-full">
                <h1 className="text-7xl font-bold text-secondarypurple font-starflower">Upcoming Events</h1>
                <div className="ml-auto flex">
                    <Notifications />
                </div>
            </div>
                <EventCard />
                <EventCard />
            </div>
            <ProfileSidebar />
        </div>
    );
};

export default Dashboard;