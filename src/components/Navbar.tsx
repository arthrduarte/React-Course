
export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row bg-black text-white p-3 justify-between px-[10rem]">
                <div>
                    <a href="index.html"><img src="images/logo.png" alt="Muscle Forge Logo" className="w-[5rem]"/></a>
                </div>
                <div className="lg:hidden my-auto cursor-pointer" id="burger-menu">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </div>
                <div className="hidden lg:flex lg:items-center space-x-4 text-lg" id="nav-links">
                    <a className="hover:text-[#c44536] transition uppercase" href="index.html#contact-us">Contact</a>
                    <a className="hover:text-[#c44536] transition uppercase" href="gallery.html">Gallery</a>
                    <a className="hover:text-black bg-[#c44536] px-4 py-2 uppercase rounded" href="index.html#plans">Plans</a>
                </div>
            </nav>
        </>
    )
}