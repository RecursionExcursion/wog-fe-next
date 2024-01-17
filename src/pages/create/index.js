// CreateWorkout.jsx
import CheckboxForm from "@/components/checkboxform";
import CustomButton from "@/components/custombutton";
import { fetchTypes } from "@/scripts/apifetcher";
import { useEffect, useState } from "react";

export default function CreateWorkout() {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [difficulties, setDifficulties] = useState([]);

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

  const [selectedData, setSelectedData] = useState({
    equipment: [],
    muscleGroups: [],
    difficulties: [],
  });

  const handleSelectionSubmit = (type, selectedOptions) => {
    setSelectedData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], ...selectedOptions],
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Data:", selectedData);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center w-64"
      >
        <div className="flex flex-row mb-2 flex-shrink-0 flex-grow-0">
          <CheckboxForm
            title="Equipment"
            options={equipment}
            onSelection={(selected) =>
              handleSelectionSubmit("equipment", selected)
            }
          />
          <CheckboxForm
            title="Muscle Groups"
            options={muscleGroups}
            onSelection={(selected) =>
              handleSelectionSubmit("muscleGroups", selected)
            }
          />
          <CheckboxForm
            title="Difficulties"
            options={difficulties}
            onSelection={(selected) =>
              handleSelectionSubmit("difficulties", selected)
            }
          />
        </div>
        <CustomButton text={"Submit"} type={"submit"} />
      </form>
    </div>
  );
}
