const BASE_URL = 'http://localhost:3000/'  

const newMovie = {
     title: "Titel",
      director: "Director",
      genres: ["Drama"],
      rating: 9
}

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-type': 'aplication/json'
//     },
//     body: JSON.stringify(newMovie)
// }

// fetch(`${BASE_URL}movies`, options)
//     .then(response => response.json())
// .then(console.log) 

function addNewMovie(newMovie) {   
const options = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newMovie)
}

 return fetch(`${BASE_URL}movies`, options)
    .then(response => response.json())
.then(res => console.log(res)) 
};

addNewMovie(newMovie)