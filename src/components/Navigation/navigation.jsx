export default function Navigation() {
    return (
        <div className="navbar bg-base-100 font_lexend">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="text-3xl font-bold text-[#150B2B]">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-normal text-[#150B2BB3]"><a>Home</a></li>
                    <li className="font-normal text-[#150B2BB3]"><a>Recipes</a></li>
                    <li className="font-normal text-[#150B2BB3]"><a>About</a></li>
                    <li className="font-normal text-[#150B2BB3]"><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <input className="px-4 py-3 rounded-[50px] bg-[#150B2B0D] font-normal text-[#150B2BB3]" type="text" placeholder="Search" />
                <a className="btn text-2xl rounded-full bg-[#0BE58A] ml-4"><i className="fa-regular fa-circle-user"></i></a>
            </div>
        </div>
    );
}