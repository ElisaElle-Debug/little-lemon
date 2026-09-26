import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="booking-page">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>

        <h1>Booking Confirmed!</h1>

        <p>
          Thank you for reserving a table at Little Lemon.
          We look forward to seeing you!
        </p>

        <Link to="/" className="confirmation-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;