import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section className="relative bg-cover bg-center h-screen">
            <img 
                src="/rose3.jpg" 
                alt="Greyscale Rose Flower" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Main heading */}
                <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-2xl font-bold mb-6 font-quicksand text-white tracking-widest">
                    Ọ B Á F Ẹ́ M I &nbsp;&nbsp;&nbsp; T H A N N I
                </h1>
                
                {/* Scroll Button with Animation */}
                <button 
                    onClick={scrollToContent}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
                    aria-label="Scroll down"
                >
                    <span className="text-green-500 text-xs font-light tracking-widest mb-3 animate-none">
                        SCROLL
                    </span>
                    {/* <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center"> */}
                        <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-bounce"></div>
                    {/* </div> */}
                    {/* Down arrow */}
                    <svg 
                        className="w-6 h-6 text-green-500 mt-2 animate-bounce" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            // strokeLinecap="round" 
                            // strokeLinejoin="round" 
                            strokeWidth={2} 
                            // d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </button>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </section>
    )
}

export default Hero