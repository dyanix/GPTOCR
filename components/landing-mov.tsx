
import React from 'react';
import { RiJavascriptFill } from "react-icons/ri"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { SiCss3, SiExpress } from "react-icons/si"
import { BiLogoFirebase, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi"

const HighlightsData = [
  {
    name: 'Javascript',
    icon: RiJavascriptFill,
    link: 'https://www.javascript.com/',
    bgColor: '#fff',
  },
  {
    name: 'Css',
    icon: SiCss3,
    link: '',
    bgColor: '#fff',
  },
  {
    name: 'Html',
    icon: AiFillHtml5,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    bgColor: '#fff',
  },
  {
    name: 'Firebase',
    icon: BiLogoFirebase,
    link: 'https://firebase.google.com/',
    bgColor: '#fff',
  },
  {
    name: 'MongoDB',
    icon: BiLogoMongodb,
    link: 'https://www.mongodb.com/',
    bgColor: '#fff',
  },
  {
    name: 'NodeJs',
    icon: BiLogoNodejs,
    link: 'https://nodejs.org/en',
    bgColor: '#fff',
  },
  {
    name: 'ExpressJs',
    icon: SiExpress,
    link: 'https://expressjs.com/',
    bgColor: '#fff',
  },
  {
    name: 'ChartJs',
    icon: AiFillGithub,
    link: 'https://www.chartjs.org/',
    bgColor: '#fff',
  },
  {
    name: 'ChatGPT',
    icon: BiLogoFirebase,
    link: 'https://chat.openai.com/',
    bgColor: '#fff',
  },
  {
    name: 'Github',
    icon: AiFillGithub,
    link: 'https://github.com/',
    bgColor: '#fff',
  },
  {
    name: 'oAuth',
    icon: BiLogoFirebase,
    link: 'https://auth0.com/',
    bgColor: '#fff',
  },
  {
    name: 'Clerk',
    icon: BiLogoFirebase,
    link: 'https://clerk.com/',
    bgColor: '#fff',
  },
];
const duplicatedHighlights = [...HighlightsData, ...HighlightsData]; 

const Highlights = () => {
  return (
    <>
      <style>
        {`
          .marquee {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            animation: marquee 30s linear 0s infinite;
            margin: 30px 0;
          }
          .card1 {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: auto;
            height: 80px;
            margin: 0 10px; /* Add margin to create a gap between cards */
            border-radius: 12px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            padding: 0 18px;
            transform: translateY(0);
            transition: all 0.2s ease-in-out;
          }
          .card1:hover {
            scale: 1.1;
            transform: translateY(-10px);
            border: 1px solid #FF00FF; /* Add your desired border color on hover */
          }
          .marquee:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

         
        `}
      </style>
      <div className="text-center   text-xl md:text-xl  font-bold text-zinc-400">
          Other Tools And Technologies
        </div>
      <div className=" overflow-hidden mb-12">
        <div className="marquee">
          {duplicatedHighlights.map((highlight, i) => (
            <a
              className="card1 flex justify-around items-center w-auto h-20 bg-black rounded-md shadow-md px-4 transition-all hover:scale-110 hover:-translate-y-2  border-violet-600 transform hover:border-pink-500"
              href={highlight.link}
              target="_blank"
              rel="noreferrer noopener"
              key={i}
            >
              <div>
                {highlight.icon && <highlight.icon className="w-10 h-10 rounded-full text-grey-500  text-violet-400" />}
              </div>
              <h2 className="text-lg text-white">{highlight.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Highlights;