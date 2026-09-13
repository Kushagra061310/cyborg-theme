"use client";

import Link from "next/link";
import { useState, useRef } from "react";

// Dynamic Spotlight Card Component
function SpotlightCard({ title, description, colorText, hoverBorder }: { title: string, description: string, colorText: string, hoverBorder: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative p-8 border border-gray-800 bg-gray-900/50 overflow-hidden group cursor-crosshair transition-colors duration-300 ${hoverBorder}`}
    >
      {/* Moving Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        <div className={`${colorText} font-bold mb-4 text-xl tracking-wider transition-colors`}>{title}</div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-mono selection:bg-cyan-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-cyan-900/50 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] tracking-widest cursor-pointer animate-glitch">
          TECHFEST//CYBORG
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="#" className="hover:text-cyan-400 transition-all">Protocol</Link>
          <Link href="#" className="hover:text-cyan-400 transition-all">Systems</Link>
          <Link href="#" className="hover:text-cyan-400 transition-all">Initiate</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="relative z-10 text-center flex flex-col items-center gap-6 mt-10">
          <div className="inline-block px-3 py-1 mb-2 border border-cyan-500/30 text-cyan-400 text-xs tracking-[0.3em] uppercase bg-cyan-500/10 backdrop-blur-md">
            System Online v2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter">
            Humanity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] animate-glitch cursor-default">
              Upgraded
            </span>
          </h1>
          
          <p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed mt-4">
            Step into the next evolution of cybernetic enhancements. Register your neural link to access the Techfest mainframe.
          </p>

          <button className="mt-8 px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black hover:drop-shadow-[0_0_20px_rgba(34,211,238,1)] transition-all duration-300">
            Initialize Sequence
          </button>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-24 px-8 border-t border-cyan-900/30 bg-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-12 text-center">
            System <span className="text-cyan-400">Specifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard 
              title="Neural Link v4" 
              description="Direct brain-to-machine interface with zero-latency data transfer and quantum encryption."
              colorText="text-cyan-400 group-hover:text-cyan-300"
              hoverBorder="hover:border-cyan-500"
            />
            <SpotlightCard 
              title="Titanium Chassis" 
              description="Military-grade exoskeleton providing superior durability while maintaining lightweight agility."
              colorText="text-purple-400 group-hover:text-purple-300"
              hoverBorder="hover:border-purple-500"
            />
            <SpotlightCard 
              title="Optical Sensors" 
              description="Enhanced visual spectrum targeting including thermal, infrared, and ultraviolet processing."
              colorText="text-cyan-400 group-hover:text-cyan-300"
              hoverBorder="hover:border-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-900/30 bg-black text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-cyan-500/40 text-xs font-mono tracking-[0.2em]">
            SYSTEM.LOG // 2026.09.13 // END_OF_FILE
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase mt-2">
            © 2026 Techfest CA Program. All systems operational.
          </p>
        </div>
      </footer>
    </main>
  );
}