
const ProfileSidebar = () => {
    return (
        <div className="flex w-64 flex-col items-center bg-gray-200 p-4 shadow-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gray-300">
                <h1>profile picture</h1>
            </div>
            <div className="w-full mb-4 p-2 bg-white rounded-lg shadow-md">
                <h1>calendar</h1>
            </div>
            <div className="w-full p-2 bg-white rounded-lg shadow-md">
                <h1>todo list</h1>
            </div>
        </div>
    );
};

export default ProfileSidebar;