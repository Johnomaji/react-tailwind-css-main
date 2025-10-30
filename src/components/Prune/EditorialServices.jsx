import React from 'react'

const EditorialServices = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="border border-gray-300 rounded-lg py-6 px-8 inline-block mb-8">
                        <h1 className="text-xs md:text-sm font-light text-gray-900 tracking-widest mb-4">
                            EDITORIAL SERVICES
                        </h1>
                        <p className="text-xs md:text-sm text-gray-600 font-light mb-3 tracking-wide">
                            POETRY • PROSE
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 font-light tracking-wide">
                            DEVELOPMENTAL EDITING • LINE EDITING • COPY EDITING • PROOFREADING
                        </p>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="text-center mb-16 border-b border-gray-200 pb-12">
                    <blockquote className="text-base md:text-lg font-light text-gray-600 italic mb-4 leading-relaxed">
                        "Good editors are really the third eye."
                    </blockquote>
                    <cite className="text-gray-600 text-sm md:text-base font-light not-italic">
                        — Toni Morrison, <a href="#" className="text-green-600 underline decoration-1 underline-offset-4">Paris Review</a>, Art of Fiction, No. 134.
                    </cite>
                </div>

                {/* Contact Section */}
                <div className="text-center mb-20">
                    <p className="text-sm md:text-base text-gray-600 font-light">
                        You can lend Obáfẹ́mi's editorial eye for your manuscripts by writing to him at{' '}
                        <a 
                            href="mailto:editor@obafemithanni.com" 
                            className="text-green-600 hover:text-green-700 font-light underline decoration-1 underline-offset-4 transition-colors"
                        >
                            editor@obafemithanni.com
                        </a>
                    </p>
                </div>

                {/* Testimonials Section */}
                <div className="pt-8">
                    <h2 className="text-xs md:text-sm font-light text-gray-900 mb-12 text-center tracking-widest">
                        TESTIMONIALS
                    </h2>
                    
                    <div className="space-y-12">
                        {/* Testimonial 1 */}
                        <div className="mb-12">
                            <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-light text-center">
                                "Ọbáfẹ́mi is well versed in craft and shows care for the work of others. As an editor, he clearly articulates the strengths of a piece and identifies areas that can be developed. He offers concrete insights alongside broader concepts for the writer to consider. Ọbáfẹ́mi exudes a positive attitude and passion for the written word, making him a pleasure to work with."
                            </blockquote>
                            <cite className="text-gray-600 text-sm md:text-base font-medium not-italic block text-center">
                                — Rashna Wadia, Poet; Poetry Editor, <a href="https://www.fahmidan.net/our-team" target="_blank" rel="noopener noreferrer" className="text-green-600 underline decoration-1 underline-offset-4">Famidan Journal</a>
                            </cite>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="mb-12">
                            <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-light text-center">
                                "With his well-read imagination, ability to identify a writer's intentions and competently advise on how to realise them, Ọbáfẹ́mi's voice is one that any writer would wish to have on their shoulder. Ọbáfẹ́mi is a meticulous reader and a patient examiner, making his editorial hand one I continue to trust."
                            </blockquote>
                            <cite className="text-gray-600 text-sm md:text-base font-medium not-italic block text-center">
                                — S'fundo W. Sosibo, Writer and Playwright; Author of <a href="https://www.bloomsbury.com/us/staging-black-queer-south-africa-9781350460119/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline decoration-1 underline-offset-4">Staging Black, Queer South Africa,</a> Bloomsbury Publishing, 2024.
                            </cite>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="mb-12">
                            <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-light text-center">
                                "Ọbáfẹ́mi's editorial process is politely candid with his lucid critiques. It felt like I was hand-held while being corrected and critiqued. His thorough and helpful notes allowed me to understand which areas of my work I needed to improve on and how I could stretch my skill set."
                            </blockquote>
                            <cite className="text-gray-600 text-sm md:text-base font-medium not-italic block text-center">
                                — Dolapomoye Femi-Oyekola, Short Story Writer and Essayist
                            </cite>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="mb-12">
                            <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-light text-center">
                                "Ọbáfẹ́mi's editorial process was an experience in precision and care. His attentive interaction with my work offered actionable feedback and opened up possibilities for me to explore."
                            </blockquote>
                            <cite className="text-gray-600 text-sm md:text-base font-medium not-italic block text-center">
                                — TJ Benson, Writer and Multidisciplinary Artist; Author of <a href="https://masobebooks.com/ng/book/the-madhouse/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline decoration-1 underline-offset-4">The Madhouse,</a> Masobe Books, 2021
                            </cite>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorialServices