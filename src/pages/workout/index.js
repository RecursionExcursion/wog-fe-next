import { fetchWorkout } from "@/scripts/apifetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Workout() {
  const router = useRouter();
  const [workout, setWorkout] = useState({});

  const { equipment, muscleGroups, difficulties } = router.query;

  const workoutOrder = {
    name: "Workout Name",
    numberOfExercises: 3,
    repeatExercises: true,
    equipment: Array.isArray(equipment)
      ? equipment.map((item) => parseInt(item, 10))
      : [],
    muscleGroups: Array.isArray(muscleGroups)
      ? muscleGroups.map((item) => parseInt(item, 10))
      : [],
    difficulties: Array.isArray(difficulties)
      ? difficulties.map((item) => parseInt(item, 10))
      : [],
  };

  useEffect(() => {
    const putWorkout = async () => {
      try {
        const result = await fetchWorkout(workoutOrder).then(res=>res.json());
        setWorkout(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    putWorkout();
  }, []);

  useEffect(() => {
    console.log('workout',workout);
  }, [workout]);

  return <>Working</>;
}
