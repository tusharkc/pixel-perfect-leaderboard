import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowToPlay = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartPlaying = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/app_bg.png')" }}
    >
      {/* Header */}
      <header className="px-6 py-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center flex-1">
            How To Play Stakr
          </h1>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Step 1 */}
          <div className="bg-purple-darker rounded-2xl p-6 border border-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Step 1: Join A Round
              </h2>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Stake Your Tokens Into The Active Pool Before The Countdown
              Begins.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-purple-darker rounded-2xl p-6 border border-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Step 2: Watch The Timer
              </h2>
            </div>
            <ul className="text-white/90 text-lg leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Each Round Shows A 5-Minute Countdown.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>
                  The Twist: The Real End Time Is Hidden And Random — It Could
                  Close Anytime.
                </span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-purple-darker rounded-2xl p-6 border border-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💸</span>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Step 3: Unstake Before It Ends
              </h2>
            </div>
            <ul className="text-white/90 text-lg leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>To Survive, Unstake Before The Hidden Timer Hits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Stay Longer = Bigger Rewards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Too Early = Safe But Smaller Payouts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Too Late = Lose Everything.</span>
              </li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-purple-darker rounded-2xl p-6 border border-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏆</span>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Step 4: Win Or Lose
              </h2>
            </div>
            <ul className="text-white/90 text-lg leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>
                  Survivors: Reclaim Your Stake + Share Of Others' Losses.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>
                  Late Movers: Forfeit Your Stake To The Fastest Players.
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <button
              onClick={handleStartPlaying}
              className="bg-gradient-to-r from-blue-cyan to-purple-bright text-white text-xl font-bold py-4 px-12 rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Playing Now
            </button>

            <div className="mt-6 text-white/90 text-lg">
              <p>Think Fast, Stay Alert,</p>
              <p>Don't Be Too Early, Don't Be Too Late.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowToPlay;
