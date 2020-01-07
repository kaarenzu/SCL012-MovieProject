console.log('Hola')

let data;

const movieArray = ["tt7286456","tt1302006","tt7653254","tt8404614","tt7131622","tt8946378","tt6751668","tt8579674"]; //Arrays de los IMDB ID de las películas de los quizz

// Generar el div de cada película
const showMovies = (movies) => {
    document.getElementById('answer').innerHTML = '';
    document.getElementById('quizzes').innerHTML = '';
    data = movies;
    console.log(data)
    let questionsJoker = [
        {
            question: "¿En qué fecha se estrenó el Joker?",
            answers: [{ans:"05 Sep 2019", isRight: false}, 
                    {ans: data.Released, isRight: true}, 
                    {ans: "03 Nov 2019", isRight: false}, 
                    {ans:"Ninguna de las anteriores", isRight: false}]
        },
        {
            question: "¿Quién es su director?",
            answers: [{ans: data.Director, isRight: true}, 
                    {ans: "James Cameron", isRight: false}, 
                    {ans: "Christian Davi", isRight: false}, 
                    {ans:"Sam Mendes", isRight: false}]
        },
        {
            question: "Nombre de su productora",
            answers: [{ans: "Universal Pictures", isRight: false}, 
                    {ans: data.Production, isRight: true}, 
                    {ans: "Dreamworks", isRight: false}, 
                    {ans:"Ninguna de las Anteriores", isRight: false}]
        },
        {
            question: "Nombre del actor principal",
            answers: [{ans: "Andrew Scott", isRight: false}, 
                    {ans: "Roman Griffin Davis", isRight: false}, 
                    {ans: data.Actors, isRight: true}, 
                    {ans:"Benedict Cumberbatch", isRight: false}]
        },
        {
            question: "¿De qué género es el Joker?",
            answers: [{ans: "Comedia", isRight: false}, 
                    {ans: "Suspenso", isRight: false}, 
                    {ans: data.Genre, isRight: true}, 
                    {ans:"a y b", isRight: false}]
        }
    ];

    let title = data.Title;
    let posterurl =data.Poster;
    
    if (data.imdbID == "tt7286456") {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = `<img class="cover-quizzes" src=' ${posterurl}'>
                      <h3>${title}</h3>
                      <h4>Preguntas</h4>`
    const questionsPart = document.createElement('div');
    let allQuestions = '';
    for (let i = 0, len = questionsJoker.length; i < len; i++) {
    
    let eachQuestions = 
            `<p>${questionsJoker[i].question}</p>
            <button>${questionsJoker[i].answers[0].ans}</button>
            <button>${questionsJoker[i].answers[1].ans}</button>
            <button>${questionsJoker[i].answers[2].ans}</button>
            <button>${questionsJoker[i].answers[3].ans}</button>`;
        allQuestions = allQuestions + eachQuestions;

    }
    questionsPart.innerHTML = allQuestions;
    document.getElementById('answer').appendChild(card);
    document.getElementById('answer').appendChild(questionsPart);

    } else if (data.imdbID == "tt1302006") {
        const card = document.createElement('div');
        card.classList.add('card-style');
        card.innerHTML = `<img class="cover-quizzes" src=' ${posterurl}'>
                          <h3>${title}</h3>
                          <h4>Preguntas</h4>
                          <p>${questionsJoker[0].question}</p>
                          <button>${questionsJoker[0].answers[0].ans}</button>
                          <button>${questionsJoker[0].answers[1].ans}</button>
                          <button>${questionsJoker[0].answers[2].ans}</button>
                          <button>${questionsJoker[0].answers[3].ans}</button>`;
        document.getElementById('answer').appendChild(card);
    };
    
};

//Función de Fetch 
let getAnswer = (q) => {
    fetch("http://www.omdbapi.com/?i="+ q +"&apikey=e0c6a2f1")
        .then(response => response.json())
        .then(showMovies)
        .catch((error) => { console.log(error) })
};

// Evento de click en el poster
let jokerQuiz = document.getElementById('buttonJoker');
jokerQuiz.addEventListener('click' , (e) => {
    getAnswer(movieArray[0]);
    e.preventDefault();
});

let irishmanQuiz = document.getElementById('buttonIrishman');
irishmanQuiz.addEventListener('click' , (e) => {
    getAnswer(movieArray[1]);
    e.preventDefault();
});

let marriageQuiz = document.getElementById('buttonMarriage');
marriageQuiz.addEventListener('click' , (e) => {
    getAnswer(movieArray[2]);
    e.preventDefault();
});

let popesQuiz = document.getElementById('buttonPopes');
popesQuiz.addEventListener('click' , (e) => {
    getAnswer(movieArray[3]);
    e.preventDefault();
});







