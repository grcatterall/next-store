'use client';
import Slide from "./slide";
import { Carousel as FlowCarousel } from "flowbite-react";

const Carousel = () => {
    const slideImages = [
        'docs/images/carousel/carousel-1.svg',
        'docs/images/carousel/carousel-2.svg',
        'docs/images/carousel/carousel-3.svg',
        'docs/images/carousel/carousel-4.svg',
        'docs/images/carousel/carousel-5.svg'
    ];

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px] w-100">
            <FlowCarousel>
                {slideImages.map((image) => {
                    return <Slide image={image} key={image}/>
                })}
            </FlowCarousel>
        </div>
    );
}

export default Carousel;