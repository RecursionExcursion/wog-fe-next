import { fetchWorkout } from "@/scripts/apifetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Workout() {
  const router = useRouter();
  const [workout, setWorkout] = useState({});

  const { name, numOfEx, repeat, equipment, muscleGroups, difficulties } =
    router.query;

  const query = router.query;

  console.dir("query", query);

  const workoutOrder = {
    name: name.length > 0 ? name : "New Workout",
    numberOfExercises: parseInt(numOfEx, 10),
    repeatExercises: Boolean(repeat),
    equipment: Array.from(equipment === 'EMPTY' ? [] : equipment).map(Number),
    muscleGroups: Array.from(muscleGroups === 'EMPTY' ? [] : muscleGroups).map(Number),
    difficulties: Array.from(difficulties === 'EMPTY' ? [] : difficulties).map(Number),
  };


  console.dir('order',workoutOrder)

  useEffect(() => {
    const putWorkout = async () => {
      try {
        const result = await fetchWorkout(workoutOrder).then((res) =>
          res.json()
        );
        setWorkout(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    putWorkout();
  }, []);

  useEffect(() => {
    console.log("workout", workout);
  }, [workout]);

  return <>Working Out</>;
}
