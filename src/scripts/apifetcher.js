export function fetchTypes() {
  const path = "http://localhost:8080/api/workout/types";
  return fetchGET(path);
}

async function fetchGET(path) {
 return fetch(path, {
    method: "GET",
  }).then((res) => res.json());
}
