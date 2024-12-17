import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });

const fetchCourse = async () => {
    try {
      const query = "SELECT * FROM course_list"; 
      const [rows] = await connection.execute(query); 
      return rows;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }
};

const fetchComputerCourse = async () => {
  try {
    const query = "SELECT * FROM course_list WHERE CourseSubject ='Computing'"; 
    const [rows] = await connection.execute(query); 
    return rows;
  } catch (error) {
    console.error("Database Error:", error); 
    throw new Error("Failed to fetch data.");
  }
};

const fetchDesignCourse = async () => {
  try {
    const query = "SELECT * FROM course_list WHERE CourseSubject ='Art and Design'"; 
    const [rows] = await connection.execute(query); 
    return rows;
  } catch (error) {
    console.error("Database Error:", error); 
    throw new Error("Failed to fetch data.");
  }
};

const fetchCourseDetails = async (CourseTitle) => {
  try {
      const query = "SELECT * FROM course_list WHERE CourseTitle = ?"; 
      const [rows] = await connection.execute(query, [CourseTitle]); 
      return rows[0] || null;
  } catch (error) {
    console.error("Database Error:", error); 
    throw new Error("Failed to fetch data.");
  }
};


export {fetchCourse, fetchComputerCourse, fetchDesignCourse, fetchCourseDetails};
