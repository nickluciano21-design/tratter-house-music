import { ArrowUp, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-spacing border-t border-border/20">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="scroll-reveal">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Tratter House Music
            </h3>
            <p className="text-muted-foreground">
              Promoting country artists and growing their audience since 2020.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 scroll-reveal">
            <a 
              href="mailto:hello@tratterhousemusic.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex justify-end scroll-reveal">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center scroll-reveal">
          <p className="text-muted-foreground">
            © 2024 Tratter House Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;