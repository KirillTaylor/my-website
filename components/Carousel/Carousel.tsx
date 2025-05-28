/**
 * Why am I creating a custom carousel component when there are already so many out there you ask?
 *  
 * Well, looking for a carousel that I wanted didn't product much results. 
 * I wanted to show off my skills and create a carousel that I can be proud of. :)
 * But also, I wanted to make sure that the look and feel of the carousel is consistent with the rest of the website.
 */

'use client';

import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import './style.css';
import { CarouselProps } from './ICarousel';

const Carousel = (props: CarouselProps) => {
    // State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const [slidesLength, setSlidesLength] = useState(0);

    // Style for the carousel wrapper
    const style = {
        backgroundColor: props.backgroundColor || 'transparent',
        width: wrapperWidth + '%',
    };

    // Handle click events on dots and chevron buttons
    const handleSlideChange = (index: number) => {
        if (index < 0) {
            index = slidesLength - 1;
        } else if (index >= slidesLength) {
            index = 0;
        }
        setCurrentSlide(index);
    };

    // Handle single slide positioning inside the viewport
    const singleSlideStyle = {
        width: (slidesLength > 0 ? wrapperWidth / (slidesLength * 2) : 100) + '%',
        left: '-' + currentSlide * (wrapperWidth / (slidesLength * 2)) + '%',
    };

    // Rehydrate the slide width
    useEffect(() => {
        setWrapperWidth((props.slides?.length ?? 0) * 100);
        setSlidesLength(props.slides?.length ?? 0);
    }, [props.slides]);
    return (
        <div className="container my-10">
            <div className="carousel-container flex flex-col justify-center items-center">
                <div className="carousel-nav carousel-prev-arrow" onClick={() => handleSlideChange(currentSlide - 1)}>
                    <i className="mdi mdi-chevron-left"></i>
                </div>
                <div className="carousel-viewport border-2 border-gray-300 rounded-md">
                    <div className="carousel-wrapper flex" style={style}>
                        {props.slides && props.slides.map((slide, index) => (
                            <CarouselSlide key={index} {...slide} style={singleSlideStyle} />
                        ))}
                    </div>
                </div>
                <div className="carousel-nav carousel-next-arrow" onClick={() => handleSlideChange(currentSlide + 1)}>
                    <i className="mdi mdi-chevron-right"></i>
                </div>
            </div>
            <div className="carousel-dots flex justify-center items-center">
                {props.slides && props.slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`carousel-dot m-1 opacity-50 hover:opacity-100 cursor-pointer ${currentSlide === index ? 'opacity-100' : ''}`} 
                        onClick={() => handleSlideChange(index)}>
                        <i className="mdi mdi-circle"></i>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Carousel;