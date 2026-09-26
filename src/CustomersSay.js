function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <p className="testimonial-subtitle">
        What our lovely patrons have to say
      </p>

      <div className="testimonial-cards">
        <article className="testimonial-card">
          <p className="stars">★★★★★</p>

          <p className="review-text">
            “The lemon dessert transported me straight back to Athens.
            Phenomenal courtyard service!”
          </p>

          <div className="reviewer">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              alt="Sophia"
            />
            <span>Sophia L.</span>
          </div>
        </article>

        <article className="testimonial-card">
          <p className="stars">★★★★★</p>

          <p className="review-text">
            “Incredible attention to detail. From the ambiance to the food,
            every dish is perfectly balanced with herbs.”
          </p>

          <div className="reviewer">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
              alt="Marcus"
            />
            <span>Marcus O.</span>
          </div>
        </article>

        <article className="testimonial-card">
          <p className="stars">★★★★★</p>

          <p className="review-text">
            “An absolute treasure in Chicago. Little Lemon is our weekly
            date night sanctuary now.”
          </p>

          <div className="reviewer">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
              alt="Elena"
            />
            <span>Elena K.</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CustomersSay;