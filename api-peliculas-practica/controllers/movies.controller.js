const movies = [
    {
        title: "Judy",
        yearReleased: 2019,
        genre: "Biografía",
        starring: ["Renée Zellweger", "Jessie Buckley", "Finn Wittrock"]
      },
      {
        title: "Ford v Ferrari",
        yearReleased: 2019,
        genre: "Biografía/Deportes",
        starring: ["Matt Damon", "Christian Bale", "Jon Bernthal"]
      },
      {
        title: "The Two Popes",
        yearReleased: 2019,
        genre: "Biografía/Drama",
        starring: ["Anthony Hopkins", "Jonathan Pryce"]
      },
      {
        title: "The Trial of the Chicago 7",
        yearReleased: 2020,
        genre: "Biografía/Drama",
        starring: ["Sacha Baron Cohen", "Eddie Redmayne", "Yahya Abdul-Mateen II"]
      },
      {
        title: "Respect",
        yearReleased: 2021,
        genre: "Biografía/Música",
        starring: ["Jennifer Hudson", "Forest Whitaker", "Marlon Wayans"]
      },
      {
        title: "Elvis",
        yearReleased: 2022,
        genre: "Biografía/Música",
        starring: ["Austin Butler", "Tom Hanks", "Olivia DeJonge"]
      },
    {
      title: "Mad Max: Fury Road",
      yearReleased: 2015,
      genre: "Action",
      starring: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
    },

    {
      title: "Parasite",
      yearReleased: 2019,
      genre: "Thriller",
      starring: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
    },
    {
      title: "Get Out",
      yearReleased: 2017,
      genre: "Horror",
      starring: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"]
    },
    {
      title: "La La Land",
      yearReleased: 2016,
      genre: "Romance",
      starring: ["Ryan Gosling", "Emma Stone", "John Legend"]
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      yearReleased: 2018,
      genre: "Animation",
      starring: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"]
    },
    {
      title: "1917",
      yearReleased: 2019,
      genre: "War",
      starring: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"]
    },
    {
      title: "Jojo Rabbit",
      yearReleased: 2019,
      genre: "Comedy",
      starring: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson"]
    },
    {
      title: "The Revenant",
      yearReleased: 2015,
      genre: "Adventure",
      starring: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"]
    },
    {
      title: "Whiplash",
      yearReleased: 2014,
      genre: "Drama",
      starring: ["Miles Teller", "J.K. Simmons", "Paul Reiser"]
    },
    {
      title: "The Grand Budapest Hotel",
      yearReleased: 2014,
      genre: "Comedy",
      starring: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"]
    },
    {
      title: "Blade Runner 2049",
      yearReleased: 2017,
      genre: "Sci-Fi",
      starring: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"]
    },
    {
      title: "Moonlight",
      yearReleased: 2016,
      genre: "Drama",
      starring: ["Mahershala Ali", "Naomie Harris", "Trevante Rhodes"]
    },
    {
      title: "The Shape of Water",
      yearReleased: 2017,
      genre: "Fantasy",
      starring: ["Sally Hawkins", "Michael Shannon", "Richard Jenkins"]
    },
    {
      title: "A Star Is Born",
      yearReleased: 2018,
      genre: "Drama",
      starring: ["Bradley Cooper", "Lady Gaga", "Sam Elliott"]
    },
    {
      title: "Her",
      yearReleased: 2013,
      genre: "Romance",
      starring: ["Joaquin Phoenix", "Amy Adams", "Scarlett Johansson"]
    },
    {
      title: "Dunkirk",
      yearReleased: 2017,
      genre: "War",
      starring: ["Fionn Whitehead", "Barry Keoghan", "Mark Rylance"]
    },
    {
      title: "Joker",
      yearReleased: 2019,
      genre: "Drama",
      starring: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
    },
    {
      title: "Black Panther",
      yearReleased: 2018,
      genre: "Action",
      starring: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"]
    },
    {
      title: "The Irishman",
      yearReleased: 2019,
      genre: "Crime",
      starring: ["Robert De Niro", "Al Pacino", "Joe Pesci"]
    },
    {
      title: "Marriage Story",
      yearReleased: 2019,
      genre: "Drama",
      starring: ["Adam Driver", "Scarlett Johansson", "Laura Dern"]
    },
    {
      title: "Inception",
      yearReleased: 2010,
      genre: "Sci-Fi",
      starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "The Dark Knight",
      yearReleased: 2008,
      genre: "Action",
      starring: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
      title: "Pulp Fiction",
      yearReleased: 1994,
      genre: "Crime",
      starring: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Shawshank Redemption",
      yearReleased: 1994,
      genre: "Drama",
      starring: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
      title: "The Matrix",
      yearReleased: 1999,
      genre: "Sci-Fi",
      starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      yearReleased: 1994,
      genre: "Drama",
      starring: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "Gladiator",
      yearReleased: 2000,
      genre: "Action",
      starring: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
    },
    {
      title: "Titanic",
      yearReleased: 1997,
      genre: "Romance",
      starring: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
    },
    {
      title: "The Godfather",
      yearReleased: 1972,
      genre: "Crime",
      starring: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      yearReleased: 2001,
      genre: "Fantasy",
      starring: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
    },
    {
      title: "Fight Club",
      yearReleased: 1999,
      genre: "Drama",
      starring: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Avatar",
      yearReleased: 2009,
      genre: "Sci-Fi",
      starring: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
    },
    {
      title: "Interstellar",
      yearReleased: 2014,
      genre: "Sci-Fi",
      starring: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
    {
      title: "Jurassic Park",
      yearReleased: 1993,
      genre: "Adventure",
      starring: ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
    },
    {
      title: "The Lion King",
      yearReleased: 1994,
      genre: "Animation",
      starring: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      yearReleased: 1977,
      genre: "Sci-Fi",
      starring: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"]
    },
    {
      title: "The Silence of the Lambs",
      yearReleased: 1991,
      genre: "Thriller",
      starring: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"]
    },
    {
      title: "Saving Private Ryan",
      yearReleased: 1998,
      genre: "War",
      starring: ["Tom Hanks", "Matt Damon", "Tom Sizemore"]
    },
    {
      title: "Schindler's List",
      yearReleased: 1993,
      genre: "Drama",
      starring: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"]
    },
    {
      title: "The Green Mile",
      yearReleased: 1999,
      genre: "Fantasy",
      starring: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
    },
    {
      title: "Braveheart",
      yearReleased: 1995,
      genre: "Historical",
      starring: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"]
    },
    {
      title: "The Departed",
      yearReleased: 2006,
      genre: "Crime",
      starring: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "Goodfellas",
      yearReleased: 1990,
      genre: "Crime",
      starring: ["Robert De Niro", "Ray Liotta", "Joe Pesci"]
    },
    {
      title: "A Beautiful Mind",
      yearReleased: 2001,
      genre: "Biography",
      starring: ["Russell Crowe", "Ed Harris", "Jennifer Connelly"]
    },
    {
      title: "The Social Network",
      yearReleased: 2010,
      genre: "Biography",
      starring: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    }
  ];

const ControladorPeliculas = {
    // http://localhost:8000/api/movies
    obtenerTodosLasPeliculas: (req, res) => {
        res.json(movies);
        if (movies.length == 0) {
            res.status(404).json({ message: "No hay peliculas" });
        }
    },
    // http://localhost:8000/api/movies/year/2017
    obtenerPeliculaporYear: (req, res) => {
        const year = req.params.year;
        const moviesByYear = movies.filter(m => m.yearReleased == year);
        res.json(moviesByYear);
        if (moviesByYear.length == 0) {
            res.status(404).json({ message: "No hay peliculas publicadas ese año" });
        }
    },
    borrarPeliculaporTitle: (req, res) => {
        const title = req.params.title;
        const moviesByTitle = movies.filter(m => m.title != title);
        res.json(moviesByTitle);
        if (moviesByTitle.length == 0) {
            res.status(404).json({ message: "No hay peliculas con ese nombre" });
        }

    },
    actualizarPeliculaporTitle: (req, res) => {
        const index = movies.findIndex(movie => movie.title == req.params.title);
        if (index !== -1) {
            movies[index].title = req.body.title;
            res.json(movies[index]);
        } else {
            res.status(404).json({ message: "No hay película con ese título" });
        }
    },

    crearPelicula: (req, res) => {
        const nuevaPelicula = req.body;
        movies.push(nuevaPelicula);
        res.status(201).json(nuevaPelicula);
        
    }

};

export default ControladorPeliculas;