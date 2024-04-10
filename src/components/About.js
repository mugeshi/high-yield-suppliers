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
        <div className={styles.heroContent}>
          <h2>About Us</h2>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.vision}`}>
          <div className={styles.circle}><h3>Vision</h3></div>
          <p>
            Honesty and reliability in delivering timely products and services.
            Continually improving the value demand for new and existing clients.
            To develop long term relationship with our clients.
            To give to clients aspirations and requirement.
          </p>
        </div>
        <div className={`${styles.card} ${styles.mission}`}>
          <div className={styles.circle}><h3>Mission</h3></div>
          <p>
            To offer our customers a wide range of high-quality products and services at very competitive prices and to maintain the highest standards in customer care, integrity and operational efficiency.
          </p>
        </div>
        <div className={`${styles.card} ${styles.workforce}`}>
          <div className={styles.circle}><h3>Workforce</h3></div>
          <p>
            We have an energetic team comprising farmers, drivers and sales representatives. We also liaise with other farmers through digital platforms whereby we are able to source products from each other.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
