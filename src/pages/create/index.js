import CheckboxForm from "@/components/checkboxform";
import { fetchTypes } from "@/scripts/apifetcher";
import { useEffect, useState } from "react";

export default function CreateWorkout() {
  const [data, setData] = useState([]);

  const [muscleGroups, setMuscleGroups] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [difficulties, setDifficulties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchTypes();
        console.log(results)
        setMuscleGroups(results[0]);
        setEquipment(results[1]);
        setDifficulties(results[2]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("data", data);
    console.log("equipment", equipment);
  }, [data, equipment]);

  return (
    <div className="flex flex-row justify-center items-start gap-8">
      <CheckboxForm options={equipment} />
      <CheckboxForm options={muscleGroups} />
      <CheckboxForm options={difficulties} />
    </div>
  );
}
