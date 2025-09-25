import { User } from "lucide-react";

interface LeaderboardCardProps {
  rank: number;
  name: string;
  win: string;
  glowClass?: string;
}

const LeaderboardCard = ({ rank, name, win, glowClass }: LeaderboardCardProps) => {
  return (
    <div className={`rounded-2xl px-6 py-4 mb-4 flex items-center justify-between ${glowClass || ''}`} style={{ backgroundColor: '#211B27' }}>
      <div className="flex items-center gap-4">
        <span className="text-white text-xl font-bold min-w-[24px]">{rank}.</span>
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFD6DD' }}>
          <User size={24} color="#944F23" />
        </div>
        <span className="text-white text-lg font-semibold">{name}</span>
      </div>
      <div className="text-white text-lg font-bold">
        Win - {win} SOL
      </div>
    </div>
  );
};

export default LeaderboardCard;