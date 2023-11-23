import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-indigo-500 w-auto h-96 p-4 rounded-bl-full  shadow-md">
      <> <style>
        {
          `
            .card4 {
                width: 280px;
                height: 280px;
                background: white;
                border-radius: 32px;
                padding: 3px;
                position: relative;
                box-shadow: #604b4a30 0px 70px 30px -50px;
                transition: all 0.5s ease-in-out;
              }
              
              .card4 .mail {
                position: absolute;
                right: 2rem;
                top: 1.4rem;
                background: transparent;
                border: none;
              }
              
              .card4 .mail svg {
                stroke: #fbb9b6;
                stroke-width: 3px;
              }
              
              .card4 .mail svg:hover {
                stroke: #f55d56;
              }
              
              .card4 .profile-pic {
                position: absolute;
                width: calc(100% - 6px);
                height: calc(100% - 6px);
                top: 3px;
                left: 3px;
                border-radius: 29px;
                z-index: 1;
                border: 0px solid #fbb9b6;
                overflow: hidden;
                transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
              }
              
              .card4 .profile-pic img {
                -o-object-fit: cover;
                object-fit: cover;
                width: 100%;
                height: 100%;
                -o-object-position: 0px 0px;
                object-position: 0px 0px;
                transition: all 0.5s ease-in-out 0s;
              }
              
              .card4 .profile-pic svg {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                -o-object-position: 0px 0px;
                object-position: 0px 0px;
                transform-origin: 45% 20%;
                transition: all 0.5s ease-in-out 0s;
              }
              
              .card4 .bottom {
                position: absolute;
                bottom: 3px;
                left: 3px;
                right: 3px;
                background: #fbb9b6;
                top: 80%;
                border-radius: 29px;
                z-index: 2;
                box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
                overflow: hidden;
                transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
              }
              
              .card4 .bottom .content {
                position: absolute;
                bottom: 0;
                left: 1.5rem;
                right: 1.5rem;
                height: 160px;
              }
              
              .card4 .bottom .content .name {
                display: block;
                font-size: 1.2rem;
                color: white;
                font-weight: bold;
              }
              
              .card4 .bottom .content .about-me {
                display: block;
                font-size: 0.9rem;
                color: white;
                margin-top: 1rem;
              }
              
              .card4 .bottom .bottom-bottom {
                position: absolute;
                bottom: 1rem;
                left: 1.5rem;
                right: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
              
              .card4 .bottom .bottom-bottom .social-links-container {
                display: flex;
                gap: 1rem;
              }
              
              .card4 .bottom .bottom-bottom .social-links-container svg {
                height: 20px;
                fill: white;
                filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
              }
              
              .card4 .bottom .bottom-bottom .social-links-container svg:hover {
                fill: #f55d56;
                transform: scale(1.2);
              }
              
              .card4 .bottom .bottom-bottom .button {
                background: white;
                color: #fbb9b6;
                border: none;
                border-radius: 20px;
                font-size: 0.6rem;
                padding: 0.4rem 0.6rem;
                box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
              }
              
              .card4 .bottom .bottom-bottom .button:hover {
                background: #f55d56;
                color: white;
              }
              
              .card4:hover {
                border-top-left-radius: 55px;
              }
              
              .card4:hover .bottom {
                top: 20%;
                border-radius: 80px 29px 29px 29px;
                transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
              }
              
              .card4:hover .profile-pic {
                width: 100px;
                height: 100px;
                aspect-ratio: 1;
                top: 10px;
                left: 10px;
                border-radius: 50%;
                z-index: 3;
                border: 7px solid #fbb9b6;
                box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
                transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
              }
              
              .card4:hover .profile-pic:hover {
                transform: scale(1.3);
                border-radius: 0px;
              }
              
              .card4:hover .profile-pic img {
                transform: scale(1);
                // -o-object-position: 0px 25px;
                // object-position: 0px 25px;
                transition: all 0.5s ease-in-out 0.5s;
              }
              
              .card4:hover .profile-pic svg {
                transform: scale(2.5);
                transition: all 0.5s ease-in-out 0.5s;
              }
              .text-container {
                position: relative;
                top: -10rem;
                right: 1.5rem;
                text-align: right;
              }
              @media only screen and (max-width: 600px) {
               
        
               
        
                .text-container {
                  top: -350px;
                  right: 0;
                  text-align: center;
                }
        
                .text-right {
                  text-align: center;
                }
        
                .text-container h1 {
                  font-size: 2.5rem;
                }
            `
        }
      </style>
        <div className="card4 mt-14">



          <div className="profile-pic">
            <img src={"/h.png"} />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Dyanesh Dhawale</span>
              <span className="about-me">MERN Stack Developer Artificial Intelligence And Data Science Undergrad .</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <Link href=" https://www.linkedin.com/in/dyanesh-dhawale-8742241b9/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.999" viewBox="0 0 16 15.999">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="white"></path>
                  </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
                <Link href="https://github.com/dyanix">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </Link>
                <Link href="https://leetcode.com/Dyanesh_Dhawale/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#ffffff"></path>
                  </svg>
                </Link>


              </div>
              <button className="button">
                <a href="mailto:recipient-email@example.com?subject=Subject%20Here&body=Your%20Message%20Here">
                  Contact Me
                </a>
              </button>

            </div>

          </div>
        </div>
        <div className="text-container">
          <div className="text-right">
            <h1 className=" md:text-6xl lg:text-9xl space-y-5 font-extrabold">
              About
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text transition-all animate-gradientFlow"> Me..</span>

            </h1>
          </div>
        </div>
      </>


    </footer>
  );
};

export default Footer;
