import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PlaceCard } from '../components/PlaceCard';
import { places } from '../data/places';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % places.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + places.length) % places.length);
  };

  const currentPlace = places[currentSlide];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={currentPlace.image}
            alt={currentPlace.name}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-white mb-4">
              Discover {currentPlace.name}
            </h1>
            <p className="text-xl mb-6 text-gray-200">
              {currentPlace.description.substring(0, 150)}...
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm">📍 {currentPlace.state}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm">⏱️ {currentPlace.duration}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm">🌞 {currentPlace.bestTime}</span>
              </div>
            </div>
            <a
              href={`/place/${currentPlace.id}`}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Explore Details
            </a>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {places.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* All Destinations Grid */}
      <section id="destinations" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">
              Explore All Destinations
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From ancient monuments to pristine beaches, discover the diverse beauty of India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">
              Why Choose tripsiIndia?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                <span className="text-4xl">🗺️</span>
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Curated Experiences</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handpicked destinations showcasing the best of India's cultural and natural heritage
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed travel information and tips from experienced travelers
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Authentic Travel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experience the real India with our comprehensive destination guides
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
