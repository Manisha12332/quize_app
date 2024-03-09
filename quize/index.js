const questions = [{
    'que': "Which of the following is a markup languae",
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'javascript',
    'd' : 'java',
    'correct' : 'a'
},
{
    'que': "what is the capital of Bihar ?",
    'a' : 'Asam',
    'b' : 'New delhi',
    'c' : 'purnia',
    'd' : 'patna',
    'correct' : 'b'
},
{
    'que': "where is the LPU university.",
    'a' : 'UP',
    'b' : 'Bihar',
    'c' : 'Punjab',
    'd' : 'MP',
    'correct' : 'c'
}
]
let index = 0;
let total = questions.length;
let  right = 0,
     wrong  = 0;
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion = () =>{
    if(index == total) {
        return endQuiz()
    }
    reset();
     const data = questions[index]
     queBox.innerText = `${index+1}) ${data.que}`;
     optionInputs[0].nextElementSibling.innerText= data.a;
     optionInputs[1].nextElementSibling.innerText= data.b;
     optionInputs[2].nextElementSibling.innerText= data.c;
     optionInputs[3].nextElementSibling.innerText= data.d;
}

const submitQuize = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;    
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked =  false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> thank you for playing</h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}
loadquestion();  