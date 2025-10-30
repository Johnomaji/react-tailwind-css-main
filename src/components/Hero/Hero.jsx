import React from 'react'

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-screen bg-[url('rose3.jpg')]">
            {/* Dark overlay for better text contrast */}
            <div className="relative">
                            <img 
                                // src="Rose3.jpg" 
                                // alt="Rose Cover" 
                                className=""
                            />
                           
                        </div>
            
            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Main heading */}
                <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-2xl font-bold mb-6 font-quicksand text-white tracking-wide">
                    O B Ä F É M I   <>  </>T H A N N I
                    <br />
                   
                </h1>
                
                
                
                {/* Decorative line */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-1 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero