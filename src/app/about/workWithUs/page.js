'use client'
import styles from "../children.module.css";
import { useState } from "react";

export default function WorkWithUs() {
    const [activeTab, setActiveTab] = useState("expertise");
    return (
        <>
            <div id={styles.banner}>
                <h2>Work With Us</h2>
            </div>

            <div className={styles.textHolder}>
                <h3>Partner with Cantor College: Unlock Expertise, Innovation, and Growth</h3>
                <p>At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.</p>
            </div>

            <div className={styles.listHolder}>
                <h2>Our Services:</h2>
                <ol>
                    <li>
                        <h3>Custom Training and Development Programs</h3>
                        <p>Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.</p>
                    </li>
                    <li>
                        <h3>Research and Development Partnerships</h3>
                        <p>Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.</p>
                    </li>
                    <li>
                        <h3>Design and Technology Consultancy</h3>
                        <p>Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.</p>
                    </li>
                    <li>
                        <h3>Internships and Graduate Recruitment</h3>
                        <p>Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical </p>
                    </li>
                    <li>
                        <h3>Event Hosting and Sponsorship </h3>
                        <p>Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.</p>
                    </li>
                </ol>
            </div>

            <div className={styles.tabContainer}>
                <h3>Why Partner with Cantor College?</h3>
                <div className={styles.tab}>
                    <button className={activeTab === "expertise" ? styles.active : ""} onClick={() => setActiveTab("expertise")}>Expertise</button>
                    <button className={activeTab === "innovation" ? styles.active : ""} onClick={() => setActiveTab("innovation")}>Innovation</button>
                    <button className={activeTab === "solutions" ? styles.active : ""} onClick={() => setActiveTab("solutions")}>Solutions</button>
                    <button className={activeTab === "talent" ? styles.active : ""} onClick={() => setActiveTab("talent")}>Talent</button>
                </div>

                <div id="expertise" className={styles.tabContent} style={{ display: activeTab === "expertise" ? "block" : "none" }}>
                    <h4>Cutting-Edge Expertise:</h4>
                    <p>Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.</p>
                </div>

                <div id="innovation" className={styles.tabContent} style={{ display: activeTab === "innovation" ? "block" : "none" }}>
                    <h4>Innovation at the Core:</h4>
                    <p>We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.</p>
                </div>

                <div id="solutions" className={styles.tabContent} style={{ display: activeTab === "solutions" ? "block" : "none" }}>
                    <h4>Tailored Solutions:</h4>
                    <p>We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.</p>
                </div>

                <div id="talent" className={styles.tabContent} style={{ display: activeTab === "talent" ? "block" : "none" }}>
                    <h4>Future-Ready Talent:</h4>
                    <p>Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.</p>
                </div>
            </div>

            <div className={styles.listHolder}>
                <h3>Get in Touch</h3>
                <p>
                    Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals.
                </p>
            </div>  
        </>
    );
}