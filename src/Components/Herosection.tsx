export default function HeroSection() {
    return (
      <section className="bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Navigating the{' '}
                <span className="relative">
                  digital landscape
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-lime-300 -z-10"></div>
                </span>{' '}
                for success
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed">
                Our digital marketing agency helps businesses grow and succeed online through a range of 
                services including SEO, PPC, social media marketing, and content creation.
              </p>
              
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors duration-200 rounded-lg">
                Book a consultation
              </button>
            </div>
  
            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <img 
                  src="/bannerside.svg" 
                  alt="Digital marketing illustration with megaphone and social media icons"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }