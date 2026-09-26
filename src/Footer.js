function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <h2>LITTLE LEMON</h2>
        <p>CHICAGO</p>
      </div>

      <div className="footer-column">
        <h3>Navigation</h3>
        <a href="/">Home</a>
        <a href="/">Menu</a>
        <a href="/">Reservations</a>
      </div>

      <div className="footer-column">
        <h3>Contact</h3>
        <p>Chicago, Illinois</p>
        <p>(312) 555-0184</p>
      </div>

      <div className="footer-column">
        <h3>Social</h3>
        <a href="/">Instagram</a>
        <a href="/">Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;