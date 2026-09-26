function Nav() {
  return (
    <nav className="site-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/" className="order-btn">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;