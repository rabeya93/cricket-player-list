import Logo from "../assets/logo.png";

const Nav = () => {
    return (
        <div>
            <nav>
                <div className=" mx-auto flex max-w-300 justify-between items-center px-4 py-4">
                    <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <ul className="flex gap-8 items-center text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Fixture</a></li>
                        <li><a href="#" className="hover:text-gray-400">Players</a></li>
                        <li><a href="#" className="hover:text-gray-400">Schedules</a></li>
                        <li className="rounded-lg border px-4 py-2 font-semibold text-black">0 Coin</li>
                    </ul>
                </div>
            </nav>
        </div>
        
    );
};

export default Nav;