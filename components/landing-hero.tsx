"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <style>
        {`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>
          How can I help you {" "}
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text transition-all animate-gradientFlow">today?</span>
          </h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: [
                  "Scan",
                  "Prompt",
                  "thats it",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Create content using AI 10x faster.
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="secondary" className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-purple-400 to-pink-600">
              Start Creating For Free
            </Button>
          </Link>
        </div>
        {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required.
        </div> */}
      </div>
    </>
  );
};