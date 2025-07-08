import React from 'react'

function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Banner */}
      <div className="bg-gray-100 py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">About</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">

        {/* Our Mission 1 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
            <br /><br />
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
          </p>
        </div>

        {/* Our Mission 2 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
            <br /><br />
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
         <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
  <iframe
    src="https://www.youtube.com/embed/US-TllIDR9E?start=89"
    title="About Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>

        </div>

        {/* Small Banner */}
        <div className="bg-gray-600 text-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-3xl font-semibold mb-2">Discover More About Us</h3>
          <p className="text-lg max-w-xl mx-auto">
            We are committed to delivering the best quality and service. Join us in our journey to innovation and excellence.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 mt-auto text-center">
        <p>© 2025 TimeZone. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default About
