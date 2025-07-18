import { useEffect, useState, useRef } from 'react';

interface StatsData {
  beforeListeners: number;
  afterListeners: number;
  beforeStreams: number;
  afterStreams: number;
  beforeFollowers: number;
  afterFollowers: number;
}

interface StatsPanelProps {
  stats: StatsData;
  artistName: string;
}

const StatsPanel = ({ stats, artistName }: StatsPanelProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    beforeListeners: 0,
    afterListeners: 0,
    beforeStreams: 0,
    afterStreams: 0,
    beforeFollowers: 0,
    afterFollowers: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animateCounter = (key: keyof typeof stats, finalValue: number) => {
      let currentStep = 0;
      const increment = finalValue / steps;
      
      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => ({
          ...prev,
          [key]: Math.min(Math.round(increment * currentStep), finalValue)
        }));
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    Object.entries(stats).forEach(([key, value]) => {
      animateCounter(key as keyof typeof stats, value);
    });
  }, [isVisible, stats]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const calculateGrowth = (before: number, after: number) => {
    const growth = ((after - before) / before) * 100;
    return Math.round(growth);
  };

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16 scroll-reveal">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Performance Metrics
          </h3>
          <p className="text-xl text-muted-foreground">
            {artistName}'s growth with Tratter House Music
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="scroll-reveal">
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-8 text-muted-foreground">
              Before Tratter House
            </h4>
            <div className="space-y-6">
              <div className="text-center">
                <div className="counter-number text-primary">
                  {formatNumber(counts.beforeListeners)}
                </div>
                <p className="text-lg text-muted-foreground">Monthly Listeners</p>
              </div>
              <div className="text-center">
                <div className="counter-number text-primary">
                  {formatNumber(counts.beforeStreams)}
                </div>
                <p className="text-lg text-muted-foreground">Total Streams</p>
              </div>
              <div className="text-center">
                <div className="counter-number text-primary">
                  {formatNumber(counts.beforeFollowers)}
                </div>
                <p className="text-lg text-muted-foreground">Followers</p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-8 text-accent">
              After 3 Months
            </h4>
            <div className="space-y-6">
              <div className="text-center">
                <div className="counter-number text-accent">
                  {formatNumber(counts.afterListeners)}
                </div>
                <p className="text-lg text-muted-foreground">Monthly Listeners</p>
                <p className="text-sm text-green-400 font-semibold">
                  +{calculateGrowth(stats.beforeListeners, stats.afterListeners)}%
                </p>
              </div>
              <div className="text-center">
                <div className="counter-number text-accent">
                  {formatNumber(counts.afterStreams)}
                </div>
                <p className="text-lg text-muted-foreground">Total Streams</p>
                <p className="text-sm text-green-400 font-semibold">
                  +{calculateGrowth(stats.beforeStreams, stats.afterStreams)}%
                </p>
              </div>
              <div className="text-center">
                <div className="counter-number text-accent">
                  {formatNumber(counts.afterFollowers)}
                </div>
                <p className="text-lg text-muted-foreground">Followers</p>
                <p className="text-sm text-green-400 font-semibold">
                  +{calculateGrowth(stats.beforeFollowers, stats.afterFollowers)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsPanel;