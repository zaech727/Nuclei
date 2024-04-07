import logo from '../assets/logo.png';

const ProfileSidebar = () => {
    return (
        <div className="flex w-64 flex-col items-center p-6 m-0  bg-primarypink bg-opacity-85">
            <div className="w-24 h-24 mb-4 rounded-full">
                <img src={logo} alt="Nucleus Logo" className="w-24 h-24 mb-4" />
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