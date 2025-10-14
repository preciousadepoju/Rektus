import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

export function DealSetup() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl mb-12 md:mb-16">Deal setup</h1>
        
        {/* Project details */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-white/60 text-xl md:text-2xl mb-6">Project details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input 
              placeholder="Project Name" 
              className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6"
            />
            <Input 
              placeholder="$TICKER" 
              className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6"
            />
          </div>
          <Input 
            placeholder="CA" 
            className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6"
          />
        </div>

        {/* Deal details */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-white/60 text-xl md:text-2xl mb-6">Deal details</h2>
          <Input 
            placeholder="Expected ROI (in USD value)" 
            className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6 mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Input 
              placeholder="Value of the deal (in USD value)" 
              className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6"
            />
            <Input 
              placeholder="Assigned @KOL" 
              className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6"
            />
          </div>

          {/* Payment mode section */}
          <div className="mb-6">
            <h3 className="text-[#ff500b] mb-3">Payment mode to KOL</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Please note that the <span className="text-[#ff500b]">platform receives 10% service fee on each deal</span>. This fee contributes to maintaining and expanding the platform ecosystem, supporting ongoing technology development, and ensuring consistent operational growth.
            </p>
            <div className="flex items-start gap-3">
              <Checkbox 
                id="platform-fee"
                className="border-2 border-[#ff500b] data-[state=checked]:bg-[#ff500b] data-[state=checked]:border-[#ff500b] mt-1"
              />
              <label htmlFor="platform-fee" className="text-white/80 text-sm cursor-pointer">
                I acknowledge and accept the 10% platform service fee and its purpose as stated above.
              </label>
            </div>
          </div>

          <Input 
            placeholder="Start date" 
            className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6 mb-4"
          />
          <Input 
            placeholder="Execution period" 
            className="bg-transparent border-2 border-[#ff500b] text-white placeholder:text-white/40 rounded-lg px-4 py-6"
          />
        </div>

        {/* Disclaimer */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-[#ff500b] mb-4">Disclaimer</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            In the event that the agreed-upon ROI targets are not achieved within the defined timeline, the KOL will still be entitled to receive payment to the wallet address provided. Instead, the allocated funds will be redistributed as follows:
          </p>
          <p className="text-[#ff500b] text-sm mb-2">
            50% of the total amount will be returned to the project's designated wallet.
          </p>
          <p className="text-[#ff500b] text-sm mb-6">
            50% of the total amount will be used for a buyback directly contributing to the REKTUS chart.
          </p>
          <div className="flex items-start gap-3">
            <Checkbox 
              id="terms"
              className="border-2 border-[#ff500b] data-[state=checked]:bg-[#ff500b] data-[state=checked]:border-[#ff500b] mt-1"
            />
            <label htmlFor="terms" className="text-white/80 text-sm cursor-pointer">
              I acknowledge and accept the terms stated above regarding ROI payment distribution and fund reallocation.
            </label>
          </div>
        </div>

        {/* Submit button */}
        <Button className="bg-[#ff500b] hover:bg-[#ff6020] text-black px-8 py-6 rounded-xl flex items-center gap-2">
          Rebuild <img src="/images/button-icon.png" alt="" className="w-4 h-4 inline-block brightness-0" /> trust
        </Button>
      </div>
    </div>
  );
}
