import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || score === "") return;
    onAddStudent(name.trim(), score);
    setName("");
    setScore("");
  }

  return (
    <section className="form-section">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="student-name">Student Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="student-score">Score</label>
          <input
            id="student-score"
            type="number"
            placeholder="Enter score (0–100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="form-input"
            min="0"
            max="100"
          />
        </div>
        <button type="submit" className="btn btn-add">
          + Add Student
        </button>
      </form>
    </section>
  );
}

export default AddStudentForm;
