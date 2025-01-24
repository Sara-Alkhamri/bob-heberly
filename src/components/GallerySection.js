import React from 'react';
import './GallerySection.scss';

function GallerySection({ title, images }) {
    return (
        <div className="gallery-section">
            <h2 className="gallery-title">{title}</h2>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img
                            src={image.src}
                            alt={image.title}
                            className="gallery-image"

                        />
                        <h3 className="gallery-image-title">{image.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GallerySection;
