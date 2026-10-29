import { useState } from 'react';

let planetsList = [
    {
        id: 0,
        name: 'moon'
    },
    {
        id: 1,
        name: 'mars'
    },
    {
        id: 2,
        name: 'europa'
    },
    {
        id: 3,
        name: 'titan'
    }
];

const Destination = () => {
    const [planet, setPlanet] = useState('moon');

    return (
        <div className="DestinationPage bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-center bg-no-repeat bg-cover h-screen w-full flex items-center md:items-end justify-center pt-[100px] pb-10 lg:pb-20.5">
            <div className="container mx-auto px-6 md:px-12.5 lg:px-15 m-0!">
                <p className="text-preset-5 text-white mb-10 text-center md:text-start">
                    <span className="font-bold opacity-25">01</span> PICK YOUR DESTINATION
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full items-center">
                    <div className="planets_image w-full flex items-center justify-center">
                        <img
                            src={`/assets/destination/image-${planet}.png`}
                            className="w-44 h-44 md:w-64 md:h-64 lg:w-110 lg:h-110"
                            alt={`${planet}-destination`}
                        />
                    </div>
                    <div className="planets_content w-full text-center lg:text-start">
                        <ul className="planets_list flex items-center gap-400 mb-4 lg:mb-6 justify-center lg:justify-start">
                            {planetsList.map((p) => (
                                <li
                                    className={`text-preset-8 cursor-pointer text-space-blue-300 pb-1 transition-all duration-300 ${p.name === planet ? 'active_planet text-white border-b-3 border-white' : ''}`}
                                    onClick={() => setPlanet(`${p.name}`)}
                                    key={p.id}
                                >
                                    {p.name.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                        <div className={`moon_planet_content ${planet == 'moon' ? '' : 'hidden'}`}>
                            <h2 className="text-preset-2 text-white">MOON</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 pb-6 lg:pb-8 border-b border-[#97979777] lg:w-[90%]">
                                See our planet as you’ve never seen it before. A perfect relaxing
                                trip away to help regain perspective and come back refreshed. While
                                you’re there, take in some history by visiting the Luna 2 and Apollo
                                11 landing sites.
                            </p>
                            <div className="grid grid-cols-2 items-center justify-between gap-5">
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        AVG. DISTANCE
                                    </p>
                                    <p className="text-preset-6 text-white">384,400 km</p>
                                </div>
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        Est. travel time
                                    </p>
                                    <p className="text-preset-6 text-white">3 days</p>
                                </div>
                            </div>
                        </div>
                        <div className={`mars_planet_content ${planet == 'mars' ? '' : 'hidden'}`}>
                            <h2 className="text-preset-2 text-white">MARS</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 pb-6 lg:pb-8 border-b border-[#97979777] lg:w-[90%]">
                                Don’t forget to pack your hiking boots. You’ll need them to tackle
                                Olympus Mons, the tallest planetary mountain in our solar system.
                                It’s two and a half times the size of Everest!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5">
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        AVG. DISTANCE
                                    </p>
                                    <p className="text-preset-6 text-white">225 MIL. km</p>
                                </div>
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        Est. travel time
                                    </p>
                                    <p className="text-preset-6 text-white">9 months</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`europa_planet_content ${planet == 'europa' ? '' : 'hidden'}`}
                        >
                            <h2 className="text-preset-2 text-white">EUROPA</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 pb-6 lg:pb-8 border-b border-[#97979777] lg:w-[90%]">
                                The smallest of the four Galilean moons orbiting Jupiter, Europa is
                                a winter lover’s dream. With an icy surface, it’s perfect for a bit
                                of ice skating, curling, hockey, or simple relaxation in your snug
                                wintery cabin.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5">
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        AVG. DISTANCE
                                    </p>
                                    <p className="text-preset-6 text-white">628 MIL. km</p>
                                </div>
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        Est. travel time
                                    </p>
                                    <p className="text-preset-6 text-white">3 years</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`titan_planet_content ${planet == 'titan' ? '' : 'hidden'}`}
                        >
                            <h2 className="text-preset-2 text-white">TITAN</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 pb-6 lg:pb-8 border-b border-[#97979777] lg:w-[90%]">
                                The only moon known to have a dense atmosphere other than Earth,
                                Titan is a home away from home (just a few hundred degrees colder!).
                                As a bonus, you get striking views of the Rings of Saturn.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5">
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        AVG. DISTANCE
                                    </p>
                                    <p className="text-preset-6 text-white">1.6 BIL. km</p>
                                </div>
                                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                                    <p className="text-preset-7 text-space-blue-300">
                                        Est. travel time
                                    </p>
                                    <p className="text-preset-6 text-white">7 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
