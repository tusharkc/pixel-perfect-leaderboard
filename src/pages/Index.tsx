import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 29, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/app_bg.png')" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-yellow">STAKR⚡</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="/" className="text-lg font-medium text-purple-bright">
            Home
          </a>
          <a href="/leaderboard" className="text-lg font-medium text-blue-cyan">
            Leaderboard
          </a>
          <a href="/profile" className="text-lg font-medium text-purple-bright">
            Profile
          </a>
          <button className="bg-purple-bright text-white px-6 py-3 rounded-xl font-semibold">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Central Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Countdown Timer (uses same assets/layout as Pool Active) */}
        <div className="relative mb-8 w-full flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/15264ca5e3036e2eb3a4756afd09727f2831dc27?width=1256"
            alt="Gradient Ring Background"
            className="w-full max-w-[628px] h-auto aspect-[628/391]"
          />
          <div className="absolute left-1/2 top-[3.5%] sm:top-[5.6%] transform -translate-x-1/2 w-[55%] h-[88%] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 393 393" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="home_filter0" x="0.2" y="0.2" width="392.6" height="392.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="11.4" result="effect1_foregroundBlur" />
                </filter>
                <filter id="home_filter1" x="16.8" y="16.8" width="359.4" height="359.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="3.1" result="effect1_foregroundBlur2" />
                </filter>
                <linearGradient id="home_grad" x1="196.606" y1="23" x2="196.394" y2="370" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#16D6C9" />
                  <stop offset="0.302885" stopColor="#565CE1" />
                  <stop offset="0.503296" stopColor="#781EF0" />
                  <stop offset="0.675582" stopColor="#565CE1" />
                  <stop offset="1" stopColor="#16D6C9" />
                </linearGradient>
              </defs>
              <g filter="url(#home_filter0)"><circle cx="196.5" cy="196.5" r="173.5" fill="url(#home_grad)"/></g>
              <g filter="url(#home_filter1)"><circle cx="196.5" cy="196.5" r="173.5" fill="url(#home_grad)"/></g>
              <circle cx="196.62" cy="196.62" r="159.62" fill="#141118"/>
            </svg>
            <div className="relative z-10 text-center px-4">
              <div className="text-lg sm:text-xl font-medium mb-2" style={{ color: '#C7C7D1' }}>Pool Opens In</div>
              <div className="relative">
                <div className="text-white text-5xl sm:text-6xl font-extrabold blur-[5px] absolute inset-0">{`${timeLeft.minutes.toString().padStart(2,'0')}:${timeLeft.seconds.toString().padStart(2,'0')}`}</div>
                <div className="text-white text-5xl sm:text-6xl font-extrabold relative">{`${timeLeft.minutes.toString().padStart(2,'0')}:${timeLeft.seconds.toString().padStart(2,'0')}`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Playing Button */}
        <div className="w-full max-w-[652px] mb-8">
          <button className="w-full relative group hover:scale-105 transition-transform duration-200">
            <svg className="w-full h-[60px] sm:h-[72px]" viewBox="0 0 652 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="home_btn_filter" x="0" y="0.5" width="652" height="87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_btn"/>
                </filter>
                <linearGradient id="home_btn_grad" x1="12" y1="44" x2="640" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#16D6C9"/>
                  <stop offset="0.5" stopColor="#7B2CF5"/>
                  <stop offset="1" stopColor="#16D6C9"/>
                </linearGradient>
              </defs>
              <g filter="url(#home_btn_filter)"><path d="M12 22.5C12 16.9772 16.4772 12.5 22 12.5H630C635.523 12.5 640 16.9772 640 22.5V65.5C640 71.0228 635.523 75.5 630 75.5H22C16.4771 75.5 12 71.0228 12 65.5V22.5Z" fill="url(#home_btn_grad)"/></g>
              <path d="M12 18C12 12.4772 16.4772 8 22 8H630C635.523 8 640 12.4772 640 18V70C640 75.5229 635.523 80 630 80H22C16.4771 80 12 75.5229 12 70V18Z" fill="url(#home_btn_grad)"/>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-medium">Start Playing Now</span>
          </button>
        </div>

        {/* Min/Max Buttons */}
        <div className="w-full max-w-[652px] mb-8">
          <div className="w-full rounded-2xl p-1" style={{ border: '2px solid #16D6C9', background: 'rgba(20,17,24,0.6)' }}>
            <div className="flex gap-4">
              <button className="flex-1 rounded-xl text-black font-semibold py-3" style={{ background: 'linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)' }}>
                ⏱ Min: 0.5 SOL
              </button>
              <button className="flex-1 rounded-xl text-white font-semibold py-3" style={{ background: 'transparent', border: '1px solid #16D6C9' }}>
                ⏱ Max: 0.9 SOL
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mb-8 w-full max-w-md">
          <div
            className="flex-1 rounded-2xl text-center p-6"
            style={{
              backgroundImage: "url('/stats-card-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}
          >
            <div className="text-gray-light text-sm mb-2 font-medium">
              Total Staked
            </div>
            <div className="text-3xl font-bold" style={{ color: '#16D6C9', textShadow: '0 0 12px rgba(22,214,201,0.7)' }}>0.9 SOL</div>
          </div>
          <div
            className="flex-1 rounded-2xl text-center p-6"
            style={{
              backgroundImage: "url('/stats-card-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}
          >
            <div className="text-gray-light text-sm mb-2 font-medium">
              Total Players
            </div>
            <div className="text-3xl font-bold" style={{ color: '#16D6C9', textShadow: '0 0 12px rgba(22,214,201,0.7)' }}>120</div>
          </div>
        </div>

        {/* Top Participants */}
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-light text-sm font-medium">
              Top Participants
            </div>
            <div className="text-gray-light text-sm font-medium">
              Staked Amount
            </div>
          </div>

          <div
            className="rounded-2xl p-5 flex items-center justify-between"
            style={{ background: 'rgba(44,35,58,0.9)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange to-yellow rounded-full flex items-center justify-center">
                <span className="text-white text-lg">👤</span>
              </div>
              <span className="text-white font-semibold text-lg">
                John Miller
              </span>
            </div>
            <span className="text-white font-bold text-lg">25 SOL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
