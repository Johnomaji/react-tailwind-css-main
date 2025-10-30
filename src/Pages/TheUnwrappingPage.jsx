import React from 'react'
import TheUnwrapping from '../components/TheUnwrapping/TheUnwrapping.jsx'
import Hero from '../components/Hero/Hero.jsx'
import TheUnwrappingHero from '../components/TheUnwrapping/TheUnwrappingHero.jsx'
// import SEO from '../components/SEO/SEO.jsx'

const TheUnwrappingPage = () => {
    return (
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <TheUnwrappingHero />
            <TheUnwrapping />
        </div>
    )
}

export default TheUnwrappingPage