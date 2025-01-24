import React from 'react';
import GallerySection from '../components/GallerySection';
import Header from '../components/Header';

const pastelImages = [
    { src: './images/Iris2.jpeg', title: 'Iris' },
    { src: './images/chelsea_church.jpg', title: 'A Church in Chelsea' },
    { src: './images/larrys_digital.jpeg', title: 'Larrys' },
    { src: './images/june-16.jpg', title: 'June 16, 2016' },
    { src: './images/color.jpg', title: 'Color' },
    { src: './images/french-door.jpg', title: 'French Door' },
    { src: './images/home.jpg', title: 'Home' },
    { src: './images/patio-bedroom.jpg', title: 'Patio Bedroom' },
    { src: './images/yard-chair.jpg', title: 'Yard Chair' },
    { src: './images/litttle_pool.jpg', title: 'Little Pool' },
    { src: './images/rome_market.jpg', title: 'Room Market' },
    { src: './images/lounge_chairs.jpeg', title: 'Lounge Chairs' },
    { src: './images/trailer_court_master.jpg', title: 'Trailer Court' },
    { src: './images/chair.jpg', title: 'Chair' },
    { src: './images/red-banana.jpg', title: 'Red Banana' },
    { src: './images/backyard.jpg', title: 'Backyard' },
    { src: './images/pool.jpg', title: 'Pool' },
    { src: './images/red-chair.jpg', title: 'Red Chair' },
    // Add more pastel images
];

const oilImages = [

    // Add more oil images
];

function Gallery() {
    return (
        <div className="p-8 bg-gray-100">
            {/* <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1> */}
            <Header />
            <GallerySection title="Pastel & Oil Collection" images={pastelImages} />
            {/* <GallerySection title="Oil Collection" images={oilImages} /> */}
        </div>
    );
}

export default Gallery;
