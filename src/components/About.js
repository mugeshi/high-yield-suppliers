import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://newhampshirebulletin.com/wp-content/uploads/2021/11/GettyImages-1283206620-1024x599.jpg",
    "https://img.freepik.com/free-photo/freshness-organic-vegetables-healthy-autumn-salad-generated-by-artificial-intelligence_25030-60649.jpg",
    "https://www.njc.edu/sites/default/files/areaofstudy/banner/banner-agribusiness-073119.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <img className={styles.heroImage} src={images[currentImageIndex]} alt="Hero" />
      </div>
      <div className={styles.heroContent}>
          <h2>About Us</h2>
        </div>
    </div>
  );
}

export default About;
