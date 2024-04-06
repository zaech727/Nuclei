import EventCard from "./EventCard"
import ProfileSidebar from "./ProfileSidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-full">
            <div className="flex-grow bg-gray-100 p-4">
            
            <div className="flex items-center w-full">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <div className="ml-auto flex">
                    <p>search</p>
                    <p>notifications</p>
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