import { Zap, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Zap className="w-8 h-8 text-orange-light" />
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide">
          STAKR
        </h1>
      </div>
      
      {/* Mobile Menu Icon */}
      <Menu className="w-6 h-6 text-white md:hidden" />
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="/" className="text-lg font-semibold text-white hover:text-orange-light transition-colors">
          Home
        </a>
        <a href="/" className="text-lg font-semibold text-blue-cyan hover:text-white transition-colors">
          Leaderboard
        </a>
        <a href="/profile" className="text-lg font-semibold text-purple-bright hover:text-white transition-colors">
          Profile
        </a>
        <button 
          className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: '#B946FF' }}
        >
          Connect Wallet
        </button>
      </nav>
    </header>
  );
};

export default Header;