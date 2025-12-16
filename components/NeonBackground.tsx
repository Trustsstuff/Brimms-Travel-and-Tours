import React from 'react';

const NeonBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none hidden dark:block">
      <div className="absolute top-0 left-0 w-full h-full bg-transparent">
        {/* Animated Orbs - Only visible in dark mode via parent class */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-neon-pink/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </div>
  );
};

export default NeonBackground;