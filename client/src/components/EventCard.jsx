import React from 'react';

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
            className={`relative m-6 bg-white shadow-md rounded-lg overflow-hidden w-6/12 transition-all duration-300 ${isExpanded ? 'h-64' : 'h-32'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="p-4">
                <h1 className="text-xl font-bold">Card Content</h1>
            </div>
            {isExpanded && (
                <div className="absolute bottom-0 p-4 w-full">
                    <h2 className="text-lg font-semibold">Expanded Content</h2>
                </div>
            )}
        </div>
    );
};

export default EventCard;