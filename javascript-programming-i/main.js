// List of Movies

let movie1 = {
  title: "Back to the Future",
  rating: 8.5,
  totalGross: 210609762,
  runningMinutes: 116,
  releaseYear: 1985,
  genres: ["action", "time travel", "adventure", "comedy"],
  screening: false,
}

let movie2 = {
  title: "Back to the Future II",
  rating: 7.8,
  totalGross: 118450002,
  runningMinutes: 106,
  releaseYear: 1989,
  genres: ["action", "time travel", "adventure", "comedy"],
  screening: false,
}

let movie3 = {
  title: "Back to the Future III",
  rating: 7.4,
  totalGross: 87727583,
  runningMinutes: 118,
  releaseYear: 1990,
  genres: ["action", "time travel", "adventure", "comedy"],
  screening: false,
}

let movies = [movie1, movie2, movie3]

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function showMovies() {
  movies.forEach(movie => {
    // Creating elements for our data inside the main tag. 
    const el = document.createElement('div');
    const text = document.createElement('h2');

    text.innerHTML = `${movie.title}`;
    el.appendChild(text);
    main.appendChild(el);
  }); 
}

showMovies();