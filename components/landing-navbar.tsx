"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import styles from './LandingNavbar.module.css';
const font = Montserrat({ weight: '600', subsets: ['latin'] });


export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className={` p-4 bg-opacity-50 flex items-center justify-between ${styles.glassmorphism}`}>
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/olio.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
        GPTOCR
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full transition-all hover:scale-110 hover:-translate-y-0  border-violet-600 transform hover:scale-100 hover:border-pink-500">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};