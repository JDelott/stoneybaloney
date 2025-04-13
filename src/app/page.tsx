import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FF00FF]" />
          <div className="absolute top-0 w-full h-2 bg-[#39FF14]" />
        </div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Stoney Baloney</h1>
          <p className="text-xl md:text-2xl mb-8">Experience comics like never before with AR technology</p>
        </div>
      </header>

      {/* Card Carousel Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Collect All Cards</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-8 snap-x snap-mandatory overflow-x-auto">
              {/* Add your card images here - example for one card */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <div className="w-72 h-96 bg-gradient-to-r from-[#FF00FF] to-[#39FF14] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={`/card-${index}.jpg`}
                      alt={`Stoney Baloney Card ${index}`}
                      width={288}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Digital Download</h2>
            <p className="text-lg mb-8">Get instant access to the Stoney Baloney digital comic and unlock AR features with our collector cards.</p>
            <button className="bg-[#FF00FF] hover:bg-[#39FF14] text-white px-8 py-3 rounded-full transition-colors">
              Download Now
            </button>
          </div>
          <div className="relative">
            <Image
              src="/digital-download-preview.jpg"
              alt="Digital Download Preview"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
