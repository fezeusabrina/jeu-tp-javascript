var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var resultat = document.getElementById("resultat");
var question = document.getElementById("question");
var temps = document.getElementById("temps");
var divCommencer = document.getElementById("divCommencer");
var points = document.getElementById("points");
var j = document.getElementById("score");
var rep = "10";
var k = 1;
var chrono;
var score = 0;
var timeLeft = 20;

divCommencer.onclick = questionSuiv();

function soumettre(){
    if(reponse.value == rep){
        k++;
        score = score + 10;
        clearInterval(chrono);
        reponse.value = null;
        resultat.textContent = "Bonne réponse!!";
        points.textContent = score.toString() + " Points";
        timeLeft = 20;
        temps.textContent = timeLeft.toString();
        setTimeout(() => {
            resultat.textContent = null;
            questionSuiv(k);
            timer();
        }, 3000);
        if(k == 6) {
            clearInterval(chrono);
            document.location.href = "score.html?" + score;
        }
    }
    else{
        resultat.textContent = "Mauvaise réponse!!";
    }
}

function afficheScore() {
    params = window.location.search.split(";");
    score = params[0].substring(1,params[0].length);
    j.textContent = score;
}

function questionSuiv(i){
    /*if (i == 1) {
        question.textContent = "Il existe combien de régions au Cameroun?";
        rep = "10";
    }*/
    if (i == 2) {
        question.textContent = "Il existe combien de départements dans le cameroun?";
        rep = "58";
    }
    if (i == 3) {
        question.textContent = "Quel est le résultat de l'union entre un ovule et un spermatozoide?";
        rep = "oeuf";
    }
    if (i == 4) {
        question.textContent = "Il existe combien d'arrondissement au cameroun?";
        rep = "361";
    }
    if (i == 5) {
        question.textContent = "Quelle est la date de la reunification du cameroun?";
        rep = "20 mai 1972";
    }
}

function timer() {
    timeLeft = 20;
    temps.textContent = timeLeft.toString();
    clearInterval(chrono);
    chrono = setInterval(() => {
        timeLeft--;
        if(timeLeft == 0){
            k++;
            temps.textContent = timeLeft.toString();
            clearInterval(chrono);
            reponse.value = null;
            setTimeout(() => {
                if (k == 6) {
                    document.location.href = "score.html";
                }
                else{
                    resultat.textContent = null;
                    questionSuiv(k);
                    timer();
                }
            }, 3000);
        }else {
            temps.textContent = timeLeft.toString();
        }
      }, 1000);
}

function init() {
    questionSuiv();
    timer();
}