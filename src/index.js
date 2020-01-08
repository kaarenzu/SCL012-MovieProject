console.log('Hola')

let data;

const movieArray = ["tt7286456","tt1302006","tt7653254","tt8404614","tt7131622","tt8946378","tt6751668","tt8579674"]; //Arrays de los IMDB ID de las películas de los quizz

// Generar el div de cada película
const showMovies = (movies) => {
    const divAnswer = document.getElementById('answer');
    divAnswer.innerHTML = '';
    document.getElementById('quizzes').innerHTML = '';
    data = movies;
    console.log(data)

    // PREGUNTAS DE JOKER
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

    // PREGUNTAS DE THE IRISHMAN
    let questionsIrishman = [
        {
            question: "¿En qué fecha se estrenó The Irishman?",
            answers: [{ans:"05 Ago 2019", isRight: false}, 
                    {ans: "13 Mar 2019", isRight: false}, 
                    {ans: data.Released, isRight: true}, 
                    {ans:"10 Sep 2019", isRight: false}]
        },
        {
            question: "¿Quién escribió el guión de la película The Irishman?",
            answers: [{ans: data.Writer, isRight: true}, 
                    {ans: "Noah Baumbach.", isRight: false}, 
                    {ans: "Anthony McCarten", isRight: false}, 
                    {ans:"Vladislav Kozlov", isRight: false}]
        },
        {
            question: "¿Qué tipo de género es?",
            answers: [{ans: "Comedia", isRight: false}, 
                    {ans: "Crimen", isRight: false}, 
                    {ans: data.Genre, isRight: true}, 
                    {ans:"Todas las anteriores", isRight: false}]
        },
        {
            question: "¿País de origen de la película?",
            answers: [{ans: "Inglaterra", isRight: false}, 
                    {ans: "Chile", isRight: false}, 
                    {ans: "España", isRight: false}, 
                    {ans: data.Country, isRight: true}]
        },
        {
            question: "¿Cómo se llama el actor principal de The Irishman?",
            answers: [{ans: "Anthony Hopkins", isRight: false}, 
                    {ans: "Sidney Cole", isRight: false}, 
                    {ans: data.Actors, isRight: true}, 
                    {ans:"Anthony McCarten", isRight: false}]
        }
    ];

        // PREGUNTAS DE THE MARRIAGE STORY
        let questionsMarriage = [
            {
                question: "¿En qué fecha se estrenó Marriage Story?",
                answers: [{ans:"11 Oct 2019", isRight: false}, 
                        {ans: "20 Dic 2019", isRight: false}, 
                        {ans: "07 Nov 2019", isRight: false}, 
                        {ans: data.Released, isRight: true}]
            },
            {
                question: "¿Cómo se llama el director de la película Marriage Story?",
                answers: [{ans:  "David Lynch", isRight: false}, 
                        {ans: data.Director, isRight: true}, 
                        {ans: "Steven Soderbergh", isRight: false}, 
                        {ans:"Ninguna de las Anteriores", isRight: false}]
            },
            {
                question: "¿Quiénes protagonizan de la película Marriage Story?",
                answers: [{ans: "Anthony Hopkins,Meryl Streep", isRight: false}, 
                        {ans: "Julia Roberts,Joseph Gordon-Levitt", isRight: false}, 
                        {ans: "Benedict Cumberbatch,Charlize Theron", isRight: false}, 
                        {ans: data.Actors, isRight: true}]
            },
            {
                question: "¿Cuál es el país de origen de la película Marriage Story? ",
                answers: [{ans: "México", isRight: false}, 
                        {ans: "Francia", isRight: false}, 
                        {ans: "Canadá", isRight: false}, 
                        {ans: data.Country, isRight: true}]
            },
            {
                question: "¿Cuál es el tiempo de duración de la película?",
                answers: [{ans: "150 min", isRight: false}, 
                        {ans: data.Runtime, isRight: true}, 
                        {ans: "185 min", isRight: false}, 
                        {ans:"122 min", isRight: false}]
            }
        ];

    

    let title = data.Title;
    let posterurl =data.Poster;
    let score = 0;

    // Función que genera los Quizes y te da los resultados
    function newQuiz (arrayOf) {
        const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = `<h3>${title}</h3>
                     <img class="cover-quizzes" src=' ${posterurl}'>`
    const questionsPart = document.createElement('div');
    let allQuestions = '';
    
    // Recorre cada pregunta del array de preguntas de la película
    for (let i = 0, len = arrayOf.length; i < len; i++) {
        let eachQuestions = 
            `<form id=${i}><br>
            <p>${arrayOf[i].question}</p>
            <input type="radio" name="ansJ" value=${arrayOf[i].answers[0].isRight}>${arrayOf[i].answers[0].ans}<br>
            <input type="radio" name="ansJ" value=${arrayOf[i].answers[1].isRight}>${arrayOf[i].answers[1].ans}<br>
            <input type="radio" name="ansJ" value=${arrayOf[i].answers[2].isRight}>${arrayOf[i].answers[2].ans}<br>
            <input type="radio" name="ansJ" value=${arrayOf[i].answers[3].isRight}>${arrayOf[i].answers[3].ans}
            </form><br>`;
        allQuestions = allQuestions + eachQuestions;
    }
    const submitAnswer = document.createElement('div');
    submitAnswer.innerHTML = `<button id="buttonResults">Enviar</button>`;

    questionsPart.innerHTML = allQuestions;
    document.getElementById('answer').appendChild(card);
    document.getElementById('answer').appendChild(questionsPart);
    document.getElementById('answer').appendChild(submitAnswer);

    // El evento del botón de Enviar y que te da los resultados
    document.getElementById('buttonResults').addEventListener('click', () => {
        let newResults = document.getElementsByName('ansJ');
        for (let i = 0; i < newResults.length; i++) {
            if (newResults[i].checked == true && newResults[i].value == "true") {
                score += 1;
            }
        };
        console.log(score)
        divAnswer.innerHTML = '';
        if (score == 5) {
            divAnswer.innerHTML = `<h3>¡Felicitaciones! 
                                    <h4>Has acertado ${score} de 5</h4>
                                    <h5>Has ganado 2 entradas al cine</h5>
                                    <h5>para ver tu película favorita</h5>
                                    <p>Guarda este códico QR y preséntalo en las bolterías</p>
                                    <img src=images/qr_img.png>`
        } else {
            divAnswer.innerHTML = `<h3>Perdiste</h4>
                                    <h4>Has acertado ${score} de 5</h4>
                                    <h5>Pero sigue intentándolo</h5>
                                    <p>Participa de nuevo por tus entradas de regalo</p>
                                    <a id="restart" href="index.html">Volver a intentarlo</a>`
        }
    });
    }

    // Condicionales para saber que película clickeó y qué quiz mostrar
    if (data.imdbID == "tt7286456") {
        return newQuiz(questionsJoker);
    } else if (data.imdbID == "tt1302006") {
        return newQuiz(questionsIrishman);
    } else if (data.imdbID == "tt7653254") {
        return newQuiz(questionsMarriage);
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







