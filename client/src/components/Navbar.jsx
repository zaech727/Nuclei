const Navbar = () => {
    return (
            <div className="bg-gray-800 text-white w-64 flex-none">
                <div className="flex flex-col justify-between h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                        <h1 className="text-2xl font-bold">Logo</h1>
                    </div>
                    {/* Navigation */}
                    <nav className="flex flex-col flex-grow bg-gray-800">
                        <ul className="py-4">
                            <li className="px-4 py-2 text-white">Events</li>
                            <li className="px-4 py-2 text-white">Graph</li>
                            <li className="px-4 py-2 text-white">Calendar</li>
                            <li className="px-4 py-2 text-white">Members</li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
};

export default Navbar;