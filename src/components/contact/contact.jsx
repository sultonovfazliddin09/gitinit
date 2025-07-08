import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="bg-gray-100 text-white py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">Contacts</h1>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-10 py-12">
        
        <div className="md:w-1/2 h-64 md:h-auto">
          <iframe
            title="Uzbekistan Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364013.112173074!2d55.44158226968246!3d41.3774910969377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aee2d5484d264f%3A0xe0d2e6510446dcbc!2sUzbekistan!5e0!3m2!1sen!2s!4v1684965461946!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="rounded-md border"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-8">
          
          <div className=" p-6 flex w-full justify-between gap-10">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
                <div className="bg-gray-50 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">
              <strong>Address:</strong> 123 Tashkent Street, Tashkent, Uzbekistan
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +998 90 123 45 67
            </p>
            <p>
              <strong>Email:</strong> info@timezone.uz
            </p>
          </div>
          </div>

      
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-6 mt-auto text-center">
        <p>© 2025 TimeZone. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Contact
