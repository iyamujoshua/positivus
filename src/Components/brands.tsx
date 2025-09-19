export default function BrandSection() {
    const brands = [
      { name: 'Amazon', src: '/amazon.svg', alt: 'Amazon logo' },
      { name: 'Dribbble', src: '/dribble.svg', alt: 'Dribbble logo' },
      { name: 'HubSpot', src: '/hubspot.svg', alt: 'HubSpot logo' },
      { name: 'Notion', src: '/notion.svg', alt: 'Notion logo' },
      { name: 'Netflix', src: '/netflix.svg', alt: 'Netflix logo' },
      { name: 'Zoom', src: '/zoom.svg', alt: 'Zoom logo' }
    ];
  
    return (
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand logos container */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {brands.map((brand) => (
              <div 
                key={brand.name}
                className="flex items-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-12 w-28 object-contain"
                  style={{ height: '48px', width: '110px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }