import Nav from './Nav';

function Header() {
  return (
    <header className="site-header">
      <div className="logo-area">
        <h1 className="logo-title">LITTLE LEMON</h1>
        <p className="logo-subtitle">CHICAGO</p>
      </div>

      <Nav />
    </header>
  );
}

export default Header;