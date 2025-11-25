import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Place } from '../data/places';

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link to={`/place/${place.id}`} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
            {place.state}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {place.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {place.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{place.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
