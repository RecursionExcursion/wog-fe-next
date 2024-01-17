


export async function fetchTypes(){
    const path = 'http://localhost:8080/api/workout/types'
    return fetchGET(path)
}


async function fetchGET(path){
    const results = await fetch(path, {
        method: "GET"
    }).then(res=>res.json())
    return results
}