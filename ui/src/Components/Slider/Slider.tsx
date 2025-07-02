import React, { useEffect, useState, Children, cloneElement, ReactNode } from 'react';
import styles from './Slider.module.less';

interface SliderWidgetProps {
    children: ReactNode;
    interval?: number;
}

const SliderWidget: React.FC<SliderWidgetProps> = ({ children, interval = 5000 }) => {
    const slides = Children.toArray(children);
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, interval);

        return () => clearInterval(timer);
    }, [slides.length, interval, goToNextSlide]);

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const currentElement = slides[currentSlide];

    return (
        <div className={styles.sliderWidget}>
            <div className={styles.sliderSlide}>
                {React.isValidElement(currentElement) ? cloneElement(currentElement) : null}
            </div>

            <div className={styles.sliderControls}>
                <button
                    className={`${styles.arrowButton} ${currentSlide > 0 ? styles.activeArrow : styles.inactiveArrow}`}
                    disabled={currentSlide === 0}
                    onClick={currentSlide > 0 ? goToPrevSlide : undefined}
                >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                        <polyline
                            fill="none" points="6 14 12 8 18 14" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                </button>

                <div className={styles.indicatorContainer}>
                    {slides.map((_, index) => (
                        <div
                            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                            key={index}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>

                <button
                    className={`${styles.arrowButton} ${currentSlide < slides.length - 1 ? styles.activeArrow : styles.inactiveArrow}`}
                    disabled={currentSlide === slides.length - 1}
                    onClick={currentSlide < slides.length - 1 ? goToNextSlide : undefined}
                >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                        <polyline
                            fill="none" points="6 10 12 16 18 10" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default SliderWidget;
