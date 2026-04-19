import { useState } from "react";

function StudentRow({ student, index, onScoreUpdate }) {
  const [inputScore, setInputScore] = useState("");

  const isPassing = student.score >= 40;

  function handleUpdate() {
    if (inputScore === "" || isNaN(inputScore)) return;
    onScoreUpdate(student.id, inputScore);
    setInputScore("");
  }

  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={`status-badge ${isPassing ? "pass" : "fail"}`}>
          {isPassing ? "Pass" : "Fail"}
        </span>
      </td>
      <td className="update-cell">
        <input
          type="number"
          placeholder="New score"
          value={inputScore}
          onChange={(e) => setInputScore(e.target.value)}
          className="score-input"
          min="0"
          max="100"
        />
        <button onClick={handleUpdate} className="btn btn-update">
          Update
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
