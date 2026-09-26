function Main() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
            alt="Mediterranean food"
          />
        </div>
      </section>

      {/* SPECIALS */}
      <section className="specials">
        <div className="specials-top">
          <h2>This Week’s Specials</h2>
          <button className="order-btn-section">Order Online</button>
        </div>

        <div className="cards">
          <article className="card">
            <img
              src="https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop"
              alt="Greek Salad"
            />

            <div className="card-body">
              <div className="card-title-row">
                <h3>Greek Salad</h3>
                <span>$12.99</span>
              </div>

              <p>
                Fresh lettuce, tomatoes, olives and feta cheese.
              </p>

              <a href="/">Order Delivery</a>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="Bruschetta"
            />

            <div className="card-body">
              <div className="card-title-row">
                <h3>Bruschetta</h3>
                <span>$7.99</span>
              </div>

              <p>
                Grilled bread topped with tomatoes, garlic and herbs.
              </p>

              <a href="/">Order Delivery</a>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1200&auto=format&fit=crop"
              alt="Lemon Dessert"
            />

            <div className="card-body">
              <div className="card-title-row">
                <h3>Lemon Dessert</h3>
                <span>$6.50</span>
              </div>

              <p>
                A sweet lemon dessert with a light and fresh flavor.
              </p>

              <a href="/">Order Delivery</a>
            </div>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* ABOUT */}
      <section className="about">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant that combines
            traditional recipes with a modern approach. We focus on fresh ingredients,
            welcoming service, and creating a comfortable place for customers to enjoy
            a meal together.
          </p>
        </div>

        <div className="about-images">
          <img
            className="about-image-large"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
            alt="Little Lemon restaurant"
          />

          <img
            className="about-image-small"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
            alt="Mediterranean food"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;