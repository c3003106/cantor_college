import styles from "../children.module.css";

export const metadata = {
  title: "IT",
};

export default function facilities() {
  return (
    <>
      <div id={styles.banner}>
        <div>
          <h2>Facilities</h2>
          <p>
            The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
            <br />
            <br />
            Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.
          </p>
        </div>
        <img src="../Images/design_thumbnail.jpeg"></img>
      </div>

      <div className={styles.textHolder}>
        <h3>Facilities include:</h3>
        <ul>
          <li>wi-fi technology</li>
          <li>pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
          <li>specialist faculty facilities</li>
          <li>a double height lecture theatre at first and second floor level</li>
          <li>dramatic three-storey glass open atrium</li>
          <li>meeting rooms</li>
          <li>office accommodation</li>
          <li>specialist IT facilities</li>
          <li>reception desk area</li>
          <li>catering outlet</li>
          <li>parking for disabled badge holders</li>
          <li>cycle racks</li>
        </ul>
      </div>
    </>
  );
}