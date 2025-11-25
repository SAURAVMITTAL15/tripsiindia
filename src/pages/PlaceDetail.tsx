import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { places } from '../data/places';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PlaceCard } from '../components/PlaceCard';

export function PlaceDetail() {
  const { id } = useParams<{ id: string }>();
  const place = places.find((p) => p.id === id);

  if (!place) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-900 dark:text-white mb-4">Place Not Found</h1>
          <Link
            to="/"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedPlaces = places
    .filter((p) => p.id !== place.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Image */}
      <div className="relative h-[60vh] bg-gray-900">
        <ImageWithFallback
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-white hover:text-orange-400 transition-colors mb-4"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Destinations</span>
            </Link>
            <h1 className="text-white mb-4">{place.name}</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <MapPin className="w-5 h-5" />
                <span>{place.state}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <Clock className="w-5 h-5" />
                <span>{place.duration}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <Calendar className="w-5 h-5" />
                <span>{place.bestTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-gray-900 dark:text-white mb-6">About {place.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {place.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-gray-900 dark:text-white mb-6">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {place.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-gray-900 dark:text-white">Best Time to Visit</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{place.bestTime}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-gray-900 dark:text-white">Recommended Duration</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{place.duration}</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-gray-900 dark:text-white mb-4">Travel Tips</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Book accommodations in advance, especially during peak season</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Respect local customs and dress modestly when visiting religious sites</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Stay hydrated and carry sunscreen, especially during summer months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Try local cuisine but ensure you eat at hygienic places</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Hire local guides for a richer understanding of the history and culture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Places */}
      {relatedPlaces.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-gray-900 dark:text-white mb-8 text-center">
              More Destinations to Explore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedPlaces.map((relatedPlace) => (
                <PlaceCard key={relatedPlace.id} place={relatedPlace} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
