'use client'
import { useEffect, useState } from 'react';
import styles from "../children.module.css";

export default function student() {
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
      <div id={styles.banner}>
        <div id={[styles.bannerText]}>
          <h1>Information for Students</h1>
        </div>
      </div>

      <div className={styles.textHolder}>
        <h2>Explore Cantor College: World-Class Facilities for Your Success</h2>
        <p>
          At Cantor College, we are committed to providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help you thrive in your chosen field. Whether you’re studying computing, design, or technology, our campus offers everything you need to excel.
        </p>
        <div className={styles.slideContainer}>
          <div className={styles.slider}>
            <span id={styles.prevBtn} onClick={prevSlide}>{`<`}</span>
            <div className={styles.slides}>
              <img src="/Images/computer_1.webp" alt="computing Labs"></img>
              <img src="/Images/computer_3.webp" alt="gaming labs"></img>
              <img src="/Images/library_2.webp" alt="library"></img>
              <img src="/Images/collaborative_study.webp" alt="collaborative environment"></img>
              <img src="/Images/lecture_theatre.webp" alt="lecture theatre"></img>
              <img src="/Images/printers.webp" alt="printers"></img>
            </div>
            <span id={styles.nextBtn} onClick={nextSlide}>{`>`}</span>
          </div>
        </div>
      </div>

      <div className={styles.listHolder}>
        <h2>Our Facilities</h2>
        <ol>
          <li>
            <a href="../learningResources/IT"><h3>Advanced Computing Labs</h3></a>
            <p>Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you.</p>
          </li>
          <li><h3>Design Studios</h3>
            <p>Our design studios offer a creative space for students in graphic design, digital media, and product design. Each studio is equipped with high-end graphic tablets, professional-grade software, and large-format printers, allowing you to bring your ideas to life. The studios also feature collaborative spaces where you can work with peers and faculty on group projects.</p>
          </li>
          <li><h3>Innovation and Makerspace</h3>
            <p>Cantor College’s Innovation and Makerspace is a hub for creativity and invention. This facility is equipped with 3D printers, laser cutters, CNC machines, and other advanced prototyping tools. Whether you're working on a design project or developing a new tech product, this space provides the resources to turn your concepts into reality.</p>
          </li>
          <li><h3>Technology Sandbox</h3>
            <p>The Technology Sandbox is an experimental space where students can explore the latest in VR, AR, and AI technologies. With access to cutting-edge devices and software, you’ll be able to experiment with emerging technologies and push the boundaries of what’s possible in your field.</p>
          </li>
          <li><h3>Collaborative Learning Spaces</h3>
            <p>Our campus features numerous collaborative learning spaces designed to foster teamwork and creative problem-solving. These spaces are equipped with smartboards, video conferencing tools, and flexible seating arrangements, making them ideal for group work, study sessions, or brainstorming meetings.</p>
          </li>
          <li><a href="../learningResources/Library"><h3>Library and Resource Centre</h3></a>
            <p>The Cantor College Library is a comprehensive resource Centre offering an extensive collection of books, journals, and digital resources related to computing, design, and technology. The library also provides quiet study areas, computer stations, and access to online databases, ensuring you have the information you need at your fingertips.</p>
          </li>
          <li><h3>Student Hub</h3>
            <p>The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs.</p>
          </li>
          <li><h3>Career and Development Centre</h3>
            <p>Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this Centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field.</p>
          </li>
          <li><h3>Fitness and Wellness Centre</h3>
            <p>We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being.</p>
          </li>
          <li><h3>On-Campus Housing</h3>
            <p>For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize.</p>
          </li>
        </ol>
      </div>

      <div className={styles.textHolder}>
        <h2>Find your way around the campus</h2>
        <img src='/Images/campus_map.webp' alt='campus map'></img>
      </div>
    </>
  );
}