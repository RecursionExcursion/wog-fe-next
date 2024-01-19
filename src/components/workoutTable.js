import { formatString } from "../scripts/util.js";

export default function WorkoutTable(props) {
  const workout = props.workout ?? { exercises: [] };

  const tdStyle = "w-1/4 p-2 border flex justify-center";
  const thStyle = "w-1/4 p-2 border";

  return (
    <div className="overflow-y-auto h-[100%]">
      <table className="w-full border border-white ">
        <thead>
          <tr className="flex gap-1 bg-primary">
            <th className={thStyle}>Exercise</th>
            <th className={thStyle}>Difficulty</th>
            <th className={thStyle}>Equipment</th>
            <th className={thStyle}>Muscle Groups</th>
            <th className={thStyle}>How To</th>
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
                <td className={tdStyle}>
                {ex.notes && (
                  <a href={ex.notes} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Link
                  </a>
                )}
              </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
