import DefaultLayout from "../layouts/DefaultLayout";

export default function FollowingMail () {
    return (
        <DefaultLayout>
            <div className="box-border w-full py-12 pl-4 flex">
                <div className="w-full border border-gray-300 flex flex-col rounded-lg">
                    <div className="border-b border-gray-300">
                        <div className="border-box h-[80px] px-4 flex items-center justify-between border-b border-gray-300">
                            <div className="font-bold text-xl text-gray-700">
                                Liste des mails suivis
                            </div>
                        </div>
                        <div className="px-8 pt-3 pb-0 flex flex-col gap-3 border-b border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center text-lg">
                                    <img src={''} alt="" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col gap-0">
                                        <p className="font-bold text-xl">Mac Arthur</p>
                                        <p className="text-sm text-gray-500">zanouarthur0@gmail.com</p>
                                    </div>
                                </div>
                                <p className="flex gap-4 text-gray-500 items-center">
                                    <span>28/05/2024 </span>
                                    <span>08:40</span>
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <h5 className="text-lg text-left">Titre</h5>
                                <span>Étoile</span>
                            </div>
                            <div>
                                {/**Button : déjà plus bas*/}
                            </div>
                        </div>
                        <div className="px-8 pt-3 pb-0 flex flex-col gap-3 border-b border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center text-lg">
                                    <img src={''} alt="" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col gap-0">
                                        <p className="font-bold text-xl">Mac Arthur</p>
                                        <p className="text-sm text-gray-500">zanouarthur0@gmail.com</p>
                                    </div>
                                </div>
                                <p className="flex gap-4 text-gray-500 items-center">
                                    <span>28/05/2024 </span>
                                    <span>08:40</span>
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <h5 className="text-lg text-left">Titre</h5>
                                <span>Étoile</span>
                            </div>
                            <div>
                                {/**Button : déjà plus bas*/}
                            </div>
                        </div>
                        <div className="px-8 pt-3 pb-0 flex flex-col gap-3 border-b border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center text-lg">
                                    <img src={''} alt="" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col gap-0">
                                        <p className="font-bold text-xl">Mac Arthur</p>
                                        <p className="text-sm text-gray-500">zanouarthur0@gmail.com</p>
                                    </div>
                                </div>
                                <p className="flex gap-4 text-gray-500 items-center">
                                    <span>28/05/2024 </span>
                                    <span>08:40</span>
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <h5 className="text-lg text-left">Titre</h5>
                                <span>Étoile</span>
                            </div>
                            <div>
                                {/**Button : déjà plus bas */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}