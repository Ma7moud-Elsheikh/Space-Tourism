import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="HomePage text-white bg-[url('/assets/home/background-home-desktop.jpg')] bg-center bg-no-repeat bg-cover h-screen w-full flex items-center md:items-end justify-center pt-[100px] pb-12.5 lg:pb-20.5">
            <div className="container mx-auto px-6 md:px-12.5 lg:px-15 m-0!">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full items-center">
                    <div className="homeText w-full text-center lg:text-left">
                        <p className="text-preset-5 text-space-blue-300 mb-4">
                            SO, YOU WANT TO TRAVEL TO
                        </p>
                        <h2 className="text-preset-1">SPACE</h2>
                        <p className="text-preset-9 text-space-blue-300">
                            Let’s face it; if you want to go to space, you might as well genuinely
                            go to outer space and not hover kind of on the edge of it. Well sit
                            back, and relax because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <div className="homeExplore text-preset-4 w-full flex items-center justify-center lg:justify-end">
                        <Link
                            to="/destination"
                            className="bg-white w-40 h-40 md:w-[200px] md:h-[200px] lg:w-68 lg:h-68 text-space-blue-900 hover:text-space-blue-300 transition-[box-shadow,color] shrink-0 duration-300 flex items-center justify-center rounded-full max-w-full cursor-pointer lg:hover:shadow-[0_0_0_58px_#ffffff20]"
                        >
                            EXPLORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
