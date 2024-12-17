import { fetchCourseDetails } from "@/app/lib/db";
import './course.css'

const CourseDetails = async ({params}) => {
    const {CourseType, CourseTitle} = await params;

    function decodeURL(Text){
      return decodeURIComponent(Text.trim());
    }
    console.log(decodeURL(CourseTitle));

    const course = await fetchCourseDetails(decodeURL(CourseTitle))
    console.dir(course);

    return (
      <div className='container'>
        <h3>{course.CourseAwardName} {course.CourseTitle}</h3>
        <p>{course.CourseSummary}</p>
        <p>Course Type: {course.CourseType}</p>
        <p>Course year: {course.YearOfEntry}</p>
        <p>Mode of Attendance: {course.ModeOfAttendance}</p>
        <p>Course Length: {course.StudyLength}</p>
      </div>
    );
  }
  export default CourseDetails