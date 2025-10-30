import React from 'react'

const Contact = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Contact Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8 tracking-wide">
                        CONTACT ME
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        For Enquiries, Bookings and Tea appointments, kindly write to me at
                    </p>
                    <a 
                        href="mailto:editor@obafemithanni.com" 
                        className="text-xl text-blue-600 hover:text-blue-800 font-light transition-colors"
                    >
                        editor@obafemithanni.com
                    </a>
                </div>

                {/* Photography Credits */}
                <div className="border-t border-gray-300 pt-12 mb-16">
                    <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">
                        Photography Credits
                    </h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            <strong>Greyscale Rose Flower;</strong> Background photograph to "Obafemi Thanni" Photograph by Amirali Mirhashemian, circa 2019.
                        </p>
                        <p>
                            <strong>Portrait of Obafemi Thanni;</strong> Accompanying Photograph to "Biography"; Photograph by Masadoluwa Akinjabi, 2025.
                        </p>
                        <p>
                            <strong>Image of Leaves (nrt.), Charcool on Paper, 99 x 144 cm;</strong> Background photograph to "Poetry;" Photograph by Nuno Lorena, circa 2020.
                        </p>
                        <p>
                            <strong>Dark Summer;</strong> Background photograph to "Prose;" [Filtered to greyscale for aesthetic consistency]; [Coloured] Photograph by Chaitanya Deshpande, 2016.
                        </p>
                        <p>
                            <strong>A Black and White Photo of Leaves;</strong> Background photograph to "Prune;" Photograph by Mike Hindle, circa 2024.
                        </p>
                        <p>
                            <strong>Mute Swan in Low Light [...];</strong> Background photograph to "The Unwrapping;" Photograph by David Cohen, circa 2016.
                        </p>
                        <p>
                            <strong>Whorls hand-drawn by TJ Benson using silver gel ink on 16 x 22 archival paper;</strong> Background photograph to "Contact;" Photograph by TJ Benson, 2021.
                        </p>
                    </div>
                </div>

                {/* Design Credits */}
                <div className="border-t border-gray-300 pt-12">
                    <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">
                        Design Credits
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            This iteration of Obafemi Thanni's personal website lends its design and takes inspiration from Nag Saysourinho and Eloghosa Osunde.
                        </p>
                        <p>
                            <strong>Web design and maintenance by John Omaji.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact