import React from 'react'

const TheUnwrapping = () => {
    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm max-w-md w-full">
                {/* <h1 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-8">
                    The Unwrapping
                </h1>
                <p className="text-gray-600 mb-6 font-light">By Obafémi</p> */}
                
                {/* Substack Embed */}
                <div className="w-full">
                    <iframe 
                        src="https://obafemi.substack.com/embed" 
                        width="99%" 
                        height="320" 
                        className="border-4 border-green-500 font-quicksand bg-white"
                        frameBorder="0" 
                        scrolling="no"
                        title="Subscribe to The Unwrapping"
                    ></iframe>
                </div>
                
                {/* Legal text - hidden on mobile, shown on larger screens if needed */}
                {/* <div className="mt-4 text-xs text-gray-500 hidden md:block">
                    By subscribing you agree to Substack's Terms of Use, our Privacy Policy and our Information collection notice
                </div> */}
            </div>
        </section>
    )
}

export default TheUnwrapping