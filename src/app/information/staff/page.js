import styles from "../children.module.css";


export const metadata = {
    title: "Info for Staff",
};

export default function Staff() {
    return (
        <>
            <div id={styles.banner}>
                <div id={[styles.bannerText]}>
                    <h2>Information for Staff</h2>
                    <p>
                        At Cantor College, our dedicated staff are the cornerstone of our success. Committed to fostering an inclusive, supportive, and dynamic learning environment, each member brings a wealth of expertise and passion to their role. From faculty to administrative staff, our team works collaboratively to ensure students receive the best education, resources, and guidance throughout their academic journey. Meet the individuals who are here to support your learning and help you achieve your career goals.                </p>
                </div>
            </div>

            <div id={styles.grid}>
                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/InformationPage/student_awards.webp" alt="News" />
                    </div>
                    <h3>News</h3>
                    <p>Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one day event.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <a href="../login"><img src="../Images/InformationPage/academic_registry.webp" alt="Acdemic Registry" /></a>
                    </div>
                    <h3>Acdemic Registry</h3>
                    <p>For academic regulations, assessment, awards, student records and course validation.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/catering.webp" alt="Catering Services" />
                    </div>
                    <h3>Catering Services</h3>
                    <p>Contact the Catering Services regarding on and off-site catering.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/InformationPage/financial_services.webp" alt="Financial Services" />
                    </div>
                    <h3>Financial Services</h3>
                    <p>The financial team based on the 2nd Floor are responsible for all areas of student finance aswell as College budgeting.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/InformationPage/IT_services.webp" alt="Information Systems Services" />
                    </div>
                    <h3>Information Systems Services</h3>
                    <p>The ISS team delivers the College’s computing facilities including all hardware and software. They also run the staff helpdesk.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/InformationPage/marketing.webp" alt="Marketing Services" />
                    </div>
                    <h3>Marketing Services</h3>
                    <p>The Marketing Team will help promote events and new courses. They will help with press release preparation.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/InformationPage/personal_services.webp" alt="Personal Services" />
                    </div>
                    <h3>Personal Services</h3>
                    <p>All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.</p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.imgcontainer}>
                        <img src="../Images/computer_2.webp" alt="Facilities" />
                    </div>
                    <h3>Facilities</h3>
                    <p>The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.</p>
                </div>
            </div>
        </>
    );
}