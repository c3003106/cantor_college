import styles from './parent.module.css'

export default function about() {
  return (
    <>
      <div id={styles.banner}>
        <h1>About us</h1>
      </div>

      <div className={styles.textHolder}>
        <h2>Where Innovation Meets Opportunity: Cantor College</h2>
        <p>
          Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe.  Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.
        </p>
      </div>

      <div id={styles.splitContent}>
        <div className={styles.container}>
          <div className={styles.imgcontainer}>
            <a href="./about/workWithUs"><img src="/Images/bussiness.webp" alt="bussiness" /></a>
          </div>
          <h3>Work with us</h3>
          <p>Cantor College uses collaboration between education and industry to provide specialized services in computing, design, and technology, ensuring that businesses thrive in the digital age.</p>
        </div>

        <div className={styles.container}>
          <div className={styles.imgcontainer}>
            <a href="./learningResources/IT"><img src="/Images/computer_2.webp" alt="IT" /></a>
          </div>
          <h3>Book a Computer</h3>
          <p>Book a computer station at Cantor College Library for easy access to the latest software and resources for studying, research, or project work.</p>
        </div>

        <div className={styles.container}>
          <div className={styles.imgcontainer}>
            <a href="./study"><img src="/Images/Study_banner.webp" alt="Courses" /></a>
          </div>
          <h3>All Courses</h3>
          <p>Cantor College offers a diverse range of courses, including BSc Honours Degrees in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, preparing students for professional careers.</p>
        </div>
      </div>
    </>
  );
}