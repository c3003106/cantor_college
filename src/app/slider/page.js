'use client'
import { useEffect, useState } from 'react';
import styles from './slider.module.css';

export default function Staff() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelector(`.${styles.slides}`);
    const showSlide = (index) => {
      if (slides) {
        const slideWidth = slides.children[0]?.offsetWidth || 0;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
      }
    };

    showSlide(currentIndex);
  }, [currentIndex]);

  const nextSlide = () => {
    const slides = document.querySelector(`.${styles.slides}`);
    const totalSlides = slides?.children.length || 0;
    if (totalSlides === 0) return;
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    const slides = document.querySelector(`.${styles.slides}`);
    const totalSlides = slides?.children.length || 0;
    if (totalSlides === 0) return;
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };
  
  return (
    <>
    <div className={styles.slideContainer}>
        <span id={styles.prevBtn} onClick={prevSlide}>{`<`}</span>
      <div className={styles.slider}>
        <div className={styles.slides}>
          <img src="/Images/computing_thumbnail.jpg" alt="computing Labs"></img>
          <img src="/Images/design_thumbnail.jpeg" alt="computing Labs"></img>
          <img src="/Images/Study_banner.jpeg" alt="computing Labs"></img>
        </div>
      </div>
        <span id={styles.nextBtn} onClick={nextSlide}>{`>`}</span>
    </div>
    </>
  );
}