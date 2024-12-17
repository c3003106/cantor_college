import React from "react";
import styles from './page.module.css';
import Searchbar from "./Components/Searchbar";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
    <div id={styles.WelcomeContent}>
      <img src="./Images/main.webp"/>
      <div  id={[styles.WelcomeText]}>
        <h2>Study with us this winter</h2>
        <a href="./study">Find out courses</a>
      </div>
    </div>

    <Searchbar/>

    <div id={styles.splitContent}>
            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <a href="./study/computerCourses"><img src="../Images/computing_thumbnail.webp" alt="Computer Courses" /></a>
                </div>
                <h3>Computing Courses</h3>
                <p>Cantor College offers a diverse range of courses, including BSc Honours Degrees in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, preparing students for professional careers.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <a href="./learningResources"><img src="../Images/resources_banner.webp" alt="Learning Resources" /></a>
                </div>
                <h3>Learning Resources</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc senectus pharetra posuere sit ipsum ullamcorper.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <a href="../about"><img src="../Images/main.webp" alt="about" /></a>
                </div>
                <h3>Find more about the College</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc senectus pharetra posuere sit ipsum ullamcorper.</p>
            </div>
        </div>

        <div id={styles.awards}>
          <h2>Awards</h2>
          <img src="../Images/awards_banner.webp"></img>
        </div>

    </>
  );
}