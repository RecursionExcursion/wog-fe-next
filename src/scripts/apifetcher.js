const basePath = "http://localhost:8080/api/workout"



export function fetchTypes() {
  const path = basePath + "/types";
  return fetchGET(path);
}

export function fetchWorkout(obj) {

  console.log('fetch obj',obj)

  const path = basePath;

  const requestBody = {
    name: obj.name,  
    numberOfExercises: obj.numberOfExercises,
    repeatExercises: obj.repeatExercises,
    equipment: obj.equipment,  
    muscleGroups: obj.muscleGroups,  
    difficulties: obj.difficulties
  };

  return fetch(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody)
  });
}

async function fetchGET(path) {
 return fetch(path, {
    method: "GET",
  }).then((res) => res.json());
}