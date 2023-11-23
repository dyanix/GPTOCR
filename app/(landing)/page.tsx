import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
// import { LandingContent } from "@/components/landing-content";
// import Highlights from "@/components/landing-mov";
// import Footer from "@/components/landing-footer";

const LandingPage = () => {
  

  return (
    
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      {/* <LandingContent />
     
      <Highlights  />
      <div className="border-b-4 mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
    
      <Footer />
      <div className="border-b-4 mt-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div> */}

    </div>
  );
};

export default LandingPage;
