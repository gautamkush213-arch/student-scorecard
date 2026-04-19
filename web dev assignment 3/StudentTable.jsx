import StudentRow from "./StudentRow";

function StudentTable({ students, onScoreUpdate }) {
  return (
    <section className="table-section">
      <h2>Students</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              index={index + 1}
              onScoreUpdate={onScoreUpdate}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentTable;
