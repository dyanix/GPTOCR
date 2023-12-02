import NavBar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";


const DashboardLayout = async({
    children,
}: {
    children: React.ReactNode
}) => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
    return (
        <div className="relative h-full">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
            </div>
            <main className="md:pl-72">


                <NavBar />
                {children}
            </main>


        </div>

    )
}

export default DashboardLayout; 