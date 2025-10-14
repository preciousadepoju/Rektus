import { Zap } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 md:px-8 pt-12 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-white text-4xl md:text-7xl mb-2 md:mb-4 tracking-tight">
            Lock in a deal
          </h1>
          <h2 className="text-[#ff500b] text-4xl md:text-7xl tracking-tight flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            built <img src="/images/hero-lightning-bolt.png" alt="" className="w-10 h-10 md:w-16 md:h-16 inline-block blur-sm -mr-1 md:-mr-2" /> trust.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="border-2 border-[#ff500b] rounded-2xl p-6 md:p-12 flex flex-col h-[400px] md:h-[500px]">
            <h3 className="text-white text-2xl md:text-4xl text-center">Create a deal.</h3>
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white"></div>
            </div>
            <Button className="bg-[#ff500b] hover:bg-[#ff6020] text-black px-8 py-4 md:py-6 rounded-xl w-full">
              Creta a deal for a project
            </Button>
          </div>
          
          <div className="border-2 border-[#ff500b] rounded-2xl p-6 md:p-12 flex flex-col h-[400px] md:h-[500px]">
            <h3 className="text-white text-2xl md:text-4xl text-center">
              Sign a deal<br />as KOL.
            </h3>
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white"></div>
            </div>
            <Button 
              variant="outline" 
              className="border-2 border-[#ff500b] text-[#ff500b] hover:bg-[#ff500b]/10 px-8 py-4 md:py-6 rounded-xl w-full bg-transparent"
            >
              Sign
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
