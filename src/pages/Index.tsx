import { useEffect } from "react";
import Hero from "@/components/Hero";
import ArtistPanel from "@/components/ArtistPanel";
import StatsPanel from "@/components/StatsPanel";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import artist images
import jakeImage from "@/assets/artist-jake-morgan.jpg";
import sarahImage from "@/assets/artist-sarah-wells.jpg";
import tommyImage from "@/assets/artist-tommy-rivers.jpg";

const Index = () => {
  useScrollReveal();

  const artists = [
    {
      name: "Jake Morgan",
      tagline: "Country Artist",
      imageSrc: jakeImage,
      imageAlt: "Jake Morgan - Country Artist",
      stats: {
        beforeListeners: 15000,
        afterListeners: 85000,
        beforeStreams: 250000,
        afterStreams: 1200000,
        beforeFollowers: 8500,
        afterFollowers: 45000,
      }
    },
    {
      name: "Sarah Wells",
      tagline: "Country Singer-Songwriter",
      imageSrc: sarahImage,
      imageAlt: "Sarah Wells - Country Singer-Songwriter",
      stats: {
        beforeListeners: 12000,
        afterListeners: 92000,
        beforeStreams: 180000,
        afterStreams: 1500000,
        beforeFollowers: 6200,
        afterFollowers: 52000,
      }
    },
    {
      name: "Tommy Rivers",
      tagline: "Country Rock Artist",
      imageSrc: tommyImage,
      imageAlt: "Tommy Rivers - Country Rock Artist",
      stats: {
        beforeListeners: 22000,
        afterListeners: 125000,
        beforeStreams: 420000,
        afterStreams: 2100000,
        beforeFollowers: 11500,
        afterFollowers: 78000,
      }
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {artists.map((artist, index) => (
        <div key={artist.name}>
          <ArtistPanel
            name={artist.name}
            tagline={artist.tagline}
            imageSrc={artist.imageSrc}
            imageAlt={artist.imageAlt}
            index={index}
          />
          <StatsPanel
            stats={artist.stats}
            artistName={artist.name}
          />
        </div>
      ))}
      
      <CTASection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
