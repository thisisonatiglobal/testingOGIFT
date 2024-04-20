import React, { useEffect, useRef, useState } from 'react';

const SingleFeature = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const image = imageRef.current;
            if (image) {
                const distanceFromTop = image.getBoundingClientRect().top;
                if (distanceFromTop <= window.innerHeight / 2) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col-reverse items-center justify-center py-16 sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 sm:p-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 justify-items-center">
                    <div className="card1 hover-card">
                        <p><span>Inspiring Environment</span></p>
                        <p><span>Unique Teaching Method</span></p>
                        <p><span>Well-Researched Courseware</span></p>
                    </div>
                    <div className="card1 hover-card">
                        <p><span>Expert & Trained Mentors</span></p>
                        <p><span> Placement Program</span></p>
                        <p><span>Bringing Industry to Classroom</span></p>
                    </div>
                </div>
            </div>
            <img
                ref={imageRef}
                className={`w-full mb-8 sm:w-full lg:w-3/4 xl:w-3.5/5 opacity-${isVisible ? '100' : '0'} transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} transition-opacity duration-500 ease-in-out transition-transform ${isVisible ? 'duration-500' : 'duration-50'} ease-in-out`}
                src="https://www.voguefashioninstitute.com/wp-content/uploads/2022/11/Vogue-Institute-Campus-e1668982684439.png"
                alt="OGIFT"
            />
        </div>
    );
};

export default SingleFeature;
