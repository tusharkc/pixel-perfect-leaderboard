const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold" style={{ color: '#FFDD00' }}>
          STAKR⚡
        </span>
      </div>
      
      <nav className="flex items-center gap-8">
        <a href="#" className="text-lg font-semibold" style={{ color: '#B946FF' }}>
          Home
        </a>
        <a href="#" className="text-lg font-semibold" style={{ color: '#1DC8CC' }}>
          Leaderboard
        </a>
        <a href="#" className="text-lg font-semibold" style={{ color: '#B946FF' }}>
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Header;