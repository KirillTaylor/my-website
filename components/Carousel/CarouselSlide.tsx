import React from 'react';
import './style.css';

interface CarouselSlideProps {
    title: string;
    description: string;
    image?: string;
    style?: React.CSSProperties;
}

const CarouselSlide = (props: CarouselSlideProps) => {
    return (
        <div className="carousel-slide flex flex-col justify-center items-center" style={props.style}>
            {props.image && <img src={props.image} alt={props.title} />}
            <div className="carousel-slide-content text-center">
                <div className="carousel-slide-title">{props.title}</div>
                <div className="carousel-slide-description">{props.description}</div>
            </div>
        </div>
    );
}

export default CarouselSlide;