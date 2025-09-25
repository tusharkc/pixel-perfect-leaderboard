import Header from "@/components/Header";
import LeaderboardCard from "@/components/LeaderboardCard";
import PoolDropdown from "@/components/PoolDropdown";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "David Smith", win: "0.9" },
    { rank: 2, name: "John Miller", win: "0.8" },
    { rank: 3, name: "Alex Johnson", win: "0.7" },
    { rank: 4, name: "David Smith", win: "0.6" },
    { rank: 5, name: "John Miller", win: "0.5" },
    { rank: 6, name: "Alex Johnson", win: "0.4" },
    { rank: 7, name: "David Smith", win: "0.2" },
  ];

  const getGlowClass = (rank: number) => {
    switch(rank) {
      case 1: return "border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]";
      case 2: return "border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]";
      case 3: return "border-2 border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.5)]";
      case 5: return "border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]";
      case 6: return "border-2 border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.5)]";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/app_bg.png')"}}>
      <Header />
      
      <main className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <PoolDropdown />
          </div>
          
          <div className="space-y-4">
            {leaderboardData.map((player) => (
              <LeaderboardCard
                key={player.rank}
                rank={player.rank}
                name={player.name}
                win={player.win}
                glowClass={getGlowClass(player.rank)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;