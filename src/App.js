import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

function App() {
  const employeeDetails = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
  };

  function getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  const data = [];

  return (
    <div className="App">
      <h3>Form Details:</h3>
      <p>
        <h3>Name:</h3> {employeeDetails.name}
      </p>
      <p>
        <h3>Email:</h3> {employeeDetails.age}
      </p>
      <p>
        <h3>position:</h3> {employeeDetails.position}
      </p>

      <h3>Current Date: {moment(getCurrentDate()).format("YYYY/MM/DD")}</h3>
    </div>
  );
}

export default App;
