const CTASection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-gradient-tan">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-accent-foreground scroll-reveal">
            Ready to Grow Your Audience?
          </h2>
          <p className="text-xl md:text-2xl text-accent-foreground/90 mb-10 scroll-reveal">
            Let's take your music career to the next level.
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-accent-foreground text-accent px-8 py-4 rounded-lg text-lg md:text-xl font-semibold 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-2xl scroll-reveal"
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;