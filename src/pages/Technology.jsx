import { useState } from 'react';

let techList = [
    {
        id: 0,
        name: 'spaceport'
    },
    {
        id: 1,
        name: 'capsule'
    },
    {
        id: 2,
        name: 'vehicle'
    }
];

const Technology = () => {
    const [technology, setTechnology] = useState('spaceport');

    return (
        <div className="TechnologyPage bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-center bg-no-repeat bg-cover h-screen w-full flex items-center md:items-end justify-center pt-[100px] pb-0 lg:pb-16">
            <div className="container mx-auto px-6 md:px-12.5 lg:px-15 m-0! lg:pr-0">
                <p className="text-preset-5 text-white mb-10 text-center md:text-start">
                    <span className="font-bold opacity-25">03</span> SPACE LAUNCH 101
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full items-center relative">
                    <div className="technology_content w-full text-center lg:text-start order-2 lg:order-1">
                        <div className="flex items-center justify-cent flex-col lg:flex-row gap-6 lg:gap-10 mb-6 lg:mb-10">
                            <div
                                className={`order-2 spaceport_technology_content ${technology == 'spaceport' ? '' : 'hidden'}`}
                            >
                                <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                    THE TERMINOLOGY…
                                </h2>
                                <h2 className="text-preset-3 uppercase text-white">SPACEPORT</h2>
                                <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                    A spaceport or cosmodrome is a site for launching (or receiving)
                                    spacecraft, by analogy to the seaport for ships or airport for
                                    aircraft. Based in the famous Cape Canaveral, our spaceport is
                                    ideally situated to take advantage of the Earth’s rotation for
                                    launch.
                                </p>
                            </div>
                            <div
                                className={`order-2 capsule_technology_content ${technology == 'capsule' ? '' : 'hidden'}`}
                            >
                                <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                    THE TERMINOLOGY…
                                </h2>
                                <h2 className="text-preset-3 uppercase text-white">
                                    SPACE CAPSULE
                                </h2>
                                <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                    A space capsule is an often-crewed spacecraft that uses a
                                    blunt-body reentry capsule to reenter the Earth's atmosphere
                                    without wings. Our capsule is where you'll spend your time
                                    during the flight. It includes a space gym, cinema, and plenty
                                    of other activities to keep you entertained.
                                </p>
                            </div>
                            <div
                                className={`order-2 vehicle_technology_content ${technology == 'vehicle' ? '' : 'hidden'}`}
                            >
                                <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                    THE TERMINOLOGY…{' '}
                                </h2>
                                <h2 className="text-preset-3 uppercase text-white">
                                    LAUNCH VEHICLE
                                </h2>
                                <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                    A launch vehicle or carrier rocket is a rocket-propelled vehicle
                                    used to carry a payload from Earth's surface to space, usually
                                    to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                                    powerful in operation. Standing 150 metres tall, it's quite an
                                    awe-inspiring sight on the launch pad!
                                </p>
                            </div>

                            <ul className="technology_list order-1 relative flex items-center gap-400 mb-4 lg:mb-6 justify-center lg:justify-start lg:flex-col">
                                {techList.map((p) => (
                                    <li
                                        className={`text-preset-4 swiper_polite lg:w-1000 lg:h-1000 md:w-14 md:h-14 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer text-white border border-space-blue-300 transition-all duration-300 ${p.name === technology ? 'active_technology bg-white text-black! opacity-100' : ''}`}
                                        onClick={() => setTechnology(`${p.name}`)}
                                        key={p.id}
                                    >
                                        {p.id + 1}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="technology_image relative w-full flex items-center justify-center order-1 lg:order-2">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={`/assets/technology/image-${technology}-1.jpg`}
                            />

                            <img
                                src={`/assets/technology/image-${technology}.jpg`}
                                className="relative z-0 w-auto h-52 md:h-70 lg:h-120"
                                alt={`${technology}-technology`}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
