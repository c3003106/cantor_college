import { fetchDesignCourse } from "@/app/lib/db";
import styles from "../children.module.css";
import Link from "next/link";

export const metadata = {
    title: "Design Courses",
};

const DesignCourses = async () => {
    const course = await fetchDesignCourse();

    return (
        <>
            <div id={styles.banner}>
                <div>
                    <h2>Design Courses</h2>
                    <p>The College is a creative community with diverse disciplines, preparing students to shape the world through applied knowledge and creativity. It offers art and design courses that promote alternative thinking, communication, and creative practice. Expert teaching from practitioners and researchers encourages innovative approaches. Students interact in studios, workshops, and digital workshops, while learning professional skills through applied briefs with commercial clients, cultural institutions, businesses, and organizations.
                    </p>
                </div>
                <img src="../Images/design_thumbnail.webp"></img>
            </div>

            <div className={styles.heading}>
                <h2>Design courses</h2>
            </div>

            <div className={styles.courseContainer}>
                <ul>
                    {course.map((course, index) => (
                        <li key={index}>
                            <h3><Link href={`../study/${course.CourseTitle}`} className={styles.courseLink}>{course.CourseAwardName} {course.CourseTitle}</Link></h3>
                            <p>{course.CourseSummary}</p>
                            <p className={styles.courseType}>{course.CourseType}</p>
                            <p className={styles.info}>{course.YearOfEntry}</p>
                            <p className={styles.info}>{course.ModeOfAttendance}</p>
                            <p className={styles.info}>{course.StudyLength}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div id={styles.splitContent}>
                <div className={styles.container}>
                    <div className={styles.imgcontainer}>
                        <a href="."><img src="../Images/Study_banner.webp" alt="All courses" /></a>
                    </div>
                    <h3>All Courses</h3>
                    <p>Cantor College offers a diverse range of courses, including BSc Honours Degrees in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, preparing students for professional careers.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.imgcontainer}>
                        <a href="./computerCourses"><img src="../Images/computing_thumbnail.webp" alt="Computing courses" /></a>
                    </div>
                    <h3>Computing Courses</h3>
                    <p>Cantor College is a creative community preparing students for the world through applied knowledge and creativity, offering art and design courses, expert teaching, and professional skills development.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.imgcontainer}>
                        <a href="../learningResources"><img src="../Images/resources_banner.webp" alt="Learning resources" /></a>
                    </div>
                    <h3>Learning Resources</h3>
                    <p>Cantor College provides a wide range of learning resources to help students achieve their academic and professional goals, including digital databases, library collections, study guides, workshops, and personalized research assistance.</p>
                </div>
            </div>
        </>
    );
}

export default DesignCourses;