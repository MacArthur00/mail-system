import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

// eslint-disable-next-line react/prop-types
export default function DefaultLayout ({ children }) {

    const [open, setOpen] = useState(true);

    return(
        <div className="box-border flex flex-row">
            <Sidebar
                on={open}
                handleClick={() => {setOpen(!open)}}
            />

            <main className={`${open ? "ml-[26rem] w-[96rem]" : "ml-28 w-[113rem]"} box-border text-black mr-8`}>
                <Navbar />
                {children}
            </main>
        </div>
    );
}