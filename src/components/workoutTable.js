export default function WorkoutTable(props) {
    const workout = props.workout ?? { exercises: [] };
  
    console.dir("table-workout", workout);
  
    return (
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          {workout.exercises && workout.exercises.map((ex, index) => (
            <tr key={index}>
              <td>{ex.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }