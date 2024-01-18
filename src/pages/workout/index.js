import WorkoutTable from "@/components/workoutTable";
import { fetchWorkout } from "@/scripts/apifetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Workout() {
  const router = useRouter();
  const [workout, setWorkout] = useState({});

  const convertToArrayOfNumbers = (value) => {
    return Array.from(value === "EMPTY" ? [] : value).map(Number);
  };

  useEffect(() => {
    const putWorkout = async () => {
      const { name, numOfEx, repeat, equipment, muscleGroups, difficulties } =
        router.query;

      let workoutOrder;
      try {
        workoutOrder = {
          name: name.length > 0 ? name : "New Workout",
          numberOfExercises: parseInt(numOfEx, 10),
          repeatExercises: repeat === "true" ? true : false,
          equipment:convertToArrayOfNumbers(equipment),
          muscleGroups: convertToArrayOfNumbers(muscleGroups),
          difficulties: convertToArrayOfNumbers(difficulties),
        };
      } catch (error) {
        router.push({ pathname: "/error",
        query:  { error: error.message }
       });
      }

      try {
        const result = await fetchWorkout(workoutOrder).then((res) =>
          res.json()
        );
        setWorkout(result);
      } catch (error) {
        router.push({pathname:"/error/api-request-error", 
        query:  { error: error.message}})
      }
    };
    putWorkout();
  }, []);

  return <WorkoutTable workout={workout} />;
}
