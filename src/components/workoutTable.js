export default function WorkoutTable(props) {
  const workout = props.workout ?? { exercises: [] };

  const formatString = (inputString) => {
    if (!inputString || typeof inputString !== "string") {
      return "";
    }

    const words = inputString.toLowerCase().split(/[_\s]+/);

    // Capitalize the first letter of each word
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the words with spaces
    return formattedWords.join(" ");
  };

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
