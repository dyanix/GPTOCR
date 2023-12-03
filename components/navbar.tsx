import { UserButton } from "@clerk/nextjs";
import { getApiLimitCount } from "@/lib/api-limit";

import {MobileSidebar} from "./mobile-sidebar"
import { ModeToggle } from "./toggle";
const NavBar = async() => {
    const apiLimitCount = await getApiLimitCount();
    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount} isPro={false}  />
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