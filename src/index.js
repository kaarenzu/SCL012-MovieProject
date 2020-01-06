console.log('Hola')

/*
const fn = (cb) => {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': '',
            'Authorization': 'Bearer <token>',
        },
    };

    fetch('http://test.com/url.json', opts)
        .then((data) => {
            cb(data);
        });
};

const cb = (data) => {
    console.log('> data: ', data);
};

fn(cb);


const getUser = (cb) => {};

getUser((user) => {

}) */

let data;

const movieArray = ["tt7286456","tt1302006","tt7653254","tt8404614","tt2584384",
                    "tt7131622","tt8946378","tt8579674"]; //Arrays de los IMDB ID de las películas de los quizz

// Generar el div de cada película
const showMovies = (movies) => {
    document.getElementById('answer').innerHTML = '';
    data = movies;
    console.log(data)

    let title = data.Title;
    let year = data.Year; 
    let imdburl="https://www.imdb.com/title/"+data.imdbID+"/";
    let posterurl =data.Poster;
            
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = `<img src=' ${posterurl}'>
                      <h3>${title}</h3>
                      <p><span>Año: </span>${year}</p>
                      <p><span>IMDB: </span>${imdburl}</p>`;
    document.getElementById('answer').appendChild(card);
};

//Función de Fetch 
let getAnswer = (q) => {
    fetch("http://www.omdbapi.com/?i="+ q +"&apikey=e0c6a2f1")
        .then(response => response.json())
        .then(showMovies)
        .catch((error) => { console.log(error) })
};

// Evento de click en el poster
let jokerQuizz = document.getElementById('buttonJoker');
jokerQuizz.addEventListener('click' , (e) => {
    getAnswer(movieArray[0]);
    //e.stopPropagation();
    e.preventDefault();	
  });







