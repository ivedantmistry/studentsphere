import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
// import './Profile.css'

const Profile = () => {
    const {userC} = useContext(AuthContext);

    const {displayName, email, photoURL} = userC ? userC : {};
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
            <div>
                <img src={photoURL} alt=""  className="rounded-2xl"/>
            </div>
            <h4><span>Name: </span> {displayName}</h4>
            <p>{email}</p>
            </div>
            <main>
  <aside className="sidebar">
    <section className="dashboard-section courses">
      <h2>Your Courses</h2>
      <ul className="course-list">
        <li>Course 1: Mathematics</li>
        <li>Course 2: Chemistry</li>
        <li>Course 3: English Literature</li>
        <li>Course 4: Physics</li>
      </ul>
      <button id="add-course-button">Add Course</button>
      <button id="remove-course-button">Remove Course</button>
    </section>
    <section className="dashboard-section profile">
      <h2>Your Profile</h2>
      <form id="profile-form">
        <div className="input-group">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Name"
          />
        </div>
        <br />
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <button type="submitcs">Save Changes</button>
      </form>
    </section>
  </aside>
  <div className="content">
    <h2>Welcome, Student!</h2>

    <section className="upcoming-assignments">
      <h3>Upcoming Assignments</h3>
      <ul>
        <li>Assignment 1: Due on October 15th</li>
        <li>Assignment 2: Due on October 22nd</li>
        <li>Assignment 3: Due on November 5th</li>
      </ul>
    </section>

    <section className="grades">
      <h3>Your Grades</h3>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Assignment</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>Assignment 1</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td>Assignment 3</td>
            <td>88%</td>
          </tr>
          <tr>
            <td>English Literature</td>
            <td>Assignment 2</td>
            <td>91%</td>
          </tr>
          <tr>
            <td>Physics</td>
            <td>Assignment 1</td>
            <td>94%</td>
          </tr>
          {/* Add more rows for other courses and assignments */}
        </tbody>
      </table>
    </section>

    <section className="announcements">
      <h3>Announcements</h3>
      <ul>
        <li>There will be a guest lecture on October 20th in the History of Science class.</li>
        <li>Mathematics midterm exam is scheduled for November 10th.</li>
      </ul>
    </section>
  </div>
</main>

        </div>
    );
};

export default Profile;