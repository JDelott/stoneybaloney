import Image from "next/image";
import { Orbitron } from 'next/font/google';
import CardCarousel from "@/components/CardCarousel";

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-[85vh] sm:h-screen flex items-center justify-center">
        {/* Simple Border Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-[#FF00FF]" />
          <div className="absolute top-0 w-full h-1 sm:h-2 bg-[#39FF14]" />
          
          {/* Simple Grid Background */}
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: 'linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)',
                 backgroundSize: '15px 15px'
               }} />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mt-16 sm:mt-0">
          <div className="space-y-4 sm:space-y-8">
            {/* Logo/Title */}
            <h1 className={`${orbitron.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                           font-bold 
                           bg-clip-text text-transparent bg-gradient-to-r 
                           from-[#FF00FF] to-[#39FF14]
                           leading-tight`}>
              Stoney Baloney
            </h1>
            
            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl 
                         max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-2xl 
                         mx-auto">
              Experience comics like never before with AR technology
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center 
                          max-w-xs sm:max-w-none mx-auto">
              <button className="w-full sm:w-auto px-8 py-3 
                               bg-[#FF00FF] hover:bg-[#FF00FF]/80 
                               rounded-full transition-colors duration-300
                               text-base">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-8 py-3
                               bg-transparent border-2 border-[#39FF14] 
                               hover:bg-[#39FF14]/20 rounded-full 
                               transition-colors duration-300
                               text-base">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Card Carousel Section */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${orbitron.className} text-2xl sm:text-3xl md:text-4xl 
                          font-bold mb-8 sm:mb-12 text-center 
                          bg-clip-text text-transparent bg-gradient-to-r 
                          from-[#FF00FF] to-[#39FF14]`}>
            Collect All Cards
          </h2>
          <CardCarousel />
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 sm:py-20 bg-black/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className={`${orbitron.className} text-2xl sm:text-3xl md:text-4xl 
                             font-bold mb-4 sm:mb-6`}>
                Digital Download
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 
                          max-w-sm mx-auto md:mx-0">
                Get instant access to the Stoney Baloney digital comic and unlock AR features 
                with our collector cards.
              </p>
              <button className="w-full sm:w-auto px-8 py-3
                               bg-[#FF00FF] hover:bg-[#39FF14] text-white 
                               rounded-full transition-colors duration-300
                               text-base">
                Download Now
              </button>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="aspect-square relative rounded-lg overflow-hidden
                            shadow-2xl max-w-xs sm:max-w-sm md:max-w-md
                            mx-auto">
                <Image
                  src="/digital-download-preview.jpg"
                  alt="Digital Download Preview"
                  fill
                  className="object-cover rounded-lg transform 
                           transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
