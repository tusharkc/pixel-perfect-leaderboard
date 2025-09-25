import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 29, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen mobile-gradient">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-yellow">STAKR⚡</span>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="flex flex-col gap-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex items-center justify-center gap-8 px-6 py-4">
        <a href="/" className="text-lg font-semibold text-purple-bright">Home</a>
        <a href="/" className="text-lg font-semibold text-blue-cyan">Leaderboard</a>
        <a href="/profile" className="text-lg font-semibold text-purple-bright">Profile</a>
        <button className="bg-purple-bright text-white px-4 py-2 rounded-lg font-semibold">
          Connect Wallet
        </button>
      </nav>

      {/* Central Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Countdown Timer */}
        <div className="relative mb-8">
          <div className="countdown-container">
            <div className="countdown-inner">
              <div className="text-gray-light text-lg mb-2 text-center">Pool Opens In</div>
              <div className="text-white text-6xl font-bold text-center">
                {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Start Playing Button */}
        <button className="start-playing-button w-full max-w-sm mb-6">
          Start Playing Now
        </button>

        {/* Min/Max Buttons */}
        <div className="flex gap-4 mb-8 w-full max-w-sm">
          <button className="min-button flex-1">
            <span className="text-sm">⏱</span> Min: 0.5 SOL
          </button>
          <button className="max-button flex-1">
            <span className="text-sm">⏱</span> Max: 0.9 SOL
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mb-8 w-full max-w-sm">
          <div className="stats-card flex-1">
            <div className="text-gray-light text-sm mb-1">Total Staked</div>
            <div className="text-white text-2xl font-bold">0.9 SOL</div>
          </div>
          <div className="stats-card flex-1">
            <div className="text-gray-light text-sm mb-1">Total Players</div>
            <div className="text-white text-2xl font-bold">120</div>
          </div>
        </div>

        {/* Top Participants */}
        <div className="w-full max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-light text-sm">Top Participants</div>
            <div className="text-gray-light text-sm">Staked Amount</div>
          </div>
          
          <div className="participant-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brown-medium rounded-full flex items-center justify-center">
                <span className="text-white text-lg">👤</span>
              </div>
              <span className="text-white font-semibold">John Miller</span>
            </div>
            <span className="text-white font-semibold">25 SOL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
