import { Play, MapPin, Share2 } from 'lucide-react';

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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Megaphone Base */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Megaphone Handle */}
                <div className="relative">
                  <div className="w-32 h-8 bg-black rounded-l-full rounded-r-sm transform rotate-12 relative z-10"></div>
                  
                  {/* Megaphone Cone */}
                  <div className="absolute -right-16 -top-6 w-24 h-20 bg-lime-400 rounded-full transform rotate-12 flex items-center justify-center">
                    <div className="w-16 h-12 bg-white rounded-full border-4 border-black"></div>
                  </div>
                </div>
              </div>

              {/* Sound Waves */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="w-16 h-1 bg-black rounded-full mb-2 opacity-60"></div>
                <div className="w-20 h-1 bg-black rounded-full mb-2 opacity-40"></div>
                <div className="w-24 h-1 bg-black rounded-full opacity-20"></div>
              </div>

              {/* Floating Icons */}
              
              {/* Heart Icon */}
              <div className="absolute top-8 right-12 w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-lg animate-bounce">
                <div className="w-6 h-6 bg-black rounded-full relative">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute top-20 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </div>

              {/* Share Icon */}
              <div className="absolute top-4 right-32 w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <Share2 className="w-5 h-5 text-black" />
              </div>

              {/* Location Pin */}
              <div className="absolute bottom-16 right-8 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <MapPin className="w-6 h-6 text-black" fill="black" />
              </div>

              {/* Star Shape */}
              <div className="absolute bottom-8 left-12 w-8 h-8 bg-black transform rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>

              {/* Additional Decorative Elements */}
              <div className="absolute top-12 left-8 w-6 h-6 bg-lime-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 left-4 w-4 h-4 bg-black rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}