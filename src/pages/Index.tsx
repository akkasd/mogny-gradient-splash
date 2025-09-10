import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Main Title with animated gradient */}
      <h1 className="gradient-title text-8xl md:text-9xl font-bold mb-16 text-center tracking-wider">
        MOGNY
      </h1>
      
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <Button 
          variant="hero" 
          size="lg"
          className="text-xl px-12 py-6 font-semibold"
        >
          BUY
        </Button>
        
        <Button 
          variant="heroSecondary" 
          size="lg"
          className="text-xl px-12 py-6 font-semibold"
        >
          FREE PREVIEWS
        </Button>
      </div>
    </div>
  );
};

export default Index;