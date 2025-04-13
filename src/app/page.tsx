import Image from "next/image";
import { Orbitron } from 'next/font/google';
import CardCarousel from "@/components/CardCarousel";

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-[85vh] sm:h-screen flex items-center justify-center 
                        bg-black text-white">
        {/* Background Collage */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Card Image Grid - Transformed into Collage */}
          <div className="absolute inset-[-20%] grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 
                         gap-2 opacity-20 transform rotate-6">
            {[
              '/abracadabra-card-copy-2.png',
              '/alien-bubba-card-copy.png',
              '/blue-dream-copy.png',
              '/celebration-of-life-copy.png',
              '/crackberry-copy.png',
              '/glitter-bomb-card-copy.png',
              '/grease-moneky-copy.png',
              '/gsc-copy.png',
              // Repeat cards to fill space
              '/abracadabra-card-copy-2.png',
              '/alien-bubba-card-copy.png',
              '/blue-dream-copy.png',
              '/celebration-of-life-copy.png',
              '/crackberry-copy.png',
              '/glitter-bomb-card-copy.png',
              '/grease-moneky-copy.png',
              '/gsc-copy.png'
            ].map((src, i) => (
              <div key={i} className="relative aspect-[3/4] transform hover:rotate-3 transition-transform">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                  style={{ 
                    transform: `rotate(${(i % 2) * 4 - 2}deg) scale(${1 + (i % 3) * 0.1})`,
                    objectPosition: 'center' 
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Gradient Overlay with brand colors */}
          <div className="absolute inset-0">
            {/* Dark base gradient with more transparency */}
            <div className="absolute inset-0 bg-gradient-to-b 
                          from-black/75 via-black/70 to-black/75" />
            
            {/* Subtle brand color overlays - reduced green */}
            <div className="absolute inset-0 bg-gradient-to-r 
                          from-[#FF00FF]/15 via-transparent to-[#39FF14]/8 
                          mix-blend-soft-light" />
            <div className="absolute inset-0 bg-gradient-to-t 
                          from-[#FF00FF]/10 via-transparent to-[#39FF14]/5 
                          mix-blend-overlay opacity-40" />
            
            {/* Increased white overlay */}
            <div className="absolute inset-0 bg-white/15 mix-blend-soft-light" />
            <div className="absolute inset-0 bg-gradient-to-b 
                          from-white/5 via-transparent to-white/5" />
          </div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
            <div className="w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:4px_4px]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            {/* Logo/Title */}
            <div className="space-y-6 py-4">
              <h1 className={`${orbitron.className} text-5xl sm:text-6xl md:text-7xl 
                             font-bold tracking-tight leading-tight
                             bg-gradient-to-r from-white via-[#FF00FF]/90 to-[#39FF14]/90
                             text-transparent bg-clip-text
                             hover:from-[#39FF14]/90 hover:to-[#FF00FF]/90
                             transition-all duration-700`}>
                Stoney Baloney
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90
                           max-w-2xl mx-auto leading-relaxed font-light">
                A Psychedelic Comic Adventure
              </h2>
            </div>
            
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-white/80
                         max-w-2xl mx-auto leading-relaxed">
                Dive into a vibrant world where each page comes alive through 
                augmented reality. Collect digital cards, unlock animated scenes, 
                and experience the story in ways never before possible.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <button 
                className="group w-full sm:w-auto px-12 py-5
                         bg-white/10 backdrop-blur-sm
                         hover:bg-[#FF00FF]/20
                         transition-all duration-300 ease-out
                         text-white cursor-pointer
                         rounded-full border border-white/20
                         hover:border-[#FF00FF]/50
                         hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
              >
                <span className="text-lg tracking-wider font-medium">Download the Comic</span>
              </button>
              
              <button 
                className="group w-full sm:w-auto px-12 py-5
                         bg-transparent backdrop-blur-sm
                         border border-white/20 hover:border-[#39FF14]/50
                         hover:bg-[#39FF14]/20
                         transition-all duration-300 ease-out
                         text-white cursor-pointer
                         rounded-full
                         hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                <span className="text-lg tracking-wider font-medium">Launch AR Experiences</span>
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

      {/* Download Section */}
      <section className="py-12 sm:py-20 bg-black/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className={`${orbitron.className} text-3xl sm:text-4xl md:text-5xl 
                           font-bold tracking-tight leading-tight
                           bg-gradient-to-r from-white via-[#FF00FF]/90 to-[#39FF14]/90
                           text-transparent bg-clip-text`}>
              Download Free Comic
            </h2>
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Get instant access to the complete Stoney Baloney digital comic, 
                enhanced with mind-bending AR experiences.
              </p>
              <ul className="text-white/70 text-lg space-y-3 inline-block text-left mx-auto">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF00FF]">•</span>
                  Full digital comic collection
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#39FF14]">•</span>
                  Unlock AR animations with each card
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF00FF]">•</span>
                  Interactive storytelling experience
                </li>
              </ul>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm
                               hover:bg-[#FF00FF]/20 transition-all duration-300
                               text-white rounded-full border border-white/20
                               hover:border-[#FF00FF]/50
                               hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                <span className="text-lg tracking-wider font-medium">Download Now</span>
              </button>
              <button className="px-10 py-4 bg-transparent backdrop-blur-sm
                               hover:bg-[#39FF14]/20 transition-all duration-300
                               text-white rounded-full border border-white/20
                               hover:border-[#39FF14]/50
                               hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                <span className="text-lg tracking-wider font-medium">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
