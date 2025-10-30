import React from 'react'

const ProseHero = () => {
    return (
        <section className="relative bg-cover bg-center h-screen bg-[url('obafemi-dark-summer-gray.jpg')]">
            
            {/* Dark overlay for better text contrast */}
            <div className=""></div>
            
            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
                {/* Main heading */}
                <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-bold mb-6 text-white tracking-wide">
                    P R O S E 
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

export default ProseHero