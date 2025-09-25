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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/app_bg.png')"}}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-8">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-black text-yellow tracking-wide">STAKR⚡</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-purple-bright hover:text-yellow transition-colors">Home</a>
          <a href="/" className="text-xl font-black text-blue-cyan glow-blue px-4 py-2 rounded-lg transition-all">Leaderboard</a>
          <a href="/profile" className="text-xl font-bold text-purple-bright hover:text-yellow transition-colors">Profile</a>
          <button className="bg-gradient-to-r from-purple-bright to-blue-cyan text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Central Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {/* Countdown Timer */}
        <div className="relative mb-12">
          <div className="timer-card">
            <div className="timer-circle-container">
              <div className="timer-circle">
                <div className="text-gray-light text-xl mb-3 text-center font-bold tracking-wide">Pool Opens In</div>
                <div className="text-white text-7xl font-black text-center tracking-widest">
                  {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Playing Button */}
        <button className="start-playing-btn w-full max-w-lg mb-12">
          Start Playing Now
        </button>

        {/* Min/Max Buttons */}
        <div className="flex gap-8 mb-16 w-full max-w-lg">
          <button className="min-btn flex-1">
            ⏱ Min: 0.5 SOL
          </button>
          <button className="max-btn flex-1">
            ⏱ Max: 0.9 SOL
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-6 mb-12 w-full max-w-lg">
          <div className="stat-card-new flex-1">
            <div className="text-gray-light text-sm mb-3 font-bold uppercase tracking-wider">Total Staked</div>
            <div className="text-blue-cyan text-4xl font-black">0.9 SOL</div>
          </div>
          <div className="stat-card-new flex-1">
            <div className="text-gray-light text-sm mb-3 font-bold uppercase tracking-wider">Total Players</div>
            <div className="text-blue-cyan text-4xl font-black">120</div>
          </div>
        </div>

        {/* Top Participants */}
        <div className="w-full max-w-lg">
          <div className="flex justify-between items-center mb-8">
            <div className="text-gray-light text-sm font-bold uppercase tracking-wider">Top Participants</div>
            <div className="text-gray-light text-sm font-bold uppercase tracking-wider">Staked Amount</div>
          </div>
          
          <div className="participant-card-new">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange to-yellow rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">👤</span>
              </div>
              <span className="text-white font-black text-xl">John Miller</span>
            </div>
            <span className="text-white font-black text-xl">25 SOL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
