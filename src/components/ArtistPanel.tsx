interface ArtistPanelProps {
  name: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const ArtistPanel = ({ name, tagline, imageSrc, imageAlt, index }: ArtistPanelProps) => {
  const isEven = index % 2 === 0;

  return (
    <section id={`artist-${index}`} className="section-spacing">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isEven ? '' : 'lg:grid-flow-col-dense'
        }`}>
          <div className={`scroll-reveal ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <div className={`scroll-reveal ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              {name}
            </h2>
            <p className="text-xl md:text-2xl text-accent font-medium">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistPanel;