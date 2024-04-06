import EventCard from "./EventCard"
import ProfileSidebar from "./ProfileSidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-full">
            <div className="flex-grow bg-gray-100 p-4">
            
            <div className="flex items-center w-full">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <div className="ml-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-4 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19c1.657 0 3-1.343 3-3V9a3 3 0 00-3-3H9a3 3 0 00-3 3v7c0 1.657 1.343 3 3 3h6zm-3-7a2 2 0 100-4 2 2 0 000 4z"
                        />
                    </svg>
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