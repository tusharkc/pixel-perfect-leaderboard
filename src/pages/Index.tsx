import { useState, useEffect } from "react";
import { Zap, Menu, Clock } from "lucide-react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 29, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes: number, seconds: number) => {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-darkest to-purple-darker relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(185, 70, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185, 70, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Mobile Layout */}
      <div className="relative z-10 px-6 py-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-orange-light" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wide">
              STAKR
            </h1>
          </div>
          <Menu className="w-6 h-6 text-white" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-between items-center mb-12 px-2">
          <button className="text-white font-medium text-lg">Home</button>
          <button className="text-brown-light font-medium text-lg">Leaderboard</button>
          <button className="text-brown-light font-medium text-lg">Profile</button>
          <button 
            className="px-4 py-2 rounded-lg font-medium text-white"
            style={{ backgroundColor: '#B946FF' }}
          >
            Connect Wallet
          </button>
        </div>

        {/* Central Content Area */}
        <div className="flex flex-col items-center space-y-8">
          {/* Countdown Timer Section */}
          <div className="text-center">
            <p className="text-brown-light text-lg font-medium mb-4">Pool Opens In</p>
            
            {/* Circular Timer with Glow Effect */}
            <div className="relative mb-6">
              <div 
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center relative"
                style={{ 
                  backgroundColor: 'rgba(33, 27, 39, 0.8)',
                  boxShadow: `
                    0 0 40px rgba(29, 200, 204, 0.6),
                    0 0 80px rgba(29, 200, 204, 0.4),
                    inset 0 0 0 3px #1DC8CC
                  `
                }}
              >
                <div className="text-center">
                  <p className="text-gray-blue text-sm mb-2">Pool Opens In</p>
                  <div className="text-6xl font-bold text-white">
                    {formatTime(timeLeft.minutes, timeLeft.seconds)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Playing Button */}
          <button 
            className="w-full max-w-sm py-4 rounded-2xl text-white text-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #1DC8CC 0%, #B946FF 100%)',
              boxShadow: '0 8px 32px rgba(29, 200, 204, 0.3)'
            }}
          >
            Start Playing Now
          </button>

          {/* Min/Max SOL Buttons */}
          <div className="flex gap-4 w-full max-w-sm">
            <button 
              className="flex-1 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#1DC8CC' }}
            >
              <Clock className="w-5 h-5" />
              Min: 0.5 SOL
            </button>
            <button 
              className="flex-1 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#1F152D' }}
            >
              <Clock className="w-5 h-5" />
              Max: 0.9 SOL
            </button>
          </div>

          {/* Statistics Cards */}
          <div className="flex gap-4 w-full max-w-sm">
            <div 
              className="flex-1 p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'rgba(33, 27, 39, 0.8)' }}
            >
              <p className="text-gray-blue text-sm mb-2">Total Staked</p>
              <p className="text-white text-2xl font-bold">0.9 SOL</p>
            </div>
            <div 
              className="flex-1 p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'rgba(33, 27, 39, 0.8)' }}
            >
              <p className="text-gray-blue text-sm mb-2">Total Players</p>
              <p className="text-white text-2xl font-bold">120</p>
            </div>
          </div>

          {/* Top Participants Header */}
          <div className="w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-blue text-sm">Top Participants</p>
              <p className="text-gray-blue text-sm">Staked Amount</p>
            </div>
            
            {/* Participant Entry */}
            <div 
              className="flex items-center justify-between p-4 rounded-2xl"
              style={{ backgroundColor: 'rgba(33, 27, 39, 0.8)' }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ backgroundColor: '#FFD6DD', color: '#944F23' }}
                >
                  JM
                </div>
                <span className="text-white font-medium">John Miller</span>
              </div>
              <span className="text-white font-bold">25 SOL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;