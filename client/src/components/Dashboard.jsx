import EventCard from "./EventCard"
import ProfileSidebar from "./ProfileSidebar";
import Notifications from "./Notifications";
import MeetingTimes from "./MeetingTimes";

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
                <EventCard eventName="General Meeting" location="Tech LR2" desc="The greatest GM of all time!" month="MAY" day="05" time="3:00 PM"/>
                <EventCard eventName="Group Baking" location="2122 Sheridan" desc="Baking bread together - BYO ingredients!" month="APR" day="10" time="2:00 PM"/>
            </div>
                <MeetingTimes />
            <ProfileSidebar />
        </div>
    );
};

export default Dashboard;