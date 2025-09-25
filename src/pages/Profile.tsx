import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const statsData = [
  { value: "10", label: "Total Bets\nPlaced" },
  { value: "7", label: "Total Bets\nWon" },
  { value: "0.67", label: "Total Amount\nWon" }
];

const betHistory = [
  { date: "29\\08\\2025", type: "5 Min. Poll", status: "Won", isWon: true },
  { date: "29\\08\\2025", type: "10 Min. Poll", status: "Loss", isWon: false },
  { date: "29\\08\\2025", type: "3 Min. Poll", status: "Won", isWon: true },
  { date: "29\\08\\2025", type: "Low Yield Poll", status: "Loss", isWon: false },
  { date: "29\\08\\2025", type: "Low Yield Poll", status: "Loss", isWon: false }
];

const Profile = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/app_bg.png)' }}
    >
      <Header />
      
      <div className="flex flex-col items-center px-8 py-12">
        {/* Profile Avatar */}
        <div className="relative mb-6">
          <div className="profile-avatar-glow rounded-full p-1">
            <Avatar className="w-32 h-32">
              <AvatarFallback style={{ backgroundColor: '#E6E6E6' }}>
                <User size={48} color="#000000" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        {/* Player Name */}
        <h1 className="text-4xl font-bold mb-12" style={{ color: '#1DC8CC' }}>
          John Miller
        </h1>
        
        {/* Stats Cards */}
        <div className="flex gap-8 mb-16 max-w-4xl w-full">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="flex-1 rounded-2xl px-8 py-8 text-center"
              style={{ backgroundColor: '#211B27' }}
            >
              <div className="text-white text-5xl font-bold mb-4">
                {stat.value}
              </div>
              <div 
                className="text-lg font-semibold whitespace-pre-line"
                style={{ color: '#1DC8CC' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bet History */}
        <div className="w-full max-w-6xl">
          <h2 className="text-white text-2xl font-bold mb-8">Bet History</h2>
          
          <div className="space-y-4">
            {betHistory.map((bet, index) => (
              <div 
                key={index}
                className="rounded-2xl px-8 py-6 flex items-center justify-between"
                style={{ backgroundColor: '#211B27' }}
              >
                <div className="flex items-center gap-16 flex-1">
                  <div 
                    className="text-lg font-semibold min-w-[120px]"
                    style={{ color: '#1DC8CC' }}
                  >
                    {bet.date}
                  </div>
                  <div className="text-white text-lg font-semibold min-w-[150px]">
                    {bet.type}
                  </div>
                  <div 
                    className="text-lg font-bold min-w-[80px]"
                    style={{ color: bet.isWon ? '#00FFB2' : '#FF5500' }}
                  >
                    {bet.status}
                  </div>
                </div>
                <Button 
                  className="claim-rewards-button text-white font-semibold px-6 py-2 rounded-lg"
                  style={{ backgroundColor: '#1DC8CC' }}
                >
                  Claim Rewards
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;