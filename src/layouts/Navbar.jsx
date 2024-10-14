import { CircleHelp, Search, Settings } from "lucide-react";

export default function Navbar () {
    return (
        <div className="w-full border-b border-violet-100 flex justify-between py-4 pr-4 text-lg font-bold">
            <div className="w-3/5 relative">
                <input type="search" name="searchMail" id="searchMail" placeholder="Rechercher dans les messages..." className="bg-violet-100 w-full ml-4 pl-16 px-6 py-4 rounded-3xl shadow-lg focus:outline-none" />
                <Search className="absolute inset-y-1 left-6 ml-3 mt-3 w-7 h-7 text-gray-400" />
            </div>

            <div className="w-4/12 flex justify-end gap-6">
                <CircleHelp className="w-16 h-16 p-3 text-violet-400 hover:cursor-pointer hover:bg-violet-100 active:bg-violet-200 rounded-full" />
                <Settings className="w-16 h-16 p-3 text-violet-400 hover:cursor-pointer hover:bg-violet-100 active:bg-violet-200 rounded-full" />
                <img src="vite.svg" alt="" className="w-16 h-16 hover:cursor-pointer overflow-hidden rounded-full" />
            </div>
        </div>
    );
}