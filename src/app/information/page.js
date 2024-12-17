import styles from "./parent.module.css";

export const metadata = {
    title: "Information",
  };

const information = () => {   
    return (
      <>
        <div id={styles.banner}>
            <h2>Information</h2>
        </div>

        <div id={styles.splitContent}>
            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <a href="./information/student"><img src="/Images/students.webp" alt="info for students" /></a>
                </div>
                <h3>Info for the students</h3>
                <p> materials, providing research assistance, study spaces, and 24/7 online access to its digital catalog for campus and remote students.</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <a href="./information/staff"><img src="./Images/staff.webp" alt="Info for the staff" /></a>
                </div>
                <h3>Info for the staff</h3>
                <p>Cantor College's dedicated staff, from faculty to administrators, collaborate to create an inclusive, supportive learning environment that ensures students receive the best education and guidance.</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <a href="./study"><img src="./Images/Study_banner.webp" alt="Courses" /></a>
                </div>
                <h3>All Courses</h3>
                <p>Cantor College offers a diverse range of courses, including BSc Honours Degrees in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, preparing students for professional careers.</p>
            </div>
        </div>
      </>
    );
  }

  export default information;