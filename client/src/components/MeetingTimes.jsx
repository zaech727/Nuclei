import React from 'react';

const MeetingTimes = () => {
    const dates = [
        'APR 02, 5:00PM',
        'APR 02, 5:00PM',
        'APR 02, 5:00PM',
        'APR 02, 5:00PM',
        'APR 02, 5:00PM',
    ];

    return (
        <div className="p-4 rounded-lg bg-primarypurple bg-opacity-50 text-secondarypurple h-128 w-80 m-4 flex flex-col">
            <h2 className="text-2xl font-bold m-4 mb-0">When to meet next?</h2>
            <p className="w-9/12 ml-4 mb-4">Nuclei found these meeting times that work best for everyone!</p>
            <ul className="space-y-2">
                {dates.map((date) => (
                    <li key={date}>
                        <button  className="text-lg rounded text-secondarypurple bg-white bg-opacity-50 text-center w-9/12 ml-9 p-2 hover:bg-primarypurple hover:text-white">{date}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeetingTimes;