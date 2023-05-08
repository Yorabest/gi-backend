const BASE_URL = 'http://localhost:3000/';

function deleteMovieById(moviaId) {
    fetch(`${BASE_URL}/movies/${moviaId}`, {methot: 'DELETE'})
        .then(res => res.json())
    .then(res => console.log(res))
}

deleteMovieById(1)