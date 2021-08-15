const Nav = () => {
    return ( 
        <nav className="
            text-white
            font-sans 
            flex flex-col
            text-center 
            sm:flex-row 
            sm:text-left 
            sm:justify-between 
            py-4 px-6 
            bg-purple-500
            sm:items-baseline 
            w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className="
                    text-2xl 
                    no-underline 
                    text-grey-darkest 
                    hover:text-blue-dark">SEKELE</a>
            </div>
            <div>
                <a href="/login" className="text-lg no-underline text-grey-darkest hover:text-blue-dark mr-7">Login</a>
                <a href="/register" className="text-lg no-underline text-grey-darkest hover:text-blue-dark mr-10 ml-7">Register</a>
            </div>
        </nav>
    );
}
 
export default Nav;