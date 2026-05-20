import MentalModelsMasonry from "./mentalModelsComponents/MentalModelsMasonry";

const MentalModels = () => {
  return (
    <section className="mental-models">
      <div className="mental-layouts">
        <header className="mental-header header-content">
          <h2 className="header-h2">Mental Models</h2>
        </header>

        <div className="mental-masonry">
          <MentalModelsMasonry />
        </div>

        <footer className="mental-quote">
          <blockquote className="mental-quote-text">
            "Good design is actually a lot harder to notice than poor design, in
            part because<br/> good designs fit our needs so well that the design is
            invisible."
          </blockquote>

          <cite className="mental-quote-author">- Don Norman</cite>
        </footer>
      </div>
    </section>
  );
};

export default MentalModels;
