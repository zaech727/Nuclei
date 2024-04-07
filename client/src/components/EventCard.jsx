import React from 'react';
import MiniStack from './MiniStack';

const EventCard = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <div
            className={`relative m-6 bg-white rounded-lg overflow-auto w-6/12 transition-all duration-300 hover:text-opacity-100 hover:bg-primarypink hover:drop-shadow-2xl hover:bg-opacity-50 shadow-lg ${isExpanded ? 'h-96' : 'h-28'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex p-4">
                <div className="">
                    <div className="bg-primarypurple bg-opacity-50 text-white p-2 rounded-sm flex flex-col items-center w-16">
                        <span className="font-bold">APR</span>
                        <span className="text-2xl">02</span>
                    </div>
                </div>
                <div className="flex flex-col mx-8">
                    <h1 className="text-xl font-bold text-secondarypurple">Event Name</h1>
                    <div className="flex pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 h-4 mr-2 mt-0.5 stroke-secondarypink">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h2 className="text-secondarypink text-sm">Time</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 h-4 mx-2 mt-0.5 stroke-secondarypink">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h2 className="text-secondarypink text-sm">Location</h2>
                    </div>
                    <p className="text-sm pt-2 text-opacity-50">Description...</p>
                </div>
            </div>
            {isExpanded && (
                <div className="absolute top-24 p-4 w-full">
                    <div className="flex justify-normal">
                        <div className="flex flex-col">
                            <div className="mb-2">
                                <h1 className="text-xl font-bold text-primarypurple mb-2">Reminders</h1>
                                <p>Lorem ipsum dolor sit amet...</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold text-primarypurple">Links</h1>
                                <button className="bg-primarypurple bg-opacity-50 rounded p-2 text-offwhite m-2">Trip Packet</button>
                                <button className="bg-primarypurple bg-opacity-50 rounded p-2 text-offwhite m-2">Itinerary</button>
                            </div>
                        </div>
                        <div className="flex flex-col ml-8">
                            <div className="mb-2">
                                <h1 className="text-xl font-bold text-primarypurple mb-2">Members</h1>
                                <div className="flex items-center">
                                    <MiniStack />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventCard;