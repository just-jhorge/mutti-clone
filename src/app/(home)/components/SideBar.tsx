import React from "react";

export default function SideBar({ open }: { open: boolean }) {
    return (
        <div className={`fixed ${open ? "block" : "hidden"} z-[200] top-0 left-0 h-screen w-full bg-black/50`}>
            <div className="fixed top-10 left-0 w-[20rem] h-screen z-[300] bg-white">
                This is the content of the SideBar This is another content I am appreciative of whatever is going on
            </div>
        </div>
    );
}
