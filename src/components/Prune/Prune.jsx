import React from 'react'
import PruneHero from './PruneHero.jsx'
import EditorialServices from './components/EditorialServices' // Adjust path as needed


const PrunePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <PruneHero />

            
            {/* Main Content - This will push footer to bottom */}
            <main className="flex-grow">
            
                <EditorialServices />
            </main>
            
        
        </div>
    )
}

export default PrunePage