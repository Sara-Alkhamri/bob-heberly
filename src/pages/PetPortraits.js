import React from 'react';
import GallerySection from '../components/GallerySection';
import Header from '../components/Header';

const petPortraits = [
    { src: './images/baxter.jpeg', title: 'Baxter' },
    { src: './images/sammy.jpg', title: 'Sammy' },
    { src: './images/tucker.jpg', title: 'Tucker' },
    { src: './images/prada.jpg', title: 'Prada' },
    { src: './images/annie.jpg', title: 'Annie' },
    { src: './images/bobcat.jpg', title: 'Bobcat' },
    // Add more pet portraits
];

function PetPortraits() {
    return (
        <>
            <Header />
            <div className="p-8 bg-gray-100">
                {/* <h1 className="text-3xl font-bold text-center mb-8">Commissioned Pet Portraits</h1> */}
                <GallerySection title="Pet Portraits" images={petPortraits} />
            </div>
        </>
    );
}

export default PetPortraits;
