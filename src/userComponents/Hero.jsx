import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt="hero"
            src='/Hero-doctor.jpg'
            width={800}
             height={800}
            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find & Book <span className='text-primary'>Appointment</span> with your Fav <span className='text-primary'>Doctors</span>
          </h2>
  
          <p className="mt-4 text-gray-600">
          Experience hassle-free healthcare with our online doctor appointment service!
                      Skip the waiting room and book appointments with ease.
                 Consult qualified doctors from the comfort of your home.
                Efficient, convenient, and personalized care just a click away!
          </p>
  
        
            <Button className="mt-10">Explore Now</Button>
         

        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero