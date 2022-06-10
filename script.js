console.log('Hello World!');

//initialise the scores
let type1Score = 0;
let type2Score = 0;
let type3Score = 0;
let type4Score = 0;

let scores = [];
const grocery = document.getElementById('grocery');
const art = document.getElementById('art');
const geek = document.getElementById('geek');
const snob = document.getElementById('snob');
const endResult = document.getElementById('result');

//function to calculate the result of the questionnaire
function getResult() {
    let options = document.getElementsByTagName('input');

    for (i=0; i<options.length; i++) {
        if (options[i].checked) {
            if (options[i].value == 'type1') {
                type1Score = type1Score + 1;
            }
            if (options[i].value == 'type2') {
                type2Score = type2Score + 1;
            }
            if (options[i].value == 'type3') {
                type3Score = type3Score + 1;
            }
            if (options[i].value == 'type4') {
                type4Score = type4Score + 1;
            }
        }
    }    
    scores.push(type1Score,type2Score,type3Score,type4Score);
    console.log(scores);

    for (let i=0; i<scores.length; i++) {
        if (type1Score >= 3) {
            console.log('grocery');
            endResult.style.display = 'none';
            grocery.style.display = 'block';
        }
        
        if (type2Score >= 3) {
            console.log('art');
            endResult.style.display = 'none';
            art.style.display = 'block';
        }
        
        if (type3Score >= 3) {
            console.log('geek');
            endResult.style.display = 'none';
            geek.style.display = 'block';
        }
        
        if (type4Score >= 3) {
            console.log('snob');
            endResult.style.display = 'none';
            snob.style.display = 'block';
        } else {
            endResult.innerHTML = 'Sorry no clear result has come up. <br>Please try again.'
        }
    }
}