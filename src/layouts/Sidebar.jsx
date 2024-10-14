import { Book, Clock, Mail, Pencil, SendHorizontal, Star, StickyNote, UserRoundCog } from "lucide-react";
//import { useState } from "react";
//import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Sidebar ({on, handleClick}) {

    //const [concoursOn, setConcoursOn] = useState(false);

    return (
        <aside className={`fixed top-w-720 left-0 h-full ${on ? "w-76" : "w-20"} duration-300 z-10 bg-white text-gray-600 shadow-2xl transition-all duration-250 flex items-start justify-between flex-wrap py-4 px-2 m-4 rounded-t-2xl`}>
            <ChevronLeft size={48} onClick={handleClick} className={`absolute p-2 top-[4.5rem] -right-6 bg-gray-600 text-white hover:border hover:border-white active:bg-gray-300 active:text-gray-600 rounded-full cursor-pointer ${!on && "rotate-180"}`}/>
            <div className="w-full">
                {/* Head */}
                <div className={`${!on && "m-auto"} flex items-center gap-4 pl-6`}>
                    {/*Brand */}
                    <a className="flex flex-row items-center gap-4 text-md font-bold" href="#">
                        <Mail size={32} className="text-gray-600" />
                        <p className={`text-xl text-gray-600 ${!on && "hidden"}`}>
                            Email
                        </p>
                    </a>
                </div>                    
                <hr className={`${!on ? "w-20 mb-4" : "w-full mb-8"} border-violet-400 mt-4`} />
                {/* Main */}
                <div className="w-full" id="">
                    <ul className="w-full flex flex-col items-center content-center gap-[4px]">
                        <li className="w-full">
                            <a className={`${on ? "w-auto mx-4 px-12 hover:pl-14 active:pl-14" : "w-full mx-0 pl-4 active:pl-5"} text-gray-600 py-6 no-underline hover:bg-violet-100 hover:font-bold hover:shadow-lg active:bg-violet-200 font-bold flex items-center gap-6 bg-violet-200 p-2 mb-6 hover:w-full hover:mx-0 text-lg transition-all duration-300 rounded-lg`} href="#">
                                <Pencil size={32} className="text-gray-600" />
                                <p className={`text-xl text-gray-600 ${!on && "hidden"}`}>
                                    Nouveau mail
                                </p>
                            </a>
                        </li>
                        <li className="w-full">
                            <a to="/dashboard">
                                <button
                                    type="button"
                                    onClick={
                                        () => {
                                            ;
                                        }
                                    }
                                    className={`${on ? "w-full px-12 hover:pl-14 active:pl-14" : "w-auto px-3 hover:pl-4 active:pl-5"} py-3 text-gray-600 no-underline hover:bg-violet-100 hover:font-bold active:bg-violet-200 font-bold flex items-center p-2 text-lg transition-all duration-300 rounded-lg`}
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                >
                                    <div className="w-full flex items-center content-center justify-between gap-x-10">
                                        <div className="text-center flex items-center content-center gap-x-4">
                                            <Book size={on ? 24 : 35}/>
                                            <span className={`${!on ? "hidden" : ""}`}>Boîte de réception</span>
                                        </div>
                                        <p className={`${!on ? "hidden" : ""}`}>5</p>
                                    </div>
                                </button>
                            </a>
                        </li>

                        <li className="w-full">
                            <a to="/dashboard">
                                <button
                                    type="button"
                                    onClick={
                                        () => {
                                            ;
                                        }
                                    }
                                    className={`${on ? "w-full px-12 hover:pl-14 active:pl-14" : "w-auto px-3 hover:pl-4 active:pl-5"} py-3 text-gray-600 no-underline hover:bg-violet-100 hover:font-bold active:bg-violet-200 font-bold flex items-center p-2 text-lg transition-all duration-300 rounded-lg`}
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                >
                                    <div className="w-full flex items-center content-center justify-between gap-x-10">
                                        <div className="text-center flex items-center content-center gap-x-4">
                                            <Star size={on ? 24 : 35}/>
                                            <span className={`${!on ? "hidden" : ""}`}>Messages suivis</span>
                                        </div>
                                        <p className={`${!on ? "hidden" : ""}`}>5</p>
                                    </div>
                                </button>
                            </a>
                        </li>

                        <li className="w-full">
                            <a to="/dashboard">
                                <button
                                    type="button"
                                    onClick={
                                        () => {
                                            ;
                                        }
                                    }
                                    className={`${on ? "w-full px-12 hover:pl-14 active:pl-14" : "w-auto px-3 hover:pl-4 active:pl-5"} py-3 text-gray-600 no-underline hover:bg-violet-100 hover:font-bold active:bg-violet-200 font-bold flex items-center p-2 text-lg transition-all duration-300 rounded-lg`}
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                >
                                    <div className="w-full flex items-center content-center justify-between gap-x-10">
                                        <div className="text-center flex items-center content-center gap-x-4">
                                            <Clock size={on ? 24 : 35}/>
                                            <span className={`${!on ? "hidden" : ""}`}>Messages en attente</span>
                                        </div>
                                        <p className={`${!on ? "hidden" : ""}`}>5</p>
                                    </div>
                                </button>
                            </a>
                        </li>

                        <li className="w-full">
                            <a to="/dashboard">
                                <button
                                    type="button"
                                    onClick={
                                        () => {
                                            ;
                                        }
                                    }
                                    className={`${on ? "w-full px-12 hover:pl-14 active:pl-14" : "w-auto px-3 hover:pl-4 active:pl-5"} py-3 text-gray-600 no-underline hover:bg-violet-100 hover:font-bold active:bg-violet-200 font-bold flex items-center p-2 text-lg transition-all duration-300 rounded-lg`}
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                >
                                    <div className="w-full flex items-center content-center justify-between gap-x-10">
                                        <div className="text-center flex items-center content-center gap-x-4">
                                            <SendHorizontal size={on ? 24 : 35}/>
                                            <span className={`${!on ? "hidden" : ""}`}>Messages envoyés</span>
                                        </div>
                                        <p className={`${!on ? "hidden" : ""}`}>5</p>
                                    </div>
                                </button>
                            </a>
                        </li>

                        <li className="w-full">
                            <a to="/dashboard">
                                <button
                                    type="button"
                                    onClick={
                                        () => {
                                            ;
                                        }
                                    }
                                    className={`${on ? "w-full px-12 hover:pl-14 active:pl-14" : "w-auto px-3 hover:pl-4 active:pl-5"} py-3 text-gray-600 no-underline hover:bg-violet-100 hover:font-bold active:bg-violet-200 font-bold flex items-center p-2 text-lg transition-all duration-300 rounded-lg`}
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                >
                                    <div className="w-full flex items-center content-center justify-between gap-x-10">
                                        <div className="text-center flex items-center content-center gap-x-4">
                                            <StickyNote size={on ? 24 : 35}/>
                                            <span className={`${!on ? "hidden" : ""}`}>Brouillons</span>
                                        </div>
                                        <p className={`${!on ? "hidden" : ""}`}>5</p>
                                    </div>
                                </button>
                            </a>
                        </li>
                    </ul>

                    <ul className={`${on ? "mt-10 gap-8" : "mt-6 gap-6"} flex flex-col justify-between`}>
                        <li className="w-full">
                            <a to="">
                                <button type="button" className={`${on ? "w-64 m-auto px-16 hover:pl-14 active:pl-14" :  "w-auto px-3 hover:pl-4 active:pl-5"} h-auto py-3 hover:pl-16 active:bg-gray-300 active:text-gray-600 active:pl-16 font-bold flex items-center text-lg transition-all duration-300 rounded-lg text-white bg-gray-600`} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <div className="text-center flex items-center content-center gap-x-4">
                                        <UserRoundCog size={on ? 24 : 35}/>
                                        <span className={`${!on ? "hidden" : ""}`}>Profil</span>
                                    </div>
                                </button>
                            </a>
                        </li>
                        {/* <li className="w-full">
                            <div className={`${on ? "text-center" : "text-left"}`}>
                                <a to="/accueil">
                                    <button className={`${on ? "w-64 m-auto px-16 hover:pl-14 active:pl-14" :  "w-auto px-1 hover:ml-1 active:ml-1"} h-auto py-3 text-lg text-center text-white bg-violet-600 border-spacing-1 rounded-xl active:bg-violet-300 active:text-violet-600 font-bold transition-all duration-300`}>Accueil</button>
                                </a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
