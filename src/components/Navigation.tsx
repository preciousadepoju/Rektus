import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onRebuildTrustClick?: () => void;
  onAboutClick?: () => void;
}

export function Navigation({ onRebuildTrustClick, onAboutClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a1a] px-4 md:px-8 py-5 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center">
          <img src="/images/nav-logo-full.png" alt="Rektus" className="h-6 md:h-8" />
        </div>
        
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-12 text-sm text-white/60 flex-1 justify-center">
          <button onClick={onAboutClick} className="hover:text-white transition-colors">About</button>
          <a href="#" className="hover:text-white transition-colors">Solution</a>
          <a href="#" className="hover:text-white transition-colors">How It Works</a>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="outline"
            className="bg-transparent border border-white/10 hover:bg-white/5 text-white/60 hover:text-white px-6 py-2 rounded-lg"
          >
            Back the mission
          </Button>
          
          <Button 
            onClick={onRebuildTrustClick}
            className="bg-[#ff500b] hover:bg-[#ff6020] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Rebuild <img src="/images/button-icon.png" alt="" className="w-4 h-4 inline-block" /> trust
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 space-y-4 border-t border-white/5 pt-4">
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <button onClick={onAboutClick} className="hover:text-white transition-colors text-left">About</button>
            <a href="#" className="hover:text-white transition-colors">Solution</a>
            <a href="#" className="hover:text-white transition-colors">How It Works</a>
          </div>
          
          <div className="flex flex-col gap-3 pt-2">
            <Button 
              variant="outline"
              className="bg-transparent border border-white/10 hover:bg-white/5 text-white/60 hover:text-white px-6 py-2 rounded-lg w-full"
            >
              Back the mission
            </Button>
            
            <Button 
              onClick={onRebuildTrustClick}
              className="bg-[#ff500b] hover:bg-[#ff6020] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-full"
            >
              Rebuild <img src="/images/button-icon.png" alt="" className="w-4 h-4 inline-block" /> trust
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}