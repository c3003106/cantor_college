import { fetchCourse } from "@/app/lib/db";
import styles from "./parent.module.css";
import Link from "next/link";

export const metadata = {
    title: "Study",
};

const Study = async () => {
    const course = await fetchCourse();

    return (
        <>
            <div id={styles.banner}>
                <h2>Study in Cantor College</h2>
            </div>

            <div id={styles.splitContent}>
                <div className={styles.container}>
                    <div className={styles.imgcontainer}>
                        <a href="./study/computerCourses"><img src="./Images/computing_thumbnail.webp" alt="Computing courses" /></a>
                    </div>
                    <h3>Computing Courses</h3>
                    <p>Cantor College offers a diverse range of courses, including BSc Honours Degrees in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, preparing students for professional careers.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.imgcontainer}>
                        <a href="./study/designCourses"><img src="./Images/design_thumbnail.webp" alt="Design courses" /></a>
                    </div>
                    <h3>Designing Courses</h3>
                    <p>Cantor College is a creative community preparing students for the world through applied knowledge and creativity, offering art and design courses, expert teaching, and professional skills development.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.imgcontainer}>
                        <a href="./learningResources"><img src="./Images/resources_banner.webp" alt="Learning resources" /></a>
                    </div>
                    <h3>Learning Resources</h3>
                    <p>Cantor College provides a wide range of learning resources to help students achieve their academic and professional goals, including digital databases, library collections, study guides, workshops, and personalized research assistance.</p>
                </div>
            </div>

            <div className={styles.heading}>
                <h2>All courses</h2>
            </div>

            <div className={styles.courseContainer}>
                <ul>
                    {course.map((course, index) => (
                        <li key={index}>
                            <h3><Link href={`./study/${course.CourseTitle}`} className={styles.courseLink}>{course.CourseAwardName} {course.CourseTitle}</Link></h3>
                            <p>{course.CourseSummary}</p>
                            <p className={styles.courseType}>{course.CourseType}</p>
                            <p className={styles.info}>{course.YearOfEntry}</p>
                            <p className={styles.info}>{course.ModeOfAttendance}</p>
                            <p className={styles.info}>{course.StudyLength}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Study;