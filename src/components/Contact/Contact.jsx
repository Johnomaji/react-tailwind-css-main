import React from 'react'

const Contact = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Contact Header */}
                <div className="text-center mb-32">
                    <div className="border border-gray-300 rounded-lg py-6 px-8 inline-block mb-12">
                        <h1 className="text-xs md:text-sm font-light text-gray-900 tracking-widest ">
                            CONTACT ME
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-2 font-light">
                        For Enquiries, Bookings and Tea appointments, kindly write to me at{' '}
                        <a 
                            href="mailto:editor@obafemithanni.com" 
                            className="text-green-600 hover:text-green-700 font-light underline decoration-1 underline-offset-4 transition-colors"
                        >
                            editor@obafemithanni.com
                        </a>
                    </p>
                </div>

                {/* Photography Credits */}
                <div className="bg-black text-white w-full z-50 py-12">
    <               div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">


                    <h2 className="text-base md:text-lg font-bold text-white mb-8">
                        Photography Credits
                    </h2>
                    <div className="space-y-5 text-white leading-relaxed text-sm md:text-base">
                        <p className="font-light">
                            <span className="italic">Greyscale Rose Flower;</span> Background photograph to "Obáfẹ́mi Thanni;" Photograph by Amirali Mirhashemian, circa 2019.
                        </p>
                        <p className="font-light">
                            <span className="italic">Portrait of Obáfẹ́mi Thanni;</span> Accompanying Photograph to "Biography"; Photograph by Mosadoluwa Akinjobi, 2025.
                        </p>
                        <p className="font-light">
                            <span className="italic">Image of Leaves (nrt), Charcoal on Paper, 99 x 144 cm;</span> Background photograph to "Poetry;" Photograph by Nuno Lorena, circa 2020.
                        </p>
                        <p className="font-light">
                            <span className="italic">Dark Summer;</span> Background photograph to "Prose;" [Filtered to greyscale for aesthetic consistency]; [Coloured] Photograph by Chaitanya Deshpande, 2016.
                        </p>
                        <p className="font-light">
                            <span className="italic">A Black and White Photo of Leaves;</span> Background photograph to "Prune;" Photograph by Mike Hindle, circa 2024.
                        </p>
                        <p className="font-light">
                            <span className="italic">Mute Swan in Low Light [...];</span> Background photograph to "The Unwrapping;" Photograph by David Cohen, circa 2016.
                        </p>
                        <p className="font-light">
                            <span className="italic">Whorls hand-drawn by TJ Benson using silver gel ink on 16 x 22 archival paper;</span> Background photograph to "Contact;" Photograph by TJ Benson, 2021.
                        </p>
                    </div>

                    {/* Design Credits */}
                    <div className="mt-12 pt-8">
                        <h2 className="text-base md:text-lg font-bold text-white mb-6">
                            Design Credits
                        </h2>
                        <div className="space-y-4 text-white leading-relaxed text-sm md:text-base font-light">
                            <p>
                                This iteration of Obáfẹ́mi Thanni's personal website lends its design and takes inspiration from Nay Saysourinho and Eloghosa Osunde.
                            </p>
                            <p>
                                Web design and maintenance by John Omaji.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact