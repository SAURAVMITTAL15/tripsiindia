import { Users, Target, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 dark:text-white mb-6">
              About tripsiIndia
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Your trusted companion for discovering the incredible diversity and beauty of India
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 dark:text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                tripsiIndia was born from a passion for exploring the magnificent landscapes, rich culture, and diverse heritage of India. We believe that India is not just a destination, but an experience that transforms everyone who visits.
              </p>
              <p>
                From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, from the ancient temples of Tamil Nadu to the vibrant markets of Delhi, India offers something unique to every traveler. Our mission is to make these incredible experiences accessible to everyone.
              </p>
              <p>
                We curate the best destinations, provide detailed travel information, and share insider tips to help you make the most of your Indian adventure. Whether you're a first-time visitor or a seasoned traveler, tripsiIndia is here to guide your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4">
                <Globe className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-3">Authentic Experiences</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We showcase the real India, beyond the tourist hotspots, helping you connect with local culture and traditions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4">
                <Heart className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-3">Sustainable Travel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We promote responsible tourism that respects local communities and preserves India's natural and cultural heritage.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4">
                <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-3">Quality Information</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every destination is carefully researched to provide you with accurate, helpful, and up-to-date travel information.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4">
                <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-3">Community First</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We believe in building a community of travelers who share experiences, tips, and inspire each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 dark:text-white mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Visual Inspiration</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Stunning photography that captures the essence of each destination
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Detailed Guides</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Comprehensive information about attractions, best times to visit, and duration
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Curated Highlights</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Key attractions and experiences you shouldn't miss at each destination
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Diverse Destinations</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    From mountains to beaches, cities to villages - covering all of India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">
            Ready to Explore India?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Start your journey with our curated collection of India's most amazing destinations
          </p>
          <a
            href="/"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Discover Destinations
          </a>
        </div>
      </section>
    </div>
  );
}
