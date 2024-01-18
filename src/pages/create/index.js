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

  const [myNumber, setMyNumber] = useState(1);
  const [repeat, setRepeat] = useState(true);

  const handleNumberChange = (event) => {
    setMyNumber(Number(event.target.value));
  };

  const handleRepeatCheckboxChange = () => {
    setRepeat(!repeat);
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

    const checkOptions = [
      selectedEquipment,
      selectedMuscleGroups,
      selectedDifficulties,
    ];

    checkOptions.forEach((arr, index) => {
      checkOptions[index] = arr.length > 0 ? arr : ["EMPTY"];
    });

    formData = {
      name: event.target.name.value,
      numOfEx: event.target.numOfExercises.value,
      repeat: event.target.repeat.checked,
      equipment: checkOptions[0],
      muscleGroups: checkOptions[1],
      difficulties: checkOptions[2],
    };

    console.dir("formdata", formData);

    router.push({
      pathname: "/workout",
      query: formData,
    });
  };

  const upperFormStyling = "flex flex-row gap-2"

  return (
    <div className="h-[100%] p-5">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center max-h-full overflow-auto gap-4"
      >
        {/* Exercise name */}
        <div className="flex flex-col gap-2">
          <div className={upperFormStyling}>
            <input
              className="text-black w-28 rounded-full pl-2"
              type="text"
              placeholder="Enter text"
              name="name"
            />
            <label>{"Name"}</label>
          </div>

          {/* #of Exercises */}
          <div className={upperFormStyling}>
            <input
              className="text-black w-20 text-center rounded-full pr-2"
              type="number"
              min={1}
              value={myNumber}
              onChange={handleNumberChange}
              placeholder="Enter number"
              name="numOfExercises"
            />
            <label>{"# of exercises"}</label>
          </div>

          {/* Allow repeat */}
          <div className={upperFormStyling}>
            <input
              type="checkbox"
              id="myCheckbox"
              name="repeat"
              onChange={handleRepeatCheckboxChange}
              checked={repeat}
            />
            <label>{"Allow exercies to repeat"}</label>
          </div>
        </div>

        {/* Checkboxes */}
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
