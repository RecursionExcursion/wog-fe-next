import CheckboxForm from "@/components/checkboxform";
import CustomButton from "@/components/custombutton";
import { fetchTypes } from "@/scripts/apifetcher";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CreateWorkout() {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const router = useRouter();

  const [myNumber, setMyNumber] = useState(1); // Default value is 5

  const handleChange = (event) => {
    setMyNumber(Number(event.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchTypes();
        setMuscleGroups(results[0]);
        setEquipment(results[1]);
        setDifficulties(results[2]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    const selectedEquipment = Array.from(formData.getAll("Equipment"));
    const selectedMuscleGroups = Array.from(formData.getAll("Muscle Groups"));
    const selectedDifficulties = Array.from(formData.getAll("Difficulties"));

    const nonEmptySelectedEquipment =
      selectedEquipment.length > 0 ? selectedEquipment : ["EMPTY"];
    const nonEmptySelectedMuscleGroups =
      selectedMuscleGroups.length > 0 ? selectedMuscleGroups : ["EMPTY"];
    const nonEmptySelectedDifficulties =
      selectedDifficulties.length > 0 ? selectedDifficulties : ["EMPTY"];

    formData = {
      name: event.target.name.value,
      numOfEx: event.target.numOfExercises.value,
      repeat: event.target.repeat.checked,
      equipment: nonEmptySelectedEquipment,
      muscleGroups: nonEmptySelectedMuscleGroups,
      difficulties: nonEmptySelectedDifficulties,
    };

    router.push({
      pathname: "/workout",
      query: formData,
    });
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center max-h-full overflow-auto"
      >
        <div className="flex flex-col gap-2">
          <label>
            <input
              className="text-black"
              type="text"
              placeholder="Enter text"
              name="name"
            />
            {"Name"}
          </label>

          <label>
            <input
              className="text-black"
              type="number"
              min={1}
              value={myNumber}
              onChange={handleChange}
              placeholder="Enter number"
              name="numOfExercises"
            />
            {"# of exercises"}
          </label>
        </div>
        <label>
          <input type="checkbox" id="myCheckbox" name="repeat" checked/>
          {"Allow exercies to repeat"}
        </label>
        <div className="flex flex-row">
          <CheckboxForm
            title="Equipment"
            name="equipment"
            options={equipment}
          />
          <CheckboxForm
            title="Muscle Groups"
            name="muscleGroups"
            options={muscleGroups}
          />
          <CheckboxForm
            title="Difficulties"
            name="difficulties"
            options={difficulties}
          />
        </div>
        <div className="flex w-full justify-center">
          <CustomButton text={"Submit"} type={"submit"} styling={"w-full"} />
        </div>
      </form>
    </div>
  );
}
