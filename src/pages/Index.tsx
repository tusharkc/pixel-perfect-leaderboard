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
      <header className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-yellow">STAKR⚡</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="/" className="text-lg font-medium text-purple-bright">Home</a>
          <a href="/" className="text-lg font-medium text-blue-cyan">Leaderboard</a>
          <a href="/profile" className="text-lg font-medium text-purple-bright">Profile</a>
          <button className="bg-purple-bright text-white px-6 py-3 rounded-xl font-semibold">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Central Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Countdown Timer */}
        <div className="relative mb-12">
          <div className="timer-container">
            <div className="timer-background">
              <div className="timer-inner">
                <div className="text-gray-light text-lg mb-2 text-center font-medium">Pool Opens In</div>
                <div className="text-white text-7xl font-bold text-center tracking-wider">
                  {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Playing Button */}
        <button className="start-playing-btn w-full max-w-md mb-8">
          Start Playing Now
        </button>

        {/* Min/Max Buttons */}
        <div className="flex gap-6 mb-12 w-full max-w-md">
          <button className="min-btn flex-1">
            ⏱ Min: 0.5 SOL
          </button>
          <button className="max-btn flex-1">
            ⏱ Max: 0.9 SOL
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-6 mb-12 w-full max-w-md">
          <div className="stat-card flex-1">
            <div className="text-gray-light text-sm mb-2 font-medium">Total Staked</div>
            <div className="text-white text-3xl font-bold">0.9 SOL</div>
          </div>
          <div className="stat-card flex-1">
            <div className="text-gray-light text-sm mb-2 font-medium">Total Players</div>
            <div className="text-white text-3xl font-bold">120</div>
          </div>
        </div>

        {/* Top Participants */}
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-light text-sm font-medium">Top Participants</div>
            <div className="text-gray-light text-sm font-medium">Staked Amount</div>
          </div>
          
          <div className="participant-card-new">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange to-yellow rounded-full flex items-center justify-center">
                <span className="text-white text-lg">👤</span>
              </div>
              <span className="text-white font-semibold text-lg">John Miller</span>
            </div>
            <span className="text-white font-bold text-lg">25 SOL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
