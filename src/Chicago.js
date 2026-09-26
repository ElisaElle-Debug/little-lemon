function Chicago() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>

        <p>
          Little Lemon is a family-owned Mediterranean restaurant that
          combines traditional recipes with a modern approach. We focus
          on fresh ingredients, welcoming service, and creating a
          comfortable place for customers to enjoy a meal together.
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
  );
}

export default Chicago;