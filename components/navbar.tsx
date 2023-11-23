import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./mobile-sidebar"
import { ModeToggle } from "./toggle";
const NavBar = () => {

    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full  justify-end space-x-7 ">
                <div className="mt-1">
                    <UserButton afterSignOutUrl="/" />
                </div>
                <ModeToggle />
            </div>



        </div>

    )
}

export default NavBar;