import { ChevronDown } from "lucide-react";

const PoolDropdown = () => {
  return (
    <div className="px-8 mb-8">
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl dropdown-glow cursor-pointer" style={{ backgroundColor: '#2C233A' }}>
        <span className="text-white text-lg font-medium">Low Stake 5min Pool</span>
        <ChevronDown size={20} color="#FFFFFF" />
      </div>
    </div>
  );
};

export default PoolDropdown;