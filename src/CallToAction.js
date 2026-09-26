import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>

        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>

        <Link to="/booking" className="reserve-btn">
          Reserve a Table
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
          alt="Mediterranean food"
        />
      </div>
    </section>
  );
}

export default CallToAction;