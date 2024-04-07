import logo from '../assets/logo.png';
import Todo from './Todo';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const ProfileSidebar = () => {
    return (
        <div className="flex w-84 flex-col items-center m-0  bg-primarypink bg-opacity-50">
            <div className="flex p-8 pb-0">
                <div className="text-right">
                    <h1 className="text-xl text-secondarypurple">Welcome,</h1>
                    <h2 className="text-2xl font-bold text-secondarypink">Leslie!</h2>
                </div>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile Picture" className="w-16 h-16 m-8 mt-0 mr-0 rounded-full" />
            </div>
            <DateCalendar />
            < Todo />
        </div>
    );
};

export default ProfileSidebar;