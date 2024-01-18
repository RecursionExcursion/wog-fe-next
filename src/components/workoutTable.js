import { formatString } from "../scripts/util.js";

export default function WorkoutTable(props) {
  const workout = props.workout ?? { exercises: [] };

  const tdStyle = "w-1/4 p-2 border flex justify-center";

  return (
    <div className="overflow-y-auto h-[100%]">
      <table className="w-full border border-white ">
        <thead>
          <tr className="flex gap-1 bg-primary">
            <th className="w-1/4 p-2 border">Exercise</th>
            <th className="w-1/4 p-2 border">Difficulty</th>
            <th className="w-1/4 p-2 border">Equipment</th>
            <th className="w-1/4 p-2 border">Muscle Groups</th>
          </tr>
        </thead>
        <tbody>
          {workout.exercises &&
            workout.exercises.map((ex, index) => (
              <tr key={index} className="flex gap-1">
                <td className={tdStyle}>{ex.name}</td>
                <td className={tdStyle}>{formatString(ex.difficulty)}</td>
                <td className={tdStyle}>{formatString(ex.equipment)}</td>
                <td className={tdStyle}>
                  {ex.muscleGroups.map((s) => formatString(s)).join(", ")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
