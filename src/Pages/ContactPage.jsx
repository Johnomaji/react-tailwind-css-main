import React from 'react'
// import Hero from '../components/Hero/Hero.jsx'
import ContactHero from '../components/ContactHero/ContactHero.jsx'
import Contact from '../components/Contact/Contact.jsx'

const ContactPage = () => {
    return (
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <ContactHero />
            <Contact />
        </div>
    )
}

export default ContactPage