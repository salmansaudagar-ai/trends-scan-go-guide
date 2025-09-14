import { ArrowRight, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-scan-entrance.jpg';

const HeroSection = () => {
  const scrollToStart = () => {
    document.getElementById('start-here')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Scan & Go
          <br />
          <span className="text-2xl md:text-4xl font-normal">Hero Tech on the Floor</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto">
          Self-training, troubleshooting & adoption in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToStart}
            className="btn-hero flex items-center gap-2"
          >
            Start 60-sec tour
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button 
            onClick={handlePrint}
            className="btn-secondary flex items-center gap-2 text-white border-white hover:bg-white hover:text-foreground"
          >
            <Printer className="h-4 w-4" />
            Print checklists
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;