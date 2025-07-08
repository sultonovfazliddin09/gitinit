import React from 'react'

function Hero() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-16 min-h-screen flex items-center">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly w-full max-w-7xl">
        
        <div className="w-full  text-center md:text-left space-y-6 px-4 md:px-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Select Your New <br className="hidden sm:block" /> 
            <span className="text-gray-600">Perfect Style</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque dolorum 
            <br className="hidden sm:block" />
            veritatis suscipit odio ex doloribus?
          </p>
          <button className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
            Shop Now
          </button>
        </div>

        <div className="w-full  flex justify-center  md:px-0 mb-10 md:mb-0">
          <img
            width={300}
            src="https://themewagon.github.io/timezone/assets/img/hero/watch.png"
            alt="hero-watch"
            className="max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
