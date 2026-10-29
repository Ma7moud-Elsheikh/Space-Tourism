import { useState } from 'react';

let crewsList = [
    {
        id: 0,
        name: 'commander'
    },
    {
        id: 1,
        name: 'specialist'
    },
    {
        id: 2,
        name: 'pilot'
    },
    {
        id: 3,
        name: 'engineer'
    }
];

const Crew = () => {
    const [person, setPerson] = useState('commander');

    return (
        <div className="CrewPage bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-center bg-no-repeat bg-cover h-screen w-full flex items-center md:items-end justify-center pt-[100px] pb-0 lg:pb-16">
            <div className="container mx-auto px-6 md:px-12.5 lg:px-15 m-0!">
                <p className="text-preset-5 text-white mb-10 text-center md:text-start">
                    <span className="font-bold opacity-25">02</span> MEET YOUR CREW
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full items-center relative">
                    <div className="persons_content w-full text-center lg:text-start">
                        <div
                            className={`commander_person_content ${person == 'commander' ? '' : 'hidden'}`}
                        >
                            <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                commander
                            </h2>
                            <h2 className="text-preset-3 uppercase text-white">Douglas Hurley</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                Douglas Gerald Hurley is an American engineer, former Marine Corps
                                pilot and former NASA astronaut. He launched into space for the
                                third time as commander of Crew Dragon Demo-2.
                            </p>
                        </div>
                        <div
                            className={`specialist_person_content ${person == 'specialist' ? '' : 'hidden'}`}
                        >
                            <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                specialist
                            </h2>
                            <h2 className="text-preset-3 uppercase text-white">
                                MARK SHUTTLEWORTH
                            </h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                Mark Richard Shuttleworth is the founder and CEO of Canonical, the
                                company behind the Linux-based Ubuntu operating system. Shuttleworth
                                became the first South African to travel to space as a space
                                tourist.
                            </p>
                        </div>
                        <div
                            className={`pilot_person_content ${person == 'pilot' ? '' : 'hidden'}`}
                        >
                            <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                pilot
                            </h2>
                            <h2 className="text-preset-3 uppercase text-white">Victor Glover</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                Pilot on the first operational flight of the SpaceX Crew Dragon to
                                the International Space Station. Glover is a commander in the U.S.
                                Navy where he pilots an F/A-18.He was a crew member of Expedition
                                64, and served as a station systems flight engineer.
                            </p>
                        </div>
                        <div
                            className={`engineer_person_content ${person == 'engineer' ? '' : 'hidden'}`}
                        >
                            <h2 className="text-preset-4 mb-2 uppercase opacity-50 text-white">
                                engineer
                            </h2>
                            <h2 className="text-preset-3 uppercase text-white">Anousheh Ansari</h2>
                            <p className="text-preset-9 text-space-blue-300 mb-5 lg:w-[90%]">
                                Anousheh Ansari is an Iranian American engineer and co-founder of
                                Prodea Systems. Ansari was the fourth self-funded space tourist, the
                                first self-funded woman to fly to the ISS, and the first Iranian in
                                space.
                            </p>
                        </div>

                        <ul className="persons_list relative lg:absolute lg:bottom-0 flex items-center gap-400 mb-4 lg:mb-6 justify-center lg:justify-start">
                            {crewsList.map((p) => (
                                <li
                                    className={`text-preset-8 swiper_polite md:w-4 md:h-4 h-2.5 w-2.5 rounded-full cursor-pointer opacity-17 bg-white pb-1 transition-all duration-300 ${p.name === person ? 'active_person bg-white opacity-100' : ''}`}
                                    onClick={() => setPerson(`${p.name}`)}
                                    key={p.id}
                                ></li>
                            ))}
                        </ul>
                    </div>
                    <div className="persons_image relative w-full flex items-center justify-center">
                        <div className="p-img relative">
                            <img
                                src={`/assets/crew/image-${person}.png`}
                                className="relative z-0 w-auto h-52 md:h-70 lg:h-120"
                                alt={`${person}-crew`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crew;
