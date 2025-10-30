import React from 'react'

const PruneHero = () => {
    return (
        <section className=" relative bg-cover bg-center h-screen bg-[url('https://images.unsplash.com/photo-1717851692937-f2ab7adb7630?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==')]">
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
            {/* // <section className="relative bg-cover bg-center h-screen bg-[url('rose3.jpg')]"> */}
            {/* Dark overlay for better text contrast */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
            
            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Main heading */}
                <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-2xl font-extrabold mb-6 text-white tracking-wide">
                    P R U N E
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

export default PruneHero