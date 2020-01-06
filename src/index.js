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

// Función para recorre y mostrar la data y que llama Fetch
let data;

const showMovies = (movies) => {
    document.getElementById('answer').innerHTML = '';
    let rawstring = JSON.stringify(movies);
        data = JSON.parse(rawstring);
        console.log(data)
        
        for (let i = 0, len = 10 ; i < len; i++) {
            let title = data.Search[i].Title;
            let year = data.Search[i].Year; 
            let imdburl="https://www.imdb.com/title/"+data.Search[i].imdbID+"/";
            let posterurl =data.Search[i].Poster;
            
            const card = document.createElement('div');
            card.classList.add('card-style');
            card.innerHTML = `<img src=' ${posterurl}'>
                      <h3>${title}</h3>
                      <p><span>Año: </span>${year}</p>
                      <p><span>IMDB: </span>${imdburl}</p>`;
            document.getElementById('answer').appendChild(card);
        }
    };


// Acción de buscar película

let searching = document.getElementById('buttonSearch');
searching.addEventListener('click' , function getanswer(){
    
    let q = document.getElementById('qurybox').value;
    
    fetch("https://www.omdbapi.com/?s="+ q +"&apikey=e0c6a2f1")
        .then(response => response.json())
        .then(showMovies)
        .catch((error) => { console.log(error) })
    });

