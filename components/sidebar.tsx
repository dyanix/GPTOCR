"use client"
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { LayoutDashboard, MessageSquare, CodeIcon, FolderKanban, SettingsIcon  } from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/codegeneration",
        color: "text-pink-500"
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        href: "/settings",
        color: "text-white-500"
    },
   
]

export const Sidebar = ({
    apiLimitCount = 0,
    isPro=false
}:{
    apiLimitCount: number;
    isPro:boolean
}) => {
    const pathname = usePathname();

    return (
        <>
        <div className="space-y-4 py-4 flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-4">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            src="/olio.png"
                            alt="Logo" />

                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>oLio</h1>
                </Link>
                <div className="space-y-1 mt-10">
                    {routes.map((route) => (
                        <Link href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white hover:bg-white/10 rounded-lg transition"
                                , pathname === route.href ? "text-white bg-white/10 " : "text-zinc-400"
                            )}>

                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}

                            </div>
                        </Link>
                    ))}

                </div>

            </div>
            <FreeCounter
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
        </div>
    </>
    )
}


