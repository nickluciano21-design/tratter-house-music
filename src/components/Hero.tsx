import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToArtists = () => {
    const firstArtist = document.getElementById('artist-0');
    firstArtist?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="container-custom text-center z-10">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl mb-6 scroll-reveal">
          Tratter House Music
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto scroll-reveal">
          Promoting country artists and growing their audience.
        </p>
        <button 
          onClick={scrollToArtists}
          className="cta-button text-lg md:text-xl scroll-reveal"
        >
          See Our Artists
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown 
          className="w-8 h-8 text-primary bounce-arrow cursor-pointer" 
          onClick={scrollToArtists}
        />
      </div>
    </section>
  );
};

export default Hero;