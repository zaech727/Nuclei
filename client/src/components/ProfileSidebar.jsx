import logo from '../assets/logo.png';
import Todo from './Todo';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const ProfileSidebar = () => {
    return (
        <div className="flex w-84 flex-col items-center m-0  bg-primarypink bg-opacity-50">
            <div className="flex p-8 pb-0">
                <div className="text-right">
                    <h1 className="text-xl text-secondarypurple">Welcome,</h1>
                    <h2 className="text-2xl font-bold text-secondarypink">username!</h2>
                </div>
                <div className="w-24 h-24 rounded-full">
                    <img src={logo} alt="Nucleus Logo" className="w-16 h-16 m-6 mt-0 object-fill" />
                </div>
            </div>
            <DateCalendar />
            < Todo />
        </div>
    );
};

export default ProfileSidebar;