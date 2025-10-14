export function WarningBanner() {
  return (
    <div className="bg-[#ff500b] text-white py-2 overflow-hidden text-xs md:text-sm">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-2 md:px-4">
          All funds remain in self-executing smart contracts; RECTUS has zero custody or discretionary control. 
        </span>
        <span className="inline-block px-2 md:px-4">
          All funds remain in self-executing smart contracts; RECTUS has zero custody or discretionary control.
        </span>
        <span className="inline-block px-2 md:px-4">
          All funds remain in self-executing smart contracts; RECTUS has zero custody or discretionary control.
        </span>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
