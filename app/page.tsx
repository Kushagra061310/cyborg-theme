import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-mono selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-cyan-900/50 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] tracking-widest">
          TECHFEST//CYBORG
        </div>
        
        {/* Desktop Links (Hidden on small screens) */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="#" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">Protocol</Link>
          <Link href="#" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">Systems</Link>
          <Link href="#" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">Initiate</Link>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 overflow-hidden">
        
        {/* Cybernetic Grid Background Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="relative z-10 text-center flex flex-col items-center gap-6 mt-10">
          
          {/* Status Badge */}
          <div className="inline-block px-3 py-1 mb-2 border border-cyan-500/30 text-cyan-400 text-xs tracking-[0.3em] uppercase bg-cyan-500/10 backdrop-blur-md">
            System Online v2.0
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter">
            Humanity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Upgraded
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed mt-4">
            Step into the next evolution of cybernetic enhancements. Register your neural link to access the Techfest mainframe.
          </p>

          {/* Glowing Call-to-Action Button */}
          <button className="mt-8 px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black hover:drop-shadow-[0_0_20px_rgba(34,211,238,1)] transition-all duration-300">
            Initialize Sequence
          </button>
          
        </div>
      </section>
    </main>
  );
}