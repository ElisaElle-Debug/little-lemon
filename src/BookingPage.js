import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <div className="booking-intro">
        <h1>Reserve a Table</h1>

        <p>
          Plan your visit to Little Lemon and enjoy fresh Mediterranean
          dishes in the heart of Chicago.
        </p>
      </div>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </section>
  );
}

export default BookingPage;