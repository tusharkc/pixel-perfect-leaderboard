import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modals() {
  const [openStakeNow, setOpenStakeNow] = useState(false);
  const [openStakePlaced, setOpenStakePlaced] = useState(false);
  const [openYouWon, setOpenYouWon] = useState(false);
  const [openTooEarly, setOpenTooEarly] = useState(false);
  const [openTooSlow, setOpenTooSlow] = useState(false);
  const [openCongrats, setOpenCongrats] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/app_bg.png')" }}
    >
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <button
          onClick={() => setOpenStakeNow(true)}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #16D6C9 0%, #16D6C9 100%)",
            boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
          }}
        >
          Open Stake Now Modal
        </button>
        <button
          onClick={() => setOpenStakePlaced(true)}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
            boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
          }}
        >
          Open Stake Placed Modal
        </button>
        <button
          onClick={() => setOpenYouWon(true)}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #16D6C9 0%, #6DBE3D 100%)",
            boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
          }}
        >
          Open You Won Modal
        </button>
        <button
          onClick={() => setOpenTooEarly(true)}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
            boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
          }}
        >
          Open Too Early Modal
        </button>
        <button
          onClick={() => setOpenTooSlow(true)}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
            boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
          }}
        >
          Open Too Slow Modal
        </button>
        <button
          onClick={() => setOpenCongrats(true)}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
            boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
          }}
        >
          Open Congratulations Modal
        </button>
      </div>

      {openStakeNow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenStakeNow(false)}
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,46,0.86) 0%, rgba(24,45,107,0.86) 50%, rgba(11,31,51,0.86) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] rounded-2xl p-6 sm:p-8"
            style={{
              background: "#1F152D",
              boxShadow:
                "0 0 0 2px rgba(22,214,201,0.35) inset, 0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(22,214,201,0.35)",
            }}
          >
            <div className="text-center mb-5 sm:mb-6">
              <h2
                className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
              >
                Stake Now
              </h2>
              <p className="mt-3 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
                How Much Do You Want To Stake For This Round?
              </p>
            </div>

            <div
              className="rounded-xl px-4 py-3 mb-6"
              style={{
                background: "#2C233A",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#E6E6E6",
              }}
            >
              Enter Amount
            </div>

            <div className="flex items-center gap-4 sm:gap-5 mb-6">
              <button
                className="flex-1 h-12 rounded-xl text-white font-semibold"
                style={{
                  background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
                  boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
                }}
                onClick={() => setOpenStakeNow(false)}
              >
                Confirm
              </button>
              <button
                className="flex-1 h-12 rounded-xl text-white font-semibold"
                style={{
                  background: "#1F152D",
                  border: "1px solid #16D6C9",
                  boxShadow: "0px 0px 0px 1px rgba(22,214,201,0.35) inset",
                }}
                onClick={() => setOpenStakeNow(false)}
              >
                Cancel
              </button>
            </div>

            <p className="text-center text-sm" style={{ color: "#C7C7D1" }}>
              Minimum Stake: 0.1 SOL
            </p>
          </div>
        </div>
      )}

      {openStakePlaced && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenStakePlaced(false)}
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,46,0.86) 0%, rgba(24,45,107,0.86) 50%, rgba(11,31,51,0.86) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] rounded-2xl p-6 sm:p-8 text-center"
            style={{
              background: "#1F152D",
              boxShadow:
                "0 0 0 2px rgba(22,214,201,0.35) inset, 0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(22,214,201,0.35)",
            }}
          >
            <h2
              className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide mb-4"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            >
              Stake Placed
            </h2>
            <p className="mb-6 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              Your Stake Has Been Successfully Placed For This Round
            </p>
            <button
              className="w-full h-12 rounded-xl text-black font-semibold mb-6"
              style={{
                background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
                boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
              }}
              onClick={() => setOpenStakePlaced(false)}
            >
              OK
            </button>
            <p className="text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              Good Luck! Unstake Before The Hidden
              <br />
              Timer Ends
            </p>
          </div>
        </div>
      )}

      {openYouWon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenYouWon(false)}
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,46,0.86) 0%, rgba(24,45,107,0.86) 50%, rgba(11,31,51,0.86) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] rounded-2xl p-6 sm:p-8 text-center"
            style={{
              background: "#1F152D",
              boxShadow:
                "0 0 0 2px rgba(22,214,201,0.35) inset, 0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(22,214,201,0.35)",
            }}
          >
            <div className="text-5xl mb-3">🏆</div>
            <h2
              className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide mb-3"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            >
              You Won!
            </h2>
            <p className="mb-6 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              🔥 Boom! You Were Just 8 Seconds Away From The Timer. You Won 0.33 SOL.
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              <button
                className="flex-1 h-12 rounded-xl text-black font-semibold"
                style={{
                  background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
                  boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
                }}
                onClick={() => setOpenYouWon(false)}
              >
                Confirm
              </button>
              <button
                className="flex-1 h-12 rounded-xl text-white font-semibold"
                style={{
                  background: "#1F152D",
                  border: "1px solid #16D6C9",
                  boxShadow: "0px 0px 0px 1px rgba(22,214,201,0.35) inset",
                }}
                onClick={() => {
                  setOpenYouWon(false);
                  navigate("/");
                }}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      )}

      {openTooEarly && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenTooEarly(false)}
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,46,0.86) 0%, rgba(24,45,107,0.86) 50%, rgba(11,31,51,0.86) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] rounded-2xl p-6 sm:p-8 text-center"
            style={{
              background: "#1F152D",
              boxShadow:
                "0 0 0 2px rgba(22,214,201,0.35) inset, 0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(22,214,201,0.35)",
            }}
          >
            <div className="text-5xl mb-3">🐔</div>
            <h2
              className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide mb-3"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            >
              Too Early
            </h2>
            <p className="mb-6 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              You Pulled Out Before The Hidden Timer. You’ll Only Get A Partial Share Of 0.1 SOL.
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              <button
                className="flex-1 h-12 rounded-xl text-black font-semibold"
                style={{
                  background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
                  boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
                }}
                onClick={() => setOpenTooEarly(false)}
              >
                Claim Reward
              </button>
              <button
                className="flex-1 h-12 rounded-xl text-white font-semibold"
                style={{
                  background: "#1F152D",
                  border: "1px solid #16D6C9",
                  boxShadow: "0px 0px 0px 1px rgba(22,214,201,0.35) inset",
                }}
                onClick={() => {
                  setOpenTooEarly(false);
                  navigate("/");
                }}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      )}

      {openTooSlow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenTooSlow(false)}
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,46,0.86) 0%, rgba(24,45,107,0.86) 50%, rgba(11,31,51,0.86) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] rounded-2xl p-6 sm:p-8 text-center"
            style={{
              background: "#1F152D",
              boxShadow:
                "0 0 0 2px rgba(22,214,201,0.35) inset, 0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(22,214,201,0.35)",
            }}
          >
            <div className="text-5xl mb-3" role="img" aria-label="cross">❌</div>
            <h2
              className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide mb-3"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            >
              Too Slow
            </h2>
            <p className="mb-6 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              The Hidden Timer Has Passed. You Lost Your Stake This Round. Better Luck Next Time!
            </p>
            <button
              className="w-full h-12 rounded-xl text-black font-semibold"
              style={{
                background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
                boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
              }}
              onClick={() => setOpenTooSlow(false)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {openCongrats && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenCongrats(false)}
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,46,0.86) 0%, rgba(24,45,107,0.86) 50%, rgba(11,31,51,0.86) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] rounded-2xl p-6 sm:p-8 text-center"
            style={{
              background: "#1F152D",
              boxShadow:
                "0 0 0 2px rgba(22,214,201,0.35) inset, 0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(22,214,201,0.35)",
            }}
          >
            <div className="text-5xl mb-3">🎉</div>
            <h2
              className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide mb-3"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            >
              Congratulations!
            </h2>
            <p className="mb-2 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              You’ve Successfully Claimed Your Reward.
            </p>
            <p className="mb-6 text-sm sm:text-base" style={{ color: "#C7C7D1" }}>
              💰 You Received: 0.42 SOL
            </p>
            <button
              className="w-full h-12 rounded-xl text-black font-semibold"
              style={{
                background: "linear-gradient(90deg, #16D6C9 0%, #25C45C 100%)",
                boxShadow: "0px 8px 24px rgba(22, 214, 201, 0.35)",
              }}
              onClick={() => {
                setOpenCongrats(false);
                navigate("/");
              }}
            >
              Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


