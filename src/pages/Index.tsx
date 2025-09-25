import Header from "@/components/Header";
import PoolDropdown from "@/components/PoolDropdown";
import LeaderboardCard from "@/components/LeaderboardCard";

const leaderboardData = [
  { rank: 1, name: "David Smith", win: "0.9", glow: "" },
  { rank: 2, name: "John Miller", win: "0.8", glow: "glow-yellow" },
  { rank: 3, name: "Alex Johnson", win: "0.7", glow: "glow-orange" },
  { rank: 4, name: "David Smith", win: "0.6", glow: "glow-blue" },
  { rank: 5, name: "John Miller", win: "0.5", glow: "glow-yellow" },
  { rank: 6, name: "Alex Johnson", win: "0.4", glow: "glow-orange" },
  { rank: 7, name: "David Smith", win: "0.2", glow: "glow-blue" },
];

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/app_bg.png)' }}
    >
      <Header />
      <PoolDropdown />
      
      <div className="px-8 max-w-6xl mx-auto">
        {leaderboardData.map((player) => (
          <LeaderboardCard
            key={`${player.rank}-${player.name}`}
            rank={player.rank}
            name={player.name}
            win={player.win}
            glowClass={player.glow}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
