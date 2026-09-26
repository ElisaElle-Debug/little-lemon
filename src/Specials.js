function Specials() {
  return (
    <section className="specials">
      <div className="specials-top">
        <h2>This Week’s Specials</h2>

        <button className="order-btn-section">
          Order Online
        </button>
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
  );
}

export default Specials;