import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>

        <li className="mr-5 font-bold"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-5 font-bold"><NavLink to='/addCart'>Add Product</NavLink></li>
        <li className="mr-5 font-bold"><NavLink to='/myCart'>My Cart</NavLink></li>


    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Automotive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        
                    </div>
                </label> */}
                <a className="btn">Log in</a>
            </div>
        </div>
    );
};

export default Navbar;