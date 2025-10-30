import React from 'react'

const EditorialServices = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6 tracking-wide">
                        EDITORIAL SERVICES
                    </h1>
                    <p className="text-xl text-gray-700 font-light mb-8">
                        POETRY • PROSE
                    </p>
                    <p className="text-lg text-gray-600 font-light">
                        DEVELOPMENTAL EDITING • LINE EDITING • COPY EDITING • PROOFREADING
                    </p>
                </div>

                {/* Quote Section */}
                <div className="text-center mb-16">
                    <blockquote className="text-2xl md:text-3xl font-serif font-light text-gray-800 italic mb-6 leading-relaxed">
                        "Good editors are really the third eye."
                    </blockquote>
                    <cite className="text-gray-600 text-lg">
                        — Toni Morrison, Paris Review, Art of Fiction, No. 134.
                    </cite>
                </div>

                {/* Contact Section */}
                <div className="text-center mb-20">
                    <p className="text-lg text-gray-700 mb-4">
                        You can lend Obafémi's editorial eye for your manuscripts by writing to him at
                    </p>
                    <a 
                        href="mailto:editor@obafemithanni.com" 
                        className="text-xl text-blue-600 hover:text-blue-800 font-light transition-colors"
                    >
                        editor@obafemithanni.com
                    </a>
                </div>

                {/* Testimonials Section */}
                <div className="border-t border-gray-300 pt-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-12 text-center">
                        TESTIMONIALS
                    </h2>
                    
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                            "Obafémi is well versed in craft and shows care for the work of others. As an editor, he clearly articulates the strengths of a piece and identifies areas that can be developed. He offers concrete insights alongside broader concepts for the writer to consider. Obafémi exudes a positive attitude and passion for the written word, making him a pleasure to work with."
                        </blockquote>
                        <cite className="text-gray-600 font-semibold">
                            — Rashna Wadia, Poet; Poetry Editor, Famidan Journal
                        </cite>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorialServices