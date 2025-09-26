export default function PoolActive() {
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

      <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[634px] relative">
          {/* Main circular timer container */}
          <div className="relative flex flex-col items-center">
            {/* Gradient ring background image */}
            <div className="relative mb-6 sm:mb-8 w-full flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/15264ca5e3036e2eb3a4756afd09727f2831dc27?width=1256"
                alt="Gradient Ring Background"
                className="w-full max-w-[628px] h-auto aspect-[628/391]"
              />
              {/* Central circular area with timer */}
              <div className="absolute left-1/2 top-[3.5%] sm:top-[5.6%] transform -translate-x-1/2 w-[55%] h-[88%] flex items-center justify-center">
                {/* Glowing gradient ring SVG */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 393 393"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter
                      id="filter0_f_404_4622"
                      x="0.200001"
                      y="0.200001"
                      width="392.6"
                      height="392.6"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.4"
                        result="effect1_foregroundBlur_404_4622"
                      />
                    </filter>
                    <filter
                      id="filter1_f_404_4622"
                      x="16.8"
                      y="16.8"
                      width="359.4"
                      height="359.4"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="3.1"
                        result="effect1_foregroundBlur_404_4622"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_404_4622"
                      x1="196.606"
                      y1="23"
                      x2="196.394"
                      y2="370"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#16D6C9" />
                      <stop offset="0.302885" stopColor="#565CE1" />
                      <stop offset="0.503296" stopColor="#781EF0" />
                      <stop offset="0.675582" stopColor="#565CE1" />
                      <stop offset="1" stopColor="#16D6C9" />
                    </linearGradient>
                  </defs>
                  <g filter="url(#filter0_f_404_4622)">
                    <circle
                      cx="196.5"
                      cy="196.5"
                      r="173.5"
                      fill="url(#paint0_linear_404_4622)"
                    />
                  </g>
                  <g filter="url(#filter1_f_404_4622)">
                    <circle
                      cx="196.5"
                      cy="196.5"
                      r="173.5"
                      fill="url(#paint0_linear_404_4622)"
                    />
                  </g>
                  <circle cx="196.62" cy="196.62" r="159.62" fill="#141118" />
                </svg>
                {/* Timer content */}
                <div className="relative z-10 text-center px-4">
                  <div
                    className="text-lg sm:text-xl font-medium mb-2"
                    style={{ color: "#8493A8" }}
                  >
                    Pool Active
                  </div>
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold blur-[5.75px] absolute inset-0">
                      ??:??
                    </div>
                    <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold relative">
                      ??:??
                    </div>
                  </div>
                  <div
                    className="text-sm sm:text-base font-medium leading-normal max-w-[171px] mx-auto"
                    style={{ color: "#8493A8" }}
                  >
                    Unstake before hidden timer ends!
                  </div>
                </div>
              </div>
            </div>
            {/* Risk Meter */}
            <div className="w-full mb-6 px-2 sm:px-0">
              <div
                className="text-sm sm:text-base font-bold mb-2"
                style={{ color: "#8493A8" }}
              >
                RiskMeter
              </div>
              <div
                className="relative h-3 sm:h-4 rounded-[15px] mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #EE4841 0%, #EC7D25 28.85%, #E5B30A 55.29%, #6DBE3D 73.56%, #25C45C 100%)",
                  boxShadow: "0 -1px 5.6px 0 rgba(0, 0, 0, 0.25)",
                }}
              ></div>
              <div
                className="flex justify-between text-sm sm:text-base"
                style={{ color: "#8493A8" }}
              >
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
            {/* Unstake Now Button */}
            <div className="w-full mb-6 px-2 sm:px-0">
              <button className="w-full relative group hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-full h-[60px] sm:h-[72px]"
                  viewBox="0 0 652 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter
                      id="filter0_f_404_4628"
                      x="0"
                      y="0.5"
                      width="652"
                      height="87"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="6"
                        result="effect1_foregroundBlur_404_4628"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_404_4628"
                      x1="12"
                      y1="44"
                      x2="640"
                      y2="44"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#16D6C9" />
                      <stop offset="1" stopColor="#16D6C9" />
                    </linearGradient>
                  </defs>
                  <g filter="url(#filter0_f_404_4628)">
                    <path
                      d="M12 22.5C12 16.9772 16.4772 12.5 22 12.5H630C635.523 12.5 640 16.9772 640 22.5V65.5C640 71.0228 635.523 75.5 630 75.5H22C16.4771 75.5 12 71.0228 12 65.5V22.5Z"
                      fill="url(#paint0_linear_404_4628)"
                    />
                  </g>
                  <path
                    d="M12 18C12 12.4772 16.4772 8 22 8H630C635.523 8 640 12.4772 640 18V70C640 75.5229 635.523 80 630 80H22C16.4771 80 12 75.5229 12 70V18Z"
                    fill="url(#paint0_linear_404_4628)"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-medium">
                  Unstake Now
                </span>
              </button>
            </div>
            {/* Staked Amount Card */}
            <div
              className="w-full rounded-[18px] border p-4 mb-6 mx-2 sm:mx-0"
              style={{
                borderColor: "#16D6C9",
                background: "rgba(20,17,24,0.60)",
              }}
            >
              <div
                className="text-sm sm:text-base font-medium mb-1"
                style={{ color: "#8493A8" }}
              >
                Staked Amount
              </div>
              <div className="text-white text-lg sm:text-xl font-medium">
                0.5 SOL
              </div>
            </div>
            {/* Top Participants */}
            <div className="w-full px-2 sm:px-0">
              <div
                className="text-white text-sm sm:text-base font-bold mb-4 text-center"
                style={{ opacity: 0.38 }}
              >
                Top Participants
              </div>
              {/* Participant 1 */}
              <div
                className="w-full h-14 sm:h-16 rounded-[10px] shadow-lg flex items-center p-3 sm:p-4 mb-3 sm:mb-4 hover:bg-opacity-80 transition-all duration-200"
                style={{ background: "rgba(20,17,24,0.60)" }}
              >
                <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] rounded-full bg-[#C9F2E9] flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 relative">
                    {/* Avatar SVG - simplified version */}
                    <div className="w-full h-full rounded-full bg-[#C9824B] flex items-center justify-center">
                      <div className="text-xs">👤</div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-sm sm:text-base font-medium">
                  John Miller
                </div>
              </div>
              {/* Participant 2 */}
              <div
                className="w-full h-14 sm:h-16 rounded-[10px] shadow-lg flex items-center p-3 sm:p-4 mb-3 sm:mb-4 hover:bg-opacity-80 transition-all duration-200"
                style={{ background: "rgba(20,17,24,0.60)" }}
              >
                <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] rounded-full bg-[#C9F2E9] flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 relative">
                    <div className="w-full h-full rounded-full bg-[#C9824B] flex items-center justify-center">
                      <div className="text-xs">👤</div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-sm sm:text-base font-medium">
                  John Miller
                </div>
              </div>
              {/* Participant 3 - with SOL amount */}
              <div
                className="w-full h-14 sm:h-16 rounded-[10px] shadow-lg flex items-center justify-between p-3 sm:p-4 hover:bg-opacity-80 transition-all duration-200"
                style={{ background: "rgba(20,17,24,0.60)" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] rounded-full bg-[#C9F2E9] flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-9 sm:h-9 relative">
                      <div className="w-full h-full rounded-full bg-[#C9824B] flex items-center justify-center">
                        <div className="text-xs">👤</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-sm sm:text-base font-medium">
                    John Miller
                  </div>
                </div>
                <div className="text-white text-sm sm:text-base font-bold">
                  25 SOL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
