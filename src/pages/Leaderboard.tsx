import Header from "@/components/Header";
import LeaderboardCard from "@/components/LeaderboardCard";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "John Miller", win: "25", glowClass: "shadow-[0_0_30px_rgba(255,221,0,0.4)]" },
    { rank: 2, name: "Sarah Davis", win: "18.5" },
    { rank: 3, name: "Mike Johnson", win: "12.3" },
    { rank: 4, name: "Emma Wilson", win: "8.9" },
    { rank: 5, name: "Chris Brown", win: "7.2" },
    { rank: 6, name: "Lisa Garcia", win: "6.1" },
    { rank: 7, name: "David Lee", win: "5.4" },
    { rank: 8, name: "Anna Rodriguez", win: "4.8" },
    { rank: 9, name: "Tom Anderson", win: "4.2" },
    { rank: 10, name: "Maria Martinez", win: "3.7" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/app_bg.png')"}}>
      <Header />
      
      <main className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Leaderboard
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Top Winners</h2>
              {leaderboardData.slice(0, 5).map((player) => (
                <LeaderboardCard
                  key={player.rank}
                  rank={player.rank}
                  name={player.name}
                  win={player.win}
                  glowClass={player.glowClass}
                />
              ))}
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Rising Players</h2>
              {leaderboardData.slice(5, 10).map((player) => (
                <LeaderboardCard
                  key={player.rank}
                  rank={player.rank}
                  name={player.name}
                  win={player.win}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;