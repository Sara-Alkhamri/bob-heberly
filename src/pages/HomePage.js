import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './HomePage.scss';

// Import images
const pastelImages = [
    { src: './images/Iris2.jpeg', title: 'Pastel Art 1' },
    { src: './images/chelsea_church.jpg', title: 'Pastel Art 2' },
    // { src: './images/desoto_vacation.jpg', title: 'Pastel Art 3' },
    { src: './images/larrys_digital.jpeg', title: 'Pastel Art 4' },
];

const petPortraits = [
    { src: './images/prada.jpg', title: 'Pet Portrait 1' },
    { src: './images/baxter.jpeg', title: 'Pet Portrait 2' },
    { src: './images/sammy.jpg', title: 'Pet Portrait 3' },
    { src: './images/tucker.jpg', title: 'Pet Portrait 4' },
];

const defaultImages = [...pastelImages, ...petPortraits]; // Combine all images for the default slideshow

function HomePage() {
    const [hoveredCollection, setHoveredCollection] = useState(null); // Track hovered button
    const [currentDefaultIndex, setCurrentDefaultIndex] = useState(0); // Track current index for default slideshow

    useEffect(() => {
        if (hoveredCollection === null) {
            // If no button is hovered, start rotating images
            const interval = setInterval(() => {
                setCurrentDefaultIndex((prevIndex) => (prevIndex + 1) % defaultImages.length);
            }, 3000); // Rotate every 3 seconds

            return () => clearInterval(interval); // Clear interval when component unmounts or hoveredCollection changes
        }
    }, [hoveredCollection]);

    const getImageToShow = () => {
        if (hoveredCollection === 'pastel') {
            return pastelImages[0].src; // Show the first image in the pastel collection
        } else if (hoveredCollection === 'pet') {
            return petPortraits[0].src; // Show the first image in the pet portraits collection
        }
        return defaultImages[currentDefaultIndex].src; // Show rotating default images
    };

    return (
        <div>
            <Header />

            <div className="homepage">
                <main className="main-content">
                    {/* Left Section */}
                    <section className="left-section roboto-medium">
                        <Link
                            to="/gallery"
                            className="button"
                            onMouseEnter={() => setHoveredCollection('pastel')}
                            onMouseLeave={() => setHoveredCollection(null)}
                        >
                            Pastel & Oil Collection
          </Link>
                        <Link
                            to="/pets"
                            className="button"
                            onMouseEnter={() => setHoveredCollection('pet')}
                            onMouseLeave={() => setHoveredCollection(null)}
                        >
                            Pet Portraits
          </Link>
                    </section>

                    {/* Right Section */}
                    <section className="right-section">
                        <img
                            src={getImageToShow()}
                            alt="Art Display"
                            className="art-image"
                        />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
