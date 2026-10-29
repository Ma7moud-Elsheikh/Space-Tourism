import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    let [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);

    const navLinkClasses = ({ isActive }) =>
        `hover:border-white/50 transition-colors duration-300 ease-in-out font-barlow-cond text-preset-8 h-full flex items-center border-b-[3px] tracking-[2.7px] uppercase md:py-6 ${
            isActive ? 'border-white text-white' : 'border-transparent text-white'
        }`;

    useEffect(() => {
        if (hamburgerMenuClicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [hamburgerMenuClicked]);

    return (
        <nav className="navbar absolute top-0 left-0 right-0 w-full flex items-center justify-between pl-6 md:pl-10 lg:pl-14 pt-0 md:pt-0 lg:pt-8 z-50 overflow-x-clip">
            <div className="navLogo w-12 h-12 flex items-center justify-center my-6 md:my-6 lg:my-0">
                <Link to="/" onClick={() => setHamburgerMenuClicked(false)}>
                    <img src="/assets/shared/logo.svg" className="w-12 h-12" alt="logo" />
                </Link>
            </div>

            <div className="navLine hidden md:block flex-1 h-px bg-white/25 ml-16 mr-[-2.5rem] relative z-50 pointer-events-none"></div>

            <button
                aria-label="Toggle Menu"
                className="hamburgerMenu flex md:hidden absolute right-6 top-8 z-50 flex-col gap-1.5 cursor-pointer p-2"
                onClick={() => setHamburgerMenuClicked((prev) => !prev)}
            >
                <span
                    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                        hamburgerMenuClicked ? 'rotate-45 translate-y-2' : ''
                    }`}
                />
                <span
                    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                        hamburgerMenuClicked ? 'opacity-0' : ''
                    }`}
                />
                <span
                    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                        hamburgerMenuClicked ? '-rotate-45 -translate-y-2' : ''
                    }`}
                />
            </button>

            <ul
                className={`navList flex transition-all duration-300 z-40
                fixed md:relative right-0 top-0 bottom-0 h-screen md:h-24 w-[60%] md:w-auto
                flex-col md:flex-row items-start md:items-center justify-start md:justify-center
                pt-28 md:pt-0 gap-8 md:gap-12 px-8 md:px-24 lg:pl-40 lg:pr-20
                backdrop-blur-2xl bg-white/4 box-border
                ${hamburgerMenuClicked ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                `}
            >
                <li className="w-full md:w-auto h-auto md:h-full">
                    <NavLink
                        to="/"
                        className={navLinkClasses}
                        onClick={() => setHamburgerMenuClicked(false)}
                    >
                        <span className="font-bold mr-3 inline md:hidden lg:inline">00</span> Home
                    </NavLink>
                </li>
                <li className="w-full md:w-auto h-auto md:h-full">
                    <NavLink
                        to="/destination"
                        className={navLinkClasses}
                        onClick={() => setHamburgerMenuClicked(false)}
                    >
                        <span className="font-bold mr-3 inline md:hidden lg:inline">01</span> Destination
                    </NavLink>
                </li>
                <li className="w-full md:w-auto h-auto md:h-full">
                    <NavLink
                        to="/crew"
                        className={navLinkClasses}
                        onClick={() => setHamburgerMenuClicked(false)}
                    >
                        <span className="font-bold mr-3 inline md:hidden lg:inline">02</span> Crew
                    </NavLink>
                </li>
                <li className="w-full md:w-auto h-auto md:h-full">
                    <NavLink
                        to="/technology"
                        className={navLinkClasses}
                        onClick={() => setHamburgerMenuClicked(false)}
                    >
                        <span className="font-bold mr-3 inline md:hidden lg:inline">03</span> Technology
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
