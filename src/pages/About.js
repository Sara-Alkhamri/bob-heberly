import React from 'react';
import './About.scss';
import bob from '../bob.png'; // Update with the actual image path
import desoto_vacation from '../desoto_vacation.jpg';
import Header from '../components/Header';

function About() {
    return (
        <>
            <Header />
            <div className="about-container">
                <section className="about-left">
                    <p className="about-bio">
                        <strong>Robert Heberly</strong>, born and raised in Burbank, California, is a passionate and accomplished artist known for his evocative pastel and oil paintings.
                        Inspired by the rich cultural landscape of his hometown, Robert's work captures the essence of everyday life with a focus on light, texture, and emotion.
                        His talent for bringing scenes and portraits to life has earned him recognition in local and national art communities. Whether through his vivid landscapes,
                        intricate still lifes, or heartwarming commissioned pet portraits, Robert’s art reflects his deep connection to his roots and his commitment to storytelling
                        through creativity. 
                </p>
                    <img src={desoto_vacation} alt="Baby Bob" className="about-image" />
                </section>
                <section className="about-right">
                    <img src={bob} alt="Robert Heberly" className="about-image" />
                </section>
            </div>
        </>
    );
}

export default About;
